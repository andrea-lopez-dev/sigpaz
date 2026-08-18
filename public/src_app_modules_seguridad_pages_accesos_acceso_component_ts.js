(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_seguridad_pages_accesos_acceso_component_ts"],{

/***/ 5814:
/*!******************************************!*\
  !*** ./node_modules/crypto-js/evpkdf.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./sha1 */ 80867), __webpack_require__(/*! ./hmac */ 92541));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var MD5 = C_algo.MD5;

    /**
     * This key derivation function is meant to conform with EVP_BytesToKey.
     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
     */
    var EvpKDF = C_algo.EvpKDF = Base.extend({
      /**
       * Configuration options.
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hash algorithm to use. Default: MD5
       * @property {number} iterations The number of iterations to perform. Default: 1
       */
      cfg: Base.extend({
        keySize: 128 / 32,
        hasher: MD5,
        iterations: 1
      }),
      /**
       * Initializes a newly created key derivation function.
       *
       * @param {Object} cfg (Optional) The configuration options to use for the derivation.
       *
       * @example
       *
       *     var kdf = CryptoJS.algo.EvpKDF.create();
       *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
       *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
       */
      init: function (cfg) {
        this.cfg = this.cfg.extend(cfg);
      },
      /**
       * Derives a key from a password.
       *
       * @param {WordArray|string} password The password.
       * @param {WordArray|string} salt A salt.
       *
       * @return {WordArray} The derived key.
       *
       * @example
       *
       *     var key = kdf.compute(password, salt);
       */
      compute: function (password, salt) {
        var block;

        // Shortcut
        var cfg = this.cfg;

        // Init hasher
        var hasher = cfg.hasher.create();

        // Initial values
        var derivedKey = WordArray.create();

        // Shortcuts
        var derivedKeyWords = derivedKey.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations;

        // Generate key
        while (derivedKeyWords.length < keySize) {
          if (block) {
            hasher.update(block);
          }
          block = hasher.update(password).finalize(salt);
          hasher.reset();

          // Iterations
          for (var i = 1; i < iterations; i++) {
            block = hasher.finalize(block);
            hasher.reset();
          }
          derivedKey.concat(block);
        }
        derivedKey.sigBytes = keySize * 4;
        return derivedKey;
      }
    });

    /**
     * Derives a key from a password.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     * @param {Object} cfg (Optional) The configuration options to use for this computation.
     *
     * @return {WordArray} The derived key.
     *
     * @static
     *
     * @example
     *
     *     var key = CryptoJS.EvpKDF(password, salt);
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
     */
    C.EvpKDF = function (password, salt, cfg) {
      return EvpKDF.create(cfg).compute(password, salt);
    };
  })();
  return CryptoJS.EvpKDF;
});

/***/ }),

/***/ 6072:
/*!************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/accesos/store/accesos.state.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccesosState: () => (/* binding */ AccesosState)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 52260);


class AccesosState {
  // Signals para estado reactivo
  preguntasSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
    debugName: "preguntasSignal"
  }] : []));
  asociacionesSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
    debugName: "asociacionesSignal"
  }] : []));
  loadingSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
    debugName: "loadingSignal"
  }] : []));
  errorSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
    debugName: "errorSignal"
  }] : []));
  filtrosAsociacionesSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
    id_usuario: null,
    id_pregunta: null
  }, ...(ngDevMode ? [{
    debugName: "filtrosAsociacionesSignal"
  }] : []));
  paginaActualPreguntasSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(1, ...(ngDevMode ? [{
    debugName: "paginaActualPreguntasSignal"
  }] : []));
  paginaActualAsociacionesSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(1, ...(ngDevMode ? [{
    debugName: "paginaActualAsociacionesSignal"
  }] : []));
  usuariosSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
    debugName: "usuariosSignal"
  }] : []));
  // Computed signals
  preguntas = this.preguntasSignal.asReadonly();
  usuarios = this.usuariosSignal.asReadonly();
  asociaciones = this.asociacionesSignal.asReadonly();
  loading = this.loadingSignal.asReadonly();
  error = this.errorSignal.asReadonly();
  filtrosAsociaciones = this.filtrosAsociacionesSignal.asReadonly();
  paginaActualPreguntas = this.paginaActualPreguntasSignal.asReadonly();
  paginaActualAsociaciones = this.paginaActualAsociacionesSignal.asReadonly();
  // Computed values
  totalPreguntas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.preguntasSignal().length, ...(ngDevMode ? [{
    debugName: "totalPreguntas"
  }] : []));
  preguntasActivas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.preguntasSignal().filter(p => p.activo).length, ...(ngDevMode ? [{
    debugName: "preguntasActivas"
  }] : []));
  totalAsociaciones = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.asociacionesSignal().length, ...(ngDevMode ? [{
    debugName: "totalAsociaciones"
  }] : []));
  asociacionesFiltradas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const filtros = this.filtrosAsociacionesSignal();
    let items = this.asociacionesSignal();
    console.log('🔍 Filtrando asociaciones:', {
      filtrosUsuario: filtros.id_usuario,
      filtrosUsuarioType: typeof filtros.id_usuario,
      totalItems: items.length
    });
    if (filtros.id_usuario !== null && filtros.id_usuario !== undefined) {
      // ✅ Convertir a número para comparar
      const usuarioId = Number(filtros.id_usuario);
      items = items.filter(a => a.id_usuario === usuarioId);
      console.log('  - Después de filtrar por usuario:', items.length);
    }
    if (filtros.id_pregunta !== null && filtros.id_pregunta !== undefined) {
      const preguntaId = Number(filtros.id_pregunta);
      items = items.filter(a => a.id_pregunta === preguntaId);
      console.log('  - Después de filtrar por pregunta:', items.length);
    }
    return items;
  }, ...(ngDevMode ? [{
    debugName: "asociacionesFiltradas"
  }] : []));
  // Actions (métodos para actualizar estado)
  setPreguntas(preguntas) {
    this.preguntasSignal.set(preguntas);
  }
  addPregunta(pregunta) {
    this.preguntasSignal.update(prev => [pregunta, ...prev]);
  }
  updatePregunta(id, cambios) {
    this.preguntasSignal.update(prev => prev.map(p => p.pregunta_id === id ? {
      ...p,
      ...cambios
    } : p));
  }
  removePregunta(id) {
    this.preguntasSignal.update(prev => prev.filter(p => p.pregunta_id !== id));
  }
  setAsociaciones(asociaciones) {
    this.asociacionesSignal.set(asociaciones);
  }
  setUsuarios(usuarios) {
    this.usuariosSignal.set(usuarios);
  }
  addAsociacion(asociacion) {
    this.asociacionesSignal.update(prev => [asociacion, ...prev]);
  }
  removeAsociacion(usuarioId, preguntaId) {
    this.asociacionesSignal.update(prev => prev.filter(a => !(a.id_usuario === usuarioId && a.id_pregunta === preguntaId)));
  }
  updateAsociacionValidacion(usuarioId, preguntaId, validada) {
    this.asociacionesSignal.update(prev => prev.map(a => a.id_usuario === usuarioId && a.id_pregunta === preguntaId ? {
      ...a,
      validada
    } : a));
  }
  reset() {
    this.preguntasSignal.set([]);
    this.asociacionesSignal.set([]);
    this.usuariosSignal.set([]);
    this.loadingSignal.set(false);
    this.errorSignal.set(null);
    this.filtrosAsociacionesSignal.set({
      id_usuario: null,
      id_pregunta: null
    });
    this.paginaActualPreguntasSignal.set(1);
    this.paginaActualAsociacionesSignal.set(1);
  }
  setLoading(loading) {
    this.loadingSignal.set(loading);
  }
  setError(error) {
    this.errorSignal.set(error);
  }
  setFiltrosAsociaciones(filtros) {
    this.filtrosAsociacionesSignal.set(filtros);
  }
  setPaginaActualPreguntas(pagina) {
    this.paginaActualPreguntasSignal.set(pagina);
  }
  setPaginaActualAsociaciones(pagina) {
    this.paginaActualAsociacionesSignal.set(pagina);
  }
  static ɵfac = function AccesosState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AccesosState)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AccesosState,
    factory: AccesosState.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8440:
/*!***********************************************!*\
  !*** ./src/app/services/seguridad.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeguridadService: () => (/* binding */ SeguridadService)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 75720);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);


class SeguridadService {
  // Clave secreta (debe estar en environment en producción)
  SECRET_KEY = 'SIGPAZ_SECRET_KEY_2026';
  /**
   * Encriptar una respuesta usando AES
   */
  encriptarRespuesta(respuesta) {
    try {
      const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(respuesta, this.SECRET_KEY).toString();
      return encrypted;
    } catch (error) {
      console.error('Error encriptando respuesta:', error);
      return btoa(encodeURIComponent(respuesta)); // Fallback
    }
  }
  /**
   * Desencriptar una respuesta usando AES
   */
  desencriptarRespuesta(respuestaCifrada) {
    try {
      const decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(respuestaCifrada, this.SECRET_KEY);
      return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
    } catch (error) {
      console.error('Error desencriptando respuesta:', error);
      try {
        return decodeURIComponent(atob(respuestaCifrada));
      } catch {
        return respuestaCifrada;
      }
    }
  }
  /**
   * Generar hash SHA-256 de una respuesta (para comparación segura)
   */
  hashRespuesta(respuesta) {
    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.SHA256(respuesta.trim().toLowerCase()).toString();
  }
  /**
   * Validar si dos respuestas coinciden usando hash
   */
  compararRespuestas(respuesta1, respuesta2) {
    const hash1 = this.hashRespuesta(respuesta1);
    const hash2 = this.hashRespuesta(respuesta2);
    return hash1 === hash2;
  }
  /**
   * Ocultar respuesta (mostrar asteriscos)
   */
  ocultarRespuesta(respuesta, mostrarCaracteres = 0) {
    if (!respuesta) return '';
    if (mostrarCaracteres <= 0) return '•'.repeat(Math.min(8, respuesta.length));
    const primeros = respuesta.substring(0, mostrarCaracteres);
    const ocultos = '•'.repeat(Math.min(8, respuesta.length - mostrarCaracteres));
    return primeros + ocultos;
  }
  /**
   * Generar un token aleatorio seguro
   */
  generarTokenSeguro() {
    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.lib.WordArray.random(32).toString();
  }
  static ɵfac = function SeguridadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SeguridadService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SeguridadService,
    factory: SeguridadService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9148:
/*!********************************************!*\
  !*** ./node_modules/crypto-js/blowfish.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./enc-base64 */ 50310), __webpack_require__(/*! ./md5 */ 53728), __webpack_require__(/*! ./evpkdf */ 5814), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;
    const N = 16;

    //Origin pbox and sbox, derived from PI
    const ORIG_P = [0x243F6A88, 0x85A308D3, 0x13198A2E, 0x03707344, 0xA4093822, 0x299F31D0, 0x082EFA98, 0xEC4E6C89, 0x452821E6, 0x38D01377, 0xBE5466CF, 0x34E90C6C, 0xC0AC29B7, 0xC97C50DD, 0x3F84D5B5, 0xB5470917, 0x9216D5D9, 0x8979FB1B];
    const ORIG_S = [[0xD1310BA6, 0x98DFB5AC, 0x2FFD72DB, 0xD01ADFB7, 0xB8E1AFED, 0x6A267E96, 0xBA7C9045, 0xF12C7F99, 0x24A19947, 0xB3916CF7, 0x0801F2E2, 0x858EFC16, 0x636920D8, 0x71574E69, 0xA458FEA3, 0xF4933D7E, 0x0D95748F, 0x728EB658, 0x718BCD58, 0x82154AEE, 0x7B54A41D, 0xC25A59B5, 0x9C30D539, 0x2AF26013, 0xC5D1B023, 0x286085F0, 0xCA417918, 0xB8DB38EF, 0x8E79DCB0, 0x603A180E, 0x6C9E0E8B, 0xB01E8A3E, 0xD71577C1, 0xBD314B27, 0x78AF2FDA, 0x55605C60, 0xE65525F3, 0xAA55AB94, 0x57489862, 0x63E81440, 0x55CA396A, 0x2AAB10B6, 0xB4CC5C34, 0x1141E8CE, 0xA15486AF, 0x7C72E993, 0xB3EE1411, 0x636FBC2A, 0x2BA9C55D, 0x741831F6, 0xCE5C3E16, 0x9B87931E, 0xAFD6BA33, 0x6C24CF5C, 0x7A325381, 0x28958677, 0x3B8F4898, 0x6B4BB9AF, 0xC4BFE81B, 0x66282193, 0x61D809CC, 0xFB21A991, 0x487CAC60, 0x5DEC8032, 0xEF845D5D, 0xE98575B1, 0xDC262302, 0xEB651B88, 0x23893E81, 0xD396ACC5, 0x0F6D6FF3, 0x83F44239, 0x2E0B4482, 0xA4842004, 0x69C8F04A, 0x9E1F9B5E, 0x21C66842, 0xF6E96C9A, 0x670C9C61, 0xABD388F0, 0x6A51A0D2, 0xD8542F68, 0x960FA728, 0xAB5133A3, 0x6EEF0B6C, 0x137A3BE4, 0xBA3BF050, 0x7EFB2A98, 0xA1F1651D, 0x39AF0176, 0x66CA593E, 0x82430E88, 0x8CEE8619, 0x456F9FB4, 0x7D84A5C3, 0x3B8B5EBE, 0xE06F75D8, 0x85C12073, 0x401A449F, 0x56C16AA6, 0x4ED3AA62, 0x363F7706, 0x1BFEDF72, 0x429B023D, 0x37D0D724, 0xD00A1248, 0xDB0FEAD3, 0x49F1C09B, 0x075372C9, 0x80991B7B, 0x25D479D8, 0xF6E8DEF7, 0xE3FE501A, 0xB6794C3B, 0x976CE0BD, 0x04C006BA, 0xC1A94FB6, 0x409F60C4, 0x5E5C9EC2, 0x196A2463, 0x68FB6FAF, 0x3E6C53B5, 0x1339B2EB, 0x3B52EC6F, 0x6DFC511F, 0x9B30952C, 0xCC814544, 0xAF5EBD09, 0xBEE3D004, 0xDE334AFD, 0x660F2807, 0x192E4BB3, 0xC0CBA857, 0x45C8740F, 0xD20B5F39, 0xB9D3FBDB, 0x5579C0BD, 0x1A60320A, 0xD6A100C6, 0x402C7279, 0x679F25FE, 0xFB1FA3CC, 0x8EA5E9F8, 0xDB3222F8, 0x3C7516DF, 0xFD616B15, 0x2F501EC8, 0xAD0552AB, 0x323DB5FA, 0xFD238760, 0x53317B48, 0x3E00DF82, 0x9E5C57BB, 0xCA6F8CA0, 0x1A87562E, 0xDF1769DB, 0xD542A8F6, 0x287EFFC3, 0xAC6732C6, 0x8C4F5573, 0x695B27B0, 0xBBCA58C8, 0xE1FFA35D, 0xB8F011A0, 0x10FA3D98, 0xFD2183B8, 0x4AFCB56C, 0x2DD1D35B, 0x9A53E479, 0xB6F84565, 0xD28E49BC, 0x4BFB9790, 0xE1DDF2DA, 0xA4CB7E33, 0x62FB1341, 0xCEE4C6E8, 0xEF20CADA, 0x36774C01, 0xD07E9EFE, 0x2BF11FB4, 0x95DBDA4D, 0xAE909198, 0xEAAD8E71, 0x6B93D5A0, 0xD08ED1D0, 0xAFC725E0, 0x8E3C5B2F, 0x8E7594B7, 0x8FF6E2FB, 0xF2122B64, 0x8888B812, 0x900DF01C, 0x4FAD5EA0, 0x688FC31C, 0xD1CFF191, 0xB3A8C1AD, 0x2F2F2218, 0xBE0E1777, 0xEA752DFE, 0x8B021FA1, 0xE5A0CC0F, 0xB56F74E8, 0x18ACF3D6, 0xCE89E299, 0xB4A84FE0, 0xFD13E0B7, 0x7CC43B81, 0xD2ADA8D9, 0x165FA266, 0x80957705, 0x93CC7314, 0x211A1477, 0xE6AD2065, 0x77B5FA86, 0xC75442F5, 0xFB9D35CF, 0xEBCDAF0C, 0x7B3E89A0, 0xD6411BD3, 0xAE1E7E49, 0x00250E2D, 0x2071B35E, 0x226800BB, 0x57B8E0AF, 0x2464369B, 0xF009B91E, 0x5563911D, 0x59DFA6AA, 0x78C14389, 0xD95A537F, 0x207D5BA2, 0x02E5B9C5, 0x83260376, 0x6295CFA9, 0x11C81968, 0x4E734A41, 0xB3472DCA, 0x7B14A94A, 0x1B510052, 0x9A532915, 0xD60F573F, 0xBC9BC6E4, 0x2B60A476, 0x81E67400, 0x08BA6FB5, 0x571BE91F, 0xF296EC6B, 0x2A0DD915, 0xB6636521, 0xE7B9F9B6, 0xFF34052E, 0xC5855664, 0x53B02D5D, 0xA99F8FA1, 0x08BA4799, 0x6E85076A], [0x4B7A70E9, 0xB5B32944, 0xDB75092E, 0xC4192623, 0xAD6EA6B0, 0x49A7DF7D, 0x9CEE60B8, 0x8FEDB266, 0xECAA8C71, 0x699A17FF, 0x5664526C, 0xC2B19EE1, 0x193602A5, 0x75094C29, 0xA0591340, 0xE4183A3E, 0x3F54989A, 0x5B429D65, 0x6B8FE4D6, 0x99F73FD6, 0xA1D29C07, 0xEFE830F5, 0x4D2D38E6, 0xF0255DC1, 0x4CDD2086, 0x8470EB26, 0x6382E9C6, 0x021ECC5E, 0x09686B3F, 0x3EBAEFC9, 0x3C971814, 0x6B6A70A1, 0x687F3584, 0x52A0E286, 0xB79C5305, 0xAA500737, 0x3E07841C, 0x7FDEAE5C, 0x8E7D44EC, 0x5716F2B8, 0xB03ADA37, 0xF0500C0D, 0xF01C1F04, 0x0200B3FF, 0xAE0CF51A, 0x3CB574B2, 0x25837A58, 0xDC0921BD, 0xD19113F9, 0x7CA92FF6, 0x94324773, 0x22F54701, 0x3AE5E581, 0x37C2DADC, 0xC8B57634, 0x9AF3DDA7, 0xA9446146, 0x0FD0030E, 0xECC8C73E, 0xA4751E41, 0xE238CD99, 0x3BEA0E2F, 0x3280BBA1, 0x183EB331, 0x4E548B38, 0x4F6DB908, 0x6F420D03, 0xF60A04BF, 0x2CB81290, 0x24977C79, 0x5679B072, 0xBCAF89AF, 0xDE9A771F, 0xD9930810, 0xB38BAE12, 0xDCCF3F2E, 0x5512721F, 0x2E6B7124, 0x501ADDE6, 0x9F84CD87, 0x7A584718, 0x7408DA17, 0xBC9F9ABC, 0xE94B7D8C, 0xEC7AEC3A, 0xDB851DFA, 0x63094366, 0xC464C3D2, 0xEF1C1847, 0x3215D908, 0xDD433B37, 0x24C2BA16, 0x12A14D43, 0x2A65C451, 0x50940002, 0x133AE4DD, 0x71DFF89E, 0x10314E55, 0x81AC77D6, 0x5F11199B, 0x043556F1, 0xD7A3C76B, 0x3C11183B, 0x5924A509, 0xF28FE6ED, 0x97F1FBFA, 0x9EBABF2C, 0x1E153C6E, 0x86E34570, 0xEAE96FB1, 0x860E5E0A, 0x5A3E2AB3, 0x771FE71C, 0x4E3D06FA, 0x2965DCB9, 0x99E71D0F, 0x803E89D6, 0x5266C825, 0x2E4CC978, 0x9C10B36A, 0xC6150EBA, 0x94E2EA78, 0xA5FC3C53, 0x1E0A2DF4, 0xF2F74EA7, 0x361D2B3D, 0x1939260F, 0x19C27960, 0x5223A708, 0xF71312B6, 0xEBADFE6E, 0xEAC31F66, 0xE3BC4595, 0xA67BC883, 0xB17F37D1, 0x018CFF28, 0xC332DDEF, 0xBE6C5AA5, 0x65582185, 0x68AB9802, 0xEECEA50F, 0xDB2F953B, 0x2AEF7DAD, 0x5B6E2F84, 0x1521B628, 0x29076170, 0xECDD4775, 0x619F1510, 0x13CCA830, 0xEB61BD96, 0x0334FE1E, 0xAA0363CF, 0xB5735C90, 0x4C70A239, 0xD59E9E0B, 0xCBAADE14, 0xEECC86BC, 0x60622CA7, 0x9CAB5CAB, 0xB2F3846E, 0x648B1EAF, 0x19BDF0CA, 0xA02369B9, 0x655ABB50, 0x40685A32, 0x3C2AB4B3, 0x319EE9D5, 0xC021B8F7, 0x9B540B19, 0x875FA099, 0x95F7997E, 0x623D7DA8, 0xF837889A, 0x97E32D77, 0x11ED935F, 0x16681281, 0x0E358829, 0xC7E61FD6, 0x96DEDFA1, 0x7858BA99, 0x57F584A5, 0x1B227263, 0x9B83C3FF, 0x1AC24696, 0xCDB30AEB, 0x532E3054, 0x8FD948E4, 0x6DBC3128, 0x58EBF2EF, 0x34C6FFEA, 0xFE28ED61, 0xEE7C3C73, 0x5D4A14D9, 0xE864B7E3, 0x42105D14, 0x203E13E0, 0x45EEE2B6, 0xA3AAABEA, 0xDB6C4F15, 0xFACB4FD0, 0xC742F442, 0xEF6ABBB5, 0x654F3B1D, 0x41CD2105, 0xD81E799E, 0x86854DC7, 0xE44B476A, 0x3D816250, 0xCF62A1F2, 0x5B8D2646, 0xFC8883A0, 0xC1C7B6A3, 0x7F1524C3, 0x69CB7492, 0x47848A0B, 0x5692B285, 0x095BBF00, 0xAD19489D, 0x1462B174, 0x23820E00, 0x58428D2A, 0x0C55F5EA, 0x1DADF43E, 0x233F7061, 0x3372F092, 0x8D937E41, 0xD65FECF1, 0x6C223BDB, 0x7CDE3759, 0xCBEE7460, 0x4085F2A7, 0xCE77326E, 0xA6078084, 0x19F8509E, 0xE8EFD855, 0x61D99735, 0xA969A7AA, 0xC50C06C2, 0x5A04ABFC, 0x800BCADC, 0x9E447A2E, 0xC3453484, 0xFDD56705, 0x0E1E9EC9, 0xDB73DBD3, 0x105588CD, 0x675FDA79, 0xE3674340, 0xC5C43465, 0x713E38D8, 0x3D28F89E, 0xF16DFF20, 0x153E21E7, 0x8FB03D4A, 0xE6E39F2B, 0xDB83ADF7], [0xE93D5A68, 0x948140F7, 0xF64C261C, 0x94692934, 0x411520F7, 0x7602D4F7, 0xBCF46B2E, 0xD4A20068, 0xD4082471, 0x3320F46A, 0x43B7D4B7, 0x500061AF, 0x1E39F62E, 0x97244546, 0x14214F74, 0xBF8B8840, 0x4D95FC1D, 0x96B591AF, 0x70F4DDD3, 0x66A02F45, 0xBFBC09EC, 0x03BD9785, 0x7FAC6DD0, 0x31CB8504, 0x96EB27B3, 0x55FD3941, 0xDA2547E6, 0xABCA0A9A, 0x28507825, 0x530429F4, 0x0A2C86DA, 0xE9B66DFB, 0x68DC1462, 0xD7486900, 0x680EC0A4, 0x27A18DEE, 0x4F3FFEA2, 0xE887AD8C, 0xB58CE006, 0x7AF4D6B6, 0xAACE1E7C, 0xD3375FEC, 0xCE78A399, 0x406B2A42, 0x20FE9E35, 0xD9F385B9, 0xEE39D7AB, 0x3B124E8B, 0x1DC9FAF7, 0x4B6D1856, 0x26A36631, 0xEAE397B2, 0x3A6EFA74, 0xDD5B4332, 0x6841E7F7, 0xCA7820FB, 0xFB0AF54E, 0xD8FEB397, 0x454056AC, 0xBA489527, 0x55533A3A, 0x20838D87, 0xFE6BA9B7, 0xD096954B, 0x55A867BC, 0xA1159A58, 0xCCA92963, 0x99E1DB33, 0xA62A4A56, 0x3F3125F9, 0x5EF47E1C, 0x9029317C, 0xFDF8E802, 0x04272F70, 0x80BB155C, 0x05282CE3, 0x95C11548, 0xE4C66D22, 0x48C1133F, 0xC70F86DC, 0x07F9C9EE, 0x41041F0F, 0x404779A4, 0x5D886E17, 0x325F51EB, 0xD59BC0D1, 0xF2BCC18F, 0x41113564, 0x257B7834, 0x602A9C60, 0xDFF8E8A3, 0x1F636C1B, 0x0E12B4C2, 0x02E1329E, 0xAF664FD1, 0xCAD18115, 0x6B2395E0, 0x333E92E1, 0x3B240B62, 0xEEBEB922, 0x85B2A20E, 0xE6BA0D99, 0xDE720C8C, 0x2DA2F728, 0xD0127845, 0x95B794FD, 0x647D0862, 0xE7CCF5F0, 0x5449A36F, 0x877D48FA, 0xC39DFD27, 0xF33E8D1E, 0x0A476341, 0x992EFF74, 0x3A6F6EAB, 0xF4F8FD37, 0xA812DC60, 0xA1EBDDF8, 0x991BE14C, 0xDB6E6B0D, 0xC67B5510, 0x6D672C37, 0x2765D43B, 0xDCD0E804, 0xF1290DC7, 0xCC00FFA3, 0xB5390F92, 0x690FED0B, 0x667B9FFB, 0xCEDB7D9C, 0xA091CF0B, 0xD9155EA3, 0xBB132F88, 0x515BAD24, 0x7B9479BF, 0x763BD6EB, 0x37392EB3, 0xCC115979, 0x8026E297, 0xF42E312D, 0x6842ADA7, 0xC66A2B3B, 0x12754CCC, 0x782EF11C, 0x6A124237, 0xB79251E7, 0x06A1BBE6, 0x4BFB6350, 0x1A6B1018, 0x11CAEDFA, 0x3D25BDD8, 0xE2E1C3C9, 0x44421659, 0x0A121386, 0xD90CEC6E, 0xD5ABEA2A, 0x64AF674E, 0xDA86A85F, 0xBEBFE988, 0x64E4C3FE, 0x9DBC8057, 0xF0F7C086, 0x60787BF8, 0x6003604D, 0xD1FD8346, 0xF6381FB0, 0x7745AE04, 0xD736FCCC, 0x83426B33, 0xF01EAB71, 0xB0804187, 0x3C005E5F, 0x77A057BE, 0xBDE8AE24, 0x55464299, 0xBF582E61, 0x4E58F48F, 0xF2DDFDA2, 0xF474EF38, 0x8789BDC2, 0x5366F9C3, 0xC8B38E74, 0xB475F255, 0x46FCD9B9, 0x7AEB2661, 0x8B1DDF84, 0x846A0E79, 0x915F95E2, 0x466E598E, 0x20B45770, 0x8CD55591, 0xC902DE4C, 0xB90BACE1, 0xBB8205D0, 0x11A86248, 0x7574A99E, 0xB77F19B6, 0xE0A9DC09, 0x662D09A1, 0xC4324633, 0xE85A1F02, 0x09F0BE8C, 0x4A99A025, 0x1D6EFE10, 0x1AB93D1D, 0x0BA5A4DF, 0xA186F20F, 0x2868F169, 0xDCB7DA83, 0x573906FE, 0xA1E2CE9B, 0x4FCD7F52, 0x50115E01, 0xA70683FA, 0xA002B5C4, 0x0DE6D027, 0x9AF88C27, 0x773F8641, 0xC3604C06, 0x61A806B5, 0xF0177A28, 0xC0F586E0, 0x006058AA, 0x30DC7D62, 0x11E69ED7, 0x2338EA63, 0x53C2DD94, 0xC2C21634, 0xBBCBEE56, 0x90BCB6DE, 0xEBFC7DA1, 0xCE591D76, 0x6F05E409, 0x4B7C0188, 0x39720A3D, 0x7C927C24, 0x86E3725F, 0x724D9DB9, 0x1AC15BB4, 0xD39EB8FC, 0xED545578, 0x08FCA5B5, 0xD83D7CD3, 0x4DAD0FC4, 0x1E50EF5E, 0xB161E6F8, 0xA28514D9, 0x6C51133C, 0x6FD5C7E7, 0x56E14EC4, 0x362ABFCE, 0xDDC6C837, 0xD79A3234, 0x92638212, 0x670EFA8E, 0x406000E0], [0x3A39CE37, 0xD3FAF5CF, 0xABC27737, 0x5AC52D1B, 0x5CB0679E, 0x4FA33742, 0xD3822740, 0x99BC9BBE, 0xD5118E9D, 0xBF0F7315, 0xD62D1C7E, 0xC700C47B, 0xB78C1B6B, 0x21A19045, 0xB26EB1BE, 0x6A366EB4, 0x5748AB2F, 0xBC946E79, 0xC6A376D2, 0x6549C2C8, 0x530FF8EE, 0x468DDE7D, 0xD5730A1D, 0x4CD04DC6, 0x2939BBDB, 0xA9BA4650, 0xAC9526E8, 0xBE5EE304, 0xA1FAD5F0, 0x6A2D519A, 0x63EF8CE2, 0x9A86EE22, 0xC089C2B8, 0x43242EF6, 0xA51E03AA, 0x9CF2D0A4, 0x83C061BA, 0x9BE96A4D, 0x8FE51550, 0xBA645BD6, 0x2826A2F9, 0xA73A3AE1, 0x4BA99586, 0xEF5562E9, 0xC72FEFD3, 0xF752F7DA, 0x3F046F69, 0x77FA0A59, 0x80E4A915, 0x87B08601, 0x9B09E6AD, 0x3B3EE593, 0xE990FD5A, 0x9E34D797, 0x2CF0B7D9, 0x022B8B51, 0x96D5AC3A, 0x017DA67D, 0xD1CF3ED6, 0x7C7D2D28, 0x1F9F25CF, 0xADF2B89B, 0x5AD6B472, 0x5A88F54C, 0xE029AC71, 0xE019A5E6, 0x47B0ACFD, 0xED93FA9B, 0xE8D3C48D, 0x283B57CC, 0xF8D56629, 0x79132E28, 0x785F0191, 0xED756055, 0xF7960E44, 0xE3D35E8C, 0x15056DD4, 0x88F46DBA, 0x03A16125, 0x0564F0BD, 0xC3EB9E15, 0x3C9057A2, 0x97271AEC, 0xA93A072A, 0x1B3F6D9B, 0x1E6321F5, 0xF59C66FB, 0x26DCF319, 0x7533D928, 0xB155FDF5, 0x03563482, 0x8ABA3CBB, 0x28517711, 0xC20AD9F8, 0xABCC5167, 0xCCAD925F, 0x4DE81751, 0x3830DC8E, 0x379D5862, 0x9320F991, 0xEA7A90C2, 0xFB3E7BCE, 0x5121CE64, 0x774FBE32, 0xA8B6E37E, 0xC3293D46, 0x48DE5369, 0x6413E680, 0xA2AE0810, 0xDD6DB224, 0x69852DFD, 0x09072166, 0xB39A460A, 0x6445C0DD, 0x586CDECF, 0x1C20C8AE, 0x5BBEF7DD, 0x1B588D40, 0xCCD2017F, 0x6BB4E3BB, 0xDDA26A7E, 0x3A59FF45, 0x3E350A44, 0xBCB4CDD5, 0x72EACEA8, 0xFA6484BB, 0x8D6612AE, 0xBF3C6F47, 0xD29BE463, 0x542F5D9E, 0xAEC2771B, 0xF64E6370, 0x740E0D8D, 0xE75B1357, 0xF8721671, 0xAF537D5D, 0x4040CB08, 0x4EB4E2CC, 0x34D2466A, 0x0115AF84, 0xE1B00428, 0x95983A1D, 0x06B89FB4, 0xCE6EA048, 0x6F3F3B82, 0x3520AB82, 0x011A1D4B, 0x277227F8, 0x611560B1, 0xE7933FDC, 0xBB3A792B, 0x344525BD, 0xA08839E1, 0x51CE794B, 0x2F32C9B7, 0xA01FBAC9, 0xE01CC87E, 0xBCC7D1F6, 0xCF0111C3, 0xA1E8AAC7, 0x1A908749, 0xD44FBD9A, 0xD0DADECB, 0xD50ADA38, 0x0339C32A, 0xC6913667, 0x8DF9317C, 0xE0B12B4F, 0xF79E59B7, 0x43F5BB3A, 0xF2D519FF, 0x27D9459C, 0xBF97222C, 0x15E6FC2A, 0x0F91FC71, 0x9B941525, 0xFAE59361, 0xCEB69CEB, 0xC2A86459, 0x12BAA8D1, 0xB6C1075E, 0xE3056A0C, 0x10D25065, 0xCB03A442, 0xE0EC6E0E, 0x1698DB3B, 0x4C98A0BE, 0x3278E964, 0x9F1F9532, 0xE0D392DF, 0xD3A0342B, 0x8971F21E, 0x1B0A7441, 0x4BA3348C, 0xC5BE7120, 0xC37632D8, 0xDF359F8D, 0x9B992F2E, 0xE60B6F47, 0x0FE3F11D, 0xE54CDA54, 0x1EDAD891, 0xCE6279CF, 0xCD3E7E6F, 0x1618B166, 0xFD2C1D05, 0x848FD2C5, 0xF6FB2299, 0xF523F357, 0xA6327623, 0x93A83531, 0x56CCCD02, 0xACF08162, 0x5A75EBB5, 0x6E163697, 0x88D273CC, 0xDE966292, 0x81B949D0, 0x4C50901B, 0x71C65614, 0xE6C6C7BD, 0x327A140A, 0x45E1D006, 0xC3F27B9A, 0xC9AA53FD, 0x62A80F00, 0xBB25BFE2, 0x35BDD2F6, 0x71126905, 0xB2040222, 0xB6CBCF7C, 0xCD769C2B, 0x53113EC0, 0x1640E3D3, 0x38ABBD60, 0x2547ADF0, 0xBA38209C, 0xF746CE76, 0x77AFA1C5, 0x20756060, 0x85CBFE4E, 0x8AE88DD8, 0x7AAAF9B0, 0x4CF9AA7E, 0x1948C25C, 0x02FB8A8C, 0x01C36AE4, 0xD6EBE1F9, 0x90D4F869, 0xA65CDEA0, 0x3F09252D, 0xC208E69F, 0xB74E6132, 0xCE77E25B, 0x578FDFE3, 0x3AC372E6]];
    var BLOWFISH_CTX = {
      pbox: [],
      sbox: []
    };
    function F(ctx, x) {
      let a = x >> 24 & 0xFF;
      let b = x >> 16 & 0xFF;
      let c = x >> 8 & 0xFF;
      let d = x & 0xFF;
      let y = ctx.sbox[0][a] + ctx.sbox[1][b];
      y = y ^ ctx.sbox[2][c];
      y = y + ctx.sbox[3][d];
      return y;
    }
    function BlowFish_Encrypt(ctx, left, right) {
      let Xl = left;
      let Xr = right;
      let temp;
      for (let i = 0; i < N; ++i) {
        Xl = Xl ^ ctx.pbox[i];
        Xr = F(ctx, Xl) ^ Xr;
        temp = Xl;
        Xl = Xr;
        Xr = temp;
      }
      temp = Xl;
      Xl = Xr;
      Xr = temp;
      Xr = Xr ^ ctx.pbox[N];
      Xl = Xl ^ ctx.pbox[N + 1];
      return {
        left: Xl,
        right: Xr
      };
    }
    function BlowFish_Decrypt(ctx, left, right) {
      let Xl = left;
      let Xr = right;
      let temp;
      for (let i = N + 1; i > 1; --i) {
        Xl = Xl ^ ctx.pbox[i];
        Xr = F(ctx, Xl) ^ Xr;
        temp = Xl;
        Xl = Xr;
        Xr = temp;
      }
      temp = Xl;
      Xl = Xr;
      Xr = temp;
      Xr = Xr ^ ctx.pbox[1];
      Xl = Xl ^ ctx.pbox[0];
      return {
        left: Xl,
        right: Xr
      };
    }

    /**
     * Initialization ctx's pbox and sbox.
     *
     * @param {Object} ctx The object has pbox and sbox.
     * @param {Array} key An array of 32-bit words.
     * @param {int} keysize The length of the key.
     *
     * @example
     *
     *     BlowFishInit(BLOWFISH_CTX, key, 128/32);
     */
    function BlowFishInit(ctx, key, keysize) {
      for (let Row = 0; Row < 4; Row++) {
        ctx.sbox[Row] = [];
        for (let Col = 0; Col < 256; Col++) {
          ctx.sbox[Row][Col] = ORIG_S[Row][Col];
        }
      }
      let keyIndex = 0;
      for (let index = 0; index < N + 2; index++) {
        ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
        keyIndex++;
        if (keyIndex >= keysize) {
          keyIndex = 0;
        }
      }
      let Data1 = 0;
      let Data2 = 0;
      let res = 0;
      for (let i = 0; i < N + 2; i += 2) {
        res = BlowFish_Encrypt(ctx, Data1, Data2);
        Data1 = res.left;
        Data2 = res.right;
        ctx.pbox[i] = Data1;
        ctx.pbox[i + 1] = Data2;
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 256; j += 2) {
          res = BlowFish_Encrypt(ctx, Data1, Data2);
          Data1 = res.left;
          Data2 = res.right;
          ctx.sbox[i][j] = Data1;
          ctx.sbox[i][j + 1] = Data2;
        }
      }
      return true;
    }

    /**
     * Blowfish block cipher algorithm.
     */
    var Blowfish = C_algo.Blowfish = BlockCipher.extend({
      _doReset: function () {
        // Skip reset of nRounds has been set before and key did not change
        if (this._keyPriorReset === this._key) {
          return;
        }

        // Shortcuts
        var key = this._keyPriorReset = this._key;
        var keyWords = key.words;
        var keySize = key.sigBytes / 4;

        //Initialization pbox and sbox
        BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
      },
      encryptBlock: function (M, offset) {
        var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
        M[offset] = res.left;
        M[offset + 1] = res.right;
      },
      decryptBlock: function (M, offset) {
        var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
        M[offset] = res.left;
        M[offset + 1] = res.right;
      },
      blockSize: 64 / 32,
      keySize: 128 / 32,
      ivSize: 64 / 32
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.Blowfish.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.Blowfish.decrypt(ciphertext, key, cfg);
     */
    C.Blowfish = BlockCipher._createHelper(Blowfish);
  })();
  return CryptoJS.Blowfish;
});

/***/ }),

/***/ 9396:
/*!********************************************!*\
  !*** ./node_modules/crypto-js/x64-core.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var X32WordArray = C_lib.WordArray;

    /**
     * x64 namespace.
     */
    var C_x64 = C.x64 = {};

    /**
     * A 64-bit word.
     */
    var X64Word = C_x64.Word = Base.extend({
      /**
       * Initializes a newly created 64-bit word.
       *
       * @param {number} high The high 32 bits.
       * @param {number} low The low 32 bits.
       *
       * @example
       *
       *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
       */
      init: function (high, low) {
        this.high = high;
        this.low = low;
      }

      /**
       * Bitwise NOTs this word.
       *
       * @return {X64Word} A new x64-Word object after negating.
       *
       * @example
       *
       *     var negated = x64Word.not();
       */
      // not: function () {
      // var high = ~this.high;
      // var low = ~this.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise ANDs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to AND with this word.
       *
       * @return {X64Word} A new x64-Word object after ANDing.
       *
       * @example
       *
       *     var anded = x64Word.and(anotherX64Word);
       */
      // and: function (word) {
      // var high = this.high & word.high;
      // var low = this.low & word.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise ORs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to OR with this word.
       *
       * @return {X64Word} A new x64-Word object after ORing.
       *
       * @example
       *
       *     var ored = x64Word.or(anotherX64Word);
       */
      // or: function (word) {
      // var high = this.high | word.high;
      // var low = this.low | word.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise XORs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to XOR with this word.
       *
       * @return {X64Word} A new x64-Word object after XORing.
       *
       * @example
       *
       *     var xored = x64Word.xor(anotherX64Word);
       */
      // xor: function (word) {
      // var high = this.high ^ word.high;
      // var low = this.low ^ word.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Shifts this word n bits to the left.
       *
       * @param {number} n The number of bits to shift.
       *
       * @return {X64Word} A new x64-Word object after shifting.
       *
       * @example
       *
       *     var shifted = x64Word.shiftL(25);
       */
      // shiftL: function (n) {
      // if (n < 32) {
      // var high = (this.high << n) | (this.low >>> (32 - n));
      // var low = this.low << n;
      // } else {
      // var high = this.low << (n - 32);
      // var low = 0;
      // }

      // return X64Word.create(high, low);
      // },

      /**
       * Shifts this word n bits to the right.
       *
       * @param {number} n The number of bits to shift.
       *
       * @return {X64Word} A new x64-Word object after shifting.
       *
       * @example
       *
       *     var shifted = x64Word.shiftR(7);
       */
      // shiftR: function (n) {
      // if (n < 32) {
      // var low = (this.low >>> n) | (this.high << (32 - n));
      // var high = this.high >>> n;
      // } else {
      // var low = this.high >>> (n - 32);
      // var high = 0;
      // }

      // return X64Word.create(high, low);
      // },

      /**
       * Rotates this word n bits to the left.
       *
       * @param {number} n The number of bits to rotate.
       *
       * @return {X64Word} A new x64-Word object after rotating.
       *
       * @example
       *
       *     var rotated = x64Word.rotL(25);
       */
      // rotL: function (n) {
      // return this.shiftL(n).or(this.shiftR(64 - n));
      // },

      /**
       * Rotates this word n bits to the right.
       *
       * @param {number} n The number of bits to rotate.
       *
       * @return {X64Word} A new x64-Word object after rotating.
       *
       * @example
       *
       *     var rotated = x64Word.rotR(7);
       */
      // rotR: function (n) {
      // return this.shiftR(n).or(this.shiftL(64 - n));
      // },

      /**
       * Adds this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to add with this word.
       *
       * @return {X64Word} A new x64-Word object after adding.
       *
       * @example
       *
       *     var added = x64Word.add(anotherX64Word);
       */
      // add: function (word) {
      // var low = (this.low + word.low) | 0;
      // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
      // var high = (this.high + word.high + carry) | 0;

      // return X64Word.create(high, low);
      // }
    });

    /**
     * An array of 64-bit words.
     *
     * @property {Array} words The array of CryptoJS.x64.Word objects.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var X64WordArray = C_x64.WordArray = Base.extend({
      /**
       * Initializes a newly created word array.
       *
       * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
       * @param {number} sigBytes (Optional) The number of significant bytes in the words.
       *
       * @example
       *
       *     var wordArray = CryptoJS.x64.WordArray.create();
       *
       *     var wordArray = CryptoJS.x64.WordArray.create([
       *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
       *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
       *     ]);
       *
       *     var wordArray = CryptoJS.x64.WordArray.create([
       *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
       *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
       *     ], 10);
       */
      init: function (words, sigBytes) {
        words = this.words = words || [];
        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 8;
        }
      },
      /**
       * Converts this 64-bit word array to a 32-bit word array.
       *
       * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
       *
       * @example
       *
       *     var x32WordArray = x64WordArray.toX32();
       */
      toX32: function () {
        // Shortcuts
        var x64Words = this.words;
        var x64WordsLength = x64Words.length;

        // Convert
        var x32Words = [];
        for (var i = 0; i < x64WordsLength; i++) {
          var x64Word = x64Words[i];
          x32Words.push(x64Word.high);
          x32Words.push(x64Word.low);
        }
        return X32WordArray.create(x32Words, this.sigBytes);
      },
      /**
       * Creates a copy of this word array.
       *
       * @return {X64WordArray} The clone.
       *
       * @example
       *
       *     var clone = x64WordArray.clone();
       */
      clone: function () {
        var clone = Base.clone.call(this);

        // Clone "words" array
        var words = clone.words = this.words.slice(0);

        // Clone each X64Word object
        var wordsLength = words.length;
        for (var i = 0; i < wordsLength; i++) {
          words[i] = words[i].clone();
        }
        return clone;
      }
    });
  })();
  return CryptoJS;
});

/***/ }),

/***/ 16983:
/*!************************************************!*\
  !*** ./src/app/services/asociacion.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsociacionService: () => (/* binding */ AsociacionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);




class AsociacionService {
  http;
  baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}`;
  constructor(http) {
    this.http = http;
  }
  listar(params) {
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (params?.page) httpParams = httpParams.set('page', params.page);
    if (params?.per_page) httpParams = httpParams.set('per_page', params.per_page);
    if (params?.usuario_id) httpParams = httpParams.set('usuario_id', params.usuario_id);
    if (params?.pregunta_id) httpParams = httpParams.set('pregunta_id', params.pregunta_id);
    return this.http.get(`${this.baseUrl}/usuarios-preguntas`, {
      params: httpParams
    });
  }
  crear(data) {
    return this.http.post(`${this.baseUrl}/usuarios-preguntas`, data);
  }
  eliminar(usuarioId, preguntaId) {
    return this.http.delete(`${this.baseUrl}/usuarios/${usuarioId}/preguntas/${preguntaId}`);
  }
  validarRespuesta(data) {
    return this.http.post(`${this.baseUrl}/usuarios-preguntas/validar`, data);
  }
  validarMasiva(asociaciones) {
    console.log('📡 AsociacionService.validarMasiva:', asociaciones);
    return this.http.post(`${this.baseUrl}/usuarios-preguntas/validar-masiva`, {
      asociaciones
    });
  }
  obtenerRespuesta(usuarioId, preguntaId) {
    const url = `${this.baseUrl}/usuarios/${usuarioId}/preguntas/${preguntaId}/respuesta`;
    console.log('📡 GET:', url);
    return this.http.get(url);
  }
  actualizarRespuesta(usuarioId, preguntaId, respuesta) {
    return this.http.put(`${this.baseUrl}/usuarios/${usuarioId}/preguntas/${preguntaId}/respuesta`, {
      respuesta
    });
  }
  obtenerPreguntasPorUsuario(usuarioId) {
    return this.http.get(`${this.baseUrl}/usuarios/${usuarioId}/preguntas-asociadas`);
  }
  static ɵfac = function AsociacionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AsociacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AsociacionService,
    factory: AsociacionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 21258:
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ecb.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * Electronic Codebook block mode.
   */
  CryptoJS.mode.ECB = function () {
    var ECB = CryptoJS.lib.BlockCipherMode.extend();
    ECB.Encryptor = ECB.extend({
      processBlock: function (words, offset) {
        this._cipher.encryptBlock(words, offset);
      }
    });
    ECB.Decryptor = ECB.extend({
      processBlock: function (words, offset) {
        this._cipher.decryptBlock(words, offset);
      }
    });
    return ECB;
  }();
  return CryptoJS.mode.ECB;
});

/***/ }),

/***/ 25517:
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-cfb.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * Cipher Feedback block mode.
   */
  CryptoJS.mode.CFB = function () {
    var CFB = CryptoJS.lib.BlockCipherMode.extend();
    CFB.Encryptor = CFB.extend({
      processBlock: function (words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

        // Remember this block to use with next block
        this._prevBlock = words.slice(offset, offset + blockSize);
      }
    });
    CFB.Decryptor = CFB.extend({
      processBlock: function (words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;

        // Remember this block to use with next block
        var thisBlock = words.slice(offset, offset + blockSize);
        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

        // This block becomes the previous block
        this._prevBlock = thisBlock;
      }
    });
    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
      var keystream;

      // Shortcut
      var iv = this._iv;

      // Generate keystream
      if (iv) {
        keystream = iv.slice(0);

        // Remove IV for subsequent blocks
        this._iv = undefined;
      } else {
        keystream = this._prevBlock;
      }
      cipher.encryptBlock(keystream, 0);

      // Encrypt
      for (var i = 0; i < blockSize; i++) {
        words[offset + i] ^= keystream[i];
      }
    }
    return CFB;
  }();
  return CryptoJS.mode.CFB;
});

/***/ }),

/***/ 28335:
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ctr.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * Counter block mode.
   */
  CryptoJS.mode.CTR = function () {
    var CTR = CryptoJS.lib.BlockCipherMode.extend();
    var Encryptor = CTR.Encryptor = CTR.extend({
      processBlock: function (words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;

        // Generate keystream
        if (iv) {
          counter = this._counter = iv.slice(0);

          // Remove IV for subsequent blocks
          this._iv = undefined;
        }
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);

        // Increment counter
        counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;

        // Encrypt
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
    });
    CTR.Decryptor = Encryptor;
    return CTR;
  }();
  return CryptoJS.mode.CTR;
});

/***/ }),

/***/ 30035:
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/enc-utf16.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * UTF-16 BE encoding strategy.
     */
    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
      /**
       * Converts a word array to a UTF-16 BE string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-16 BE string.
       *
       * @static
       *
       * @example
       *
       *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
       */
      stringify: function (wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var utf16Chars = [];
        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;
          utf16Chars.push(String.fromCharCode(codePoint));
        }
        return utf16Chars.join('');
      },
      /**
       * Converts a UTF-16 BE string to a word array.
       *
       * @param {string} utf16Str The UTF-16 BE string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
       */
      parse: function (utf16Str) {
        // Shortcut
        var utf16StrLength = utf16Str.length;

        // Convert
        var words = [];
        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
        }
        return WordArray.create(words, utf16StrLength * 2);
      }
    };

    /**
     * UTF-16 LE encoding strategy.
     */
    C_enc.Utf16LE = {
      /**
       * Converts a word array to a UTF-16 LE string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-16 LE string.
       *
       * @static
       *
       * @example
       *
       *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
       */
      stringify: function (wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var utf16Chars = [];
        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);
          utf16Chars.push(String.fromCharCode(codePoint));
        }
        return utf16Chars.join('');
      },
      /**
       * Converts a UTF-16 LE string to a word array.
       *
       * @param {string} utf16Str The UTF-16 LE string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
       */
      parse: function (utf16Str) {
        // Shortcut
        var utf16StrLength = utf16Str.length;

        // Convert
        var words = [];
        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
        }
        return WordArray.create(words, utf16StrLength * 2);
      }
    };
    function swapEndian(word) {
      return word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;
    }
  })();
  return CryptoJS.enc.Utf16;
});

/***/ }),

/***/ 30536:
/*!****************************************************!*\
  !*** ./node_modules/crypto-js/mode-ctr-gladman.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   */
  CryptoJS.mode.CTRGladman = function () {
    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
    function incWord(word) {
      if ((word >> 24 & 0xff) === 0xff) {
        //overflow
        var b1 = word >> 16 & 0xff;
        var b2 = word >> 8 & 0xff;
        var b3 = word & 0xff;
        if (b1 === 0xff)
          // overflow b1
          {
            b1 = 0;
            if (b2 === 0xff) {
              b2 = 0;
              if (b3 === 0xff) {
                b3 = 0;
              } else {
                ++b3;
              }
            } else {
              ++b2;
            }
          } else {
          ++b1;
        }
        word = 0;
        word += b1 << 16;
        word += b2 << 8;
        word += b3;
      } else {
        word += 0x01 << 24;
      }
      return word;
    }
    function incCounter(counter) {
      if ((counter[0] = incWord(counter[0])) === 0) {
        // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
        counter[1] = incWord(counter[1]);
      }
      return counter;
    }
    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
      processBlock: function (words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;

        // Generate keystream
        if (iv) {
          counter = this._counter = iv.slice(0);

          // Remove IV for subsequent blocks
          this._iv = undefined;
        }
        incCounter(counter);
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);

        // Encrypt
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
    });
    CTRGladman.Decryptor = Encryptor;
    return CTRGladman;
  }();
  return CryptoJS.mode.CTRGladman;
});

/***/ }),

/***/ 32400:
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha224.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./sha256 */ 72021));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var SHA256 = C_algo.SHA256;

    /**
     * SHA-224 hash algorithm.
     */
    var SHA224 = C_algo.SHA224 = SHA256.extend({
      _doReset: function () {
        this._hash = new WordArray.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
      },
      _doFinalize: function () {
        var hash = SHA256._doFinalize.call(this);
        hash.sigBytes -= 4;
        return hash;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA224('message');
     *     var hash = CryptoJS.SHA224(wordArray);
     */
    C.SHA224 = SHA256._createHelper(SHA224);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA224(message, key);
     */
    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
  })();
  return CryptoJS.SHA224;
});

/***/ }),

/***/ 35232:
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha512.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./x64-core */ 9396));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;
    function X64Word_create() {
      return X64Word.create.apply(X64Word, arguments);
    }

    // Constants
    var K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)];

    // Reusable objects
    var W = [];
    (function () {
      for (var i = 0; i < 80; i++) {
        W[i] = X64Word_create();
      }
    })();

    /**
     * SHA-512 hash algorithm.
     */
    var SHA512 = C_algo.SHA512 = Hasher.extend({
      _doReset: function () {
        this._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);
      },
      _doProcessBlock: function (M, offset) {
        // Shortcuts
        var H = this._hash.words;
        var H0 = H[0];
        var H1 = H[1];
        var H2 = H[2];
        var H3 = H[3];
        var H4 = H[4];
        var H5 = H[5];
        var H6 = H[6];
        var H7 = H[7];
        var H0h = H0.high;
        var H0l = H0.low;
        var H1h = H1.high;
        var H1l = H1.low;
        var H2h = H2.high;
        var H2l = H2.low;
        var H3h = H3.high;
        var H3l = H3.low;
        var H4h = H4.high;
        var H4l = H4.low;
        var H5h = H5.high;
        var H5l = H5.low;
        var H6h = H6.high;
        var H6l = H6.low;
        var H7h = H7.high;
        var H7l = H7.low;

        // Working variables
        var ah = H0h;
        var al = H0l;
        var bh = H1h;
        var bl = H1l;
        var ch = H2h;
        var cl = H2l;
        var dh = H3h;
        var dl = H3l;
        var eh = H4h;
        var el = H4l;
        var fh = H5h;
        var fl = H5l;
        var gh = H6h;
        var gl = H6l;
        var hh = H7h;
        var hl = H7l;

        // Rounds
        for (var i = 0; i < 80; i++) {
          var Wil;
          var Wih;

          // Shortcut
          var Wi = W[i];

          // Extend message
          if (i < 16) {
            Wih = Wi.high = M[offset + i * 2] | 0;
            Wil = Wi.low = M[offset + i * 2 + 1] | 0;
          } else {
            // Gamma0
            var gamma0x = W[i - 15];
            var gamma0xh = gamma0x.high;
            var gamma0xl = gamma0x.low;
            var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
            var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);

            // Gamma1
            var gamma1x = W[i - 2];
            var gamma1xh = gamma1x.high;
            var gamma1xl = gamma1x.low;
            var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
            var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);

            // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
            var Wi7 = W[i - 7];
            var Wi7h = Wi7.high;
            var Wi7l = Wi7.low;
            var Wi16 = W[i - 16];
            var Wi16h = Wi16.high;
            var Wi16l = Wi16.low;
            Wil = gamma0l + Wi7l;
            Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
            Wil = Wil + gamma1l;
            Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
            Wil = Wil + Wi16l;
            Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
            Wi.high = Wih;
            Wi.low = Wil;
          }
          var chh = eh & fh ^ ~eh & gh;
          var chl = el & fl ^ ~el & gl;
          var majh = ah & bh ^ ah & ch ^ bh & ch;
          var majl = al & bl ^ al & cl ^ bl & cl;
          var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
          var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
          var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
          var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);

          // t1 = h + sigma1 + ch + K[i] + W[i]
          var Ki = K[i];
          var Kih = Ki.high;
          var Kil = Ki.low;
          var t1l = hl + sigma1l;
          var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
          var t1l = t1l + chl;
          var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
          var t1l = t1l + Kil;
          var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
          var t1l = t1l + Wil;
          var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);

          // t2 = sigma0 + maj
          var t2l = sigma0l + majl;
          var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);

          // Update working variables
          hh = gh;
          hl = gl;
          gh = fh;
          gl = fl;
          fh = eh;
          fl = el;
          el = dl + t1l | 0;
          eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
          dh = ch;
          dl = cl;
          ch = bh;
          cl = bl;
          bh = ah;
          bl = al;
          al = t1l + t2l | 0;
          ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
        }

        // Intermediate hash value
        H0l = H0.low = H0l + al;
        H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
        H1l = H1.low = H1l + bl;
        H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
        H2l = H2.low = H2l + cl;
        H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
        H3l = H3.low = H3l + dl;
        H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
        H4l = H4.low = H4l + el;
        H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
        H5l = H5.low = H5l + fl;
        H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
        H6l = H6.low = H6l + gl;
        H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
        H7l = H7.low = H7l + hl;
        H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
      },
      _doFinalize: function () {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Convert hash to 32-bit word array before returning
        var hash = this._hash.toX32();

        // Return final computed hash
        return hash;
      },
      clone: function () {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      },
      blockSize: 1024 / 32
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA512('message');
     *     var hash = CryptoJS.SHA512(wordArray);
     */
    C.SHA512 = Hasher._createHelper(SHA512);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA512(message, key);
     */
    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
  })();
  return CryptoJS.SHA512;
});

/***/ }),

/***/ 35901:
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/format-hex.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var CipherParams = C_lib.CipherParams;
    var C_enc = C.enc;
    var Hex = C_enc.Hex;
    var C_format = C.format;
    var HexFormatter = C_format.Hex = {
      /**
       * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
       *
       * @param {CipherParams} cipherParams The cipher params object.
       *
       * @return {string} The hexadecimally encoded string.
       *
       * @static
       *
       * @example
       *
       *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
       */
      stringify: function (cipherParams) {
        return cipherParams.ciphertext.toString(Hex);
      },
      /**
       * Converts a hexadecimally encoded ciphertext string to a cipher params object.
       *
       * @param {string} input The hexadecimally encoded string.
       *
       * @return {CipherParams} The cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
       */
      parse: function (input) {
        var ciphertext = Hex.parse(input);
        return CipherParams.create({
          ciphertext: ciphertext
        });
      }
    };
  })();
  return CryptoJS.format.Hex;
});

/***/ }),

/***/ 36609:
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory();
  } else // removed by dead control flow
{}
})(this, function () {
  /*globals window, global, require*/

  /**
   * CryptoJS core components.
   */
  var CryptoJS = CryptoJS || function (Math, undefined) {
    var crypto;

    // Native crypto from window (Browser)
    if (typeof window !== 'undefined' && window.crypto) {
      crypto = window.crypto;
    }

    // Native crypto in web worker (Browser)
    if (typeof self !== 'undefined' && self.crypto) {
      crypto = self.crypto;
    }

    // Native crypto from worker
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      crypto = globalThis.crypto;
    }

    // Native (experimental IE 11) crypto from window (Browser)
    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
      crypto = window.msCrypto;
    }

    // Native crypto from global (NodeJS)
    if (!crypto && typeof global !== 'undefined' && global.crypto) {
      crypto = global.crypto;
    }

    // Native crypto import via require (NodeJS)
    if (!crypto && "function" === 'function') {
      try {
        crypto = __webpack_require__(/*! crypto */ 50477);
      } catch (err) {}
    }

    /*
     * Cryptographically secure pseudorandom number generator
     *
     * As Math.random() is cryptographically not safe to use
     */
    var cryptoSecureRandomInt = function () {
      if (crypto) {
        // Use getRandomValues method (Browser)
        if (typeof crypto.getRandomValues === 'function') {
          try {
            return crypto.getRandomValues(new Uint32Array(1))[0];
          } catch (err) {}
        }

        // Use randomBytes method (NodeJS)
        if (typeof crypto.randomBytes === 'function') {
          try {
            return crypto.randomBytes(4).readInt32LE();
          } catch (err) {}
        }
      }
      throw new Error('Native crypto module could not be used to get secure random number.');
    };

    /*
     * Local polyfill of Object.create
      */
    var create = Object.create || function () {
      function F() {}
      return function (obj) {
        var subtype;
        F.prototype = obj;
        subtype = new F();
        F.prototype = null;
        return subtype;
      };
    }();

    /**
     * CryptoJS namespace.
     */
    var C = {};

    /**
     * Library namespace.
     */
    var C_lib = C.lib = {};

    /**
     * Base object for prototypal inheritance.
     */
    var Base = C_lib.Base = function () {
      return {
        /**
         * Creates a new object that inherits from this object.
         *
         * @param {Object} overrides Properties to copy into the new object.
         *
         * @return {Object} The new object.
         *
         * @static
         *
         * @example
         *
         *     var MyType = CryptoJS.lib.Base.extend({
         *         field: 'value',
         *
         *         method: function () {
         *         }
         *     });
         */
        extend: function (overrides) {
          // Spawn
          var subtype = create(this);

          // Augment
          if (overrides) {
            subtype.mixIn(overrides);
          }

          // Create default initializer
          if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
            subtype.init = function () {
              subtype.$super.init.apply(this, arguments);
            };
          }

          // Initializer's prototype is the subtype object
          subtype.init.prototype = subtype;

          // Reference supertype
          subtype.$super = this;
          return subtype;
        },
        /**
         * Extends this object and runs the init method.
         * Arguments to create() will be passed to init().
         *
         * @return {Object} The new object.
         *
         * @static
         *
         * @example
         *
         *     var instance = MyType.create();
         */
        create: function () {
          var instance = this.extend();
          instance.init.apply(instance, arguments);
          return instance;
        },
        /**
         * Initializes a newly created object.
         * Override this method to add some logic when your objects are created.
         *
         * @example
         *
         *     var MyType = CryptoJS.lib.Base.extend({
         *         init: function () {
         *             // ...
         *         }
         *     });
         */
        init: function () {},
        /**
         * Copies properties into this object.
         *
         * @param {Object} properties The properties to mix in.
         *
         * @example
         *
         *     MyType.mixIn({
         *         field: 'value'
         *     });
         */
        mixIn: function (properties) {
          for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
              this[propertyName] = properties[propertyName];
            }
          }

          // IE won't copy toString using the loop above
          if (properties.hasOwnProperty('toString')) {
            this.toString = properties.toString;
          }
        },
        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = instance.clone();
         */
        clone: function () {
          return this.init.prototype.extend(this);
        }
      };
    }();

    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var WordArray = C_lib.WordArray = Base.extend({
      /**
       * Initializes a newly created word array.
       *
       * @param {Array} words (Optional) An array of 32-bit words.
       * @param {number} sigBytes (Optional) The number of significant bytes in the words.
       *
       * @example
       *
       *     var wordArray = CryptoJS.lib.WordArray.create();
       *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
       *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
       */
      init: function (words, sigBytes) {
        words = this.words = words || [];
        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 4;
        }
      },
      /**
       * Converts this word array to a string.
       *
       * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
       *
       * @return {string} The stringified word array.
       *
       * @example
       *
       *     var string = wordArray + '';
       *     var string = wordArray.toString();
       *     var string = wordArray.toString(CryptoJS.enc.Utf8);
       */
      toString: function (encoder) {
        return (encoder || Hex).stringify(this);
      },
      /**
       * Concatenates a word array to this word array.
       *
       * @param {WordArray} wordArray The word array to append.
       *
       * @return {WordArray} This word array.
       *
       * @example
       *
       *     wordArray1.concat(wordArray2);
       */
      concat: function (wordArray) {
        // Shortcuts
        var thisWords = this.words;
        var thatWords = wordArray.words;
        var thisSigBytes = this.sigBytes;
        var thatSigBytes = wordArray.sigBytes;

        // Clamp excess bits
        this.clamp();

        // Concat
        if (thisSigBytes % 4) {
          // Copy one byte at a time
          for (var i = 0; i < thatSigBytes; i++) {
            var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
          }
        } else {
          // Copy one word at a time
          for (var j = 0; j < thatSigBytes; j += 4) {
            thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
          }
        }
        this.sigBytes += thatSigBytes;

        // Chainable
        return this;
      },
      /**
       * Removes insignificant bits.
       *
       * @example
       *
       *     wordArray.clamp();
       */
      clamp: function () {
        // Shortcuts
        var words = this.words;
        var sigBytes = this.sigBytes;

        // Clamp
        words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
        words.length = Math.ceil(sigBytes / 4);
      },
      /**
       * Creates a copy of this word array.
       *
       * @return {WordArray} The clone.
       *
       * @example
       *
       *     var clone = wordArray.clone();
       */
      clone: function () {
        var clone = Base.clone.call(this);
        clone.words = this.words.slice(0);
        return clone;
      },
      /**
       * Creates a word array filled with random bytes.
       *
       * @param {number} nBytes The number of random bytes to generate.
       *
       * @return {WordArray} The random word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.lib.WordArray.random(16);
       */
      random: function (nBytes) {
        var words = [];
        for (var i = 0; i < nBytes; i += 4) {
          words.push(cryptoSecureRandomInt());
        }
        return new WordArray.init(words, nBytes);
      }
    });

    /**
     * Encoder namespace.
     */
    var C_enc = C.enc = {};

    /**
     * Hex encoding strategy.
     */
    var Hex = C_enc.Hex = {
      /**
       * Converts a word array to a hex string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The hex string.
       *
       * @static
       *
       * @example
       *
       *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
       */
      stringify: function (wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var hexChars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          hexChars.push((bite >>> 4).toString(16));
          hexChars.push((bite & 0x0f).toString(16));
        }
        return hexChars.join('');
      },
      /**
       * Converts a hex string to a word array.
       *
       * @param {string} hexStr The hex string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
       */
      parse: function (hexStr) {
        // Shortcut
        var hexStrLength = hexStr.length;

        // Convert
        var words = [];
        for (var i = 0; i < hexStrLength; i += 2) {
          words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
        }
        return new WordArray.init(words, hexStrLength / 2);
      }
    };

    /**
     * Latin1 encoding strategy.
     */
    var Latin1 = C_enc.Latin1 = {
      /**
       * Converts a word array to a Latin1 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The Latin1 string.
       *
       * @static
       *
       * @example
       *
       *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
       */
      stringify: function (wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var latin1Chars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          latin1Chars.push(String.fromCharCode(bite));
        }
        return latin1Chars.join('');
      },
      /**
       * Converts a Latin1 string to a word array.
       *
       * @param {string} latin1Str The Latin1 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
       */
      parse: function (latin1Str) {
        // Shortcut
        var latin1StrLength = latin1Str.length;

        // Convert
        var words = [];
        for (var i = 0; i < latin1StrLength; i++) {
          words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
        }
        return new WordArray.init(words, latin1StrLength);
      }
    };

    /**
     * UTF-8 encoding strategy.
     */
    var Utf8 = C_enc.Utf8 = {
      /**
       * Converts a word array to a UTF-8 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-8 string.
       *
       * @static
       *
       * @example
       *
       *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
       */
      stringify: function (wordArray) {
        try {
          return decodeURIComponent(escape(Latin1.stringify(wordArray)));
        } catch (e) {
          throw new Error('Malformed UTF-8 data');
        }
      },
      /**
       * Converts a UTF-8 string to a word array.
       *
       * @param {string} utf8Str The UTF-8 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
       */
      parse: function (utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
      }
    };

    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
      /**
       * Resets this block algorithm's data buffer to its initial state.
       *
       * @example
       *
       *     bufferedBlockAlgorithm.reset();
       */
      reset: function () {
        // Initial values
        this._data = new WordArray.init();
        this._nDataBytes = 0;
      },
      /**
       * Adds new data to this block algorithm's buffer.
       *
       * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
       *
       * @example
       *
       *     bufferedBlockAlgorithm._append('data');
       *     bufferedBlockAlgorithm._append(wordArray);
       */
      _append: function (data) {
        // Convert string to WordArray, else assume WordArray already
        if (typeof data == 'string') {
          data = Utf8.parse(data);
        }

        // Append
        this._data.concat(data);
        this._nDataBytes += data.sigBytes;
      },
      /**
       * Processes available data blocks.
       *
       * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
       *
       * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
       *
       * @return {WordArray} The processed data.
       *
       * @example
       *
       *     var processedData = bufferedBlockAlgorithm._process();
       *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
       */
      _process: function (doFlush) {
        var processedWords;

        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var dataSigBytes = data.sigBytes;
        var blockSize = this.blockSize;
        var blockSizeBytes = blockSize * 4;

        // Count blocks ready
        var nBlocksReady = dataSigBytes / blockSizeBytes;
        if (doFlush) {
          // Round up to include partial blocks
          nBlocksReady = Math.ceil(nBlocksReady);
        } else {
          // Round down to include only full blocks,
          // less the number of blocks that must remain in the buffer
          nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        }

        // Count words ready
        var nWordsReady = nBlocksReady * blockSize;

        // Count bytes ready
        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

        // Process blocks
        if (nWordsReady) {
          for (var offset = 0; offset < nWordsReady; offset += blockSize) {
            // Perform concrete-algorithm logic
            this._doProcessBlock(dataWords, offset);
          }

          // Remove processed words
          processedWords = dataWords.splice(0, nWordsReady);
          data.sigBytes -= nBytesReady;
        }

        // Return processed words
        return new WordArray.init(processedWords, nBytesReady);
      },
      /**
       * Creates a copy of this object.
       *
       * @return {Object} The clone.
       *
       * @example
       *
       *     var clone = bufferedBlockAlgorithm.clone();
       */
      clone: function () {
        var clone = Base.clone.call(this);
        clone._data = this._data.clone();
        return clone;
      },
      _minBufferSize: 0
    });

    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
      /**
       * Configuration options.
       */
      cfg: Base.extend(),
      /**
       * Initializes a newly created hasher.
       *
       * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
       *
       * @example
       *
       *     var hasher = CryptoJS.algo.SHA256.create();
       */
      init: function (cfg) {
        // Apply config defaults
        this.cfg = this.cfg.extend(cfg);

        // Set initial values
        this.reset();
      },
      /**
       * Resets this hasher to its initial state.
       *
       * @example
       *
       *     hasher.reset();
       */
      reset: function () {
        // Reset data buffer
        BufferedBlockAlgorithm.reset.call(this);

        // Perform concrete-hasher logic
        this._doReset();
      },
      /**
       * Updates this hasher with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {Hasher} This hasher.
       *
       * @example
       *
       *     hasher.update('message');
       *     hasher.update(wordArray);
       */
      update: function (messageUpdate) {
        // Append
        this._append(messageUpdate);

        // Update the hash
        this._process();

        // Chainable
        return this;
      },
      /**
       * Finalizes the hash computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The hash.
       *
       * @example
       *
       *     var hash = hasher.finalize();
       *     var hash = hasher.finalize('message');
       *     var hash = hasher.finalize(wordArray);
       */
      finalize: function (messageUpdate) {
        // Final message update
        if (messageUpdate) {
          this._append(messageUpdate);
        }

        // Perform concrete-hasher logic
        var hash = this._doFinalize();
        return hash;
      },
      blockSize: 512 / 32,
      /**
       * Creates a shortcut function to a hasher's object interface.
       *
       * @param {Hasher} hasher The hasher to create a helper for.
       *
       * @return {Function} The shortcut function.
       *
       * @static
       *
       * @example
       *
       *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
       */
      _createHelper: function (hasher) {
        return function (message, cfg) {
          return new hasher.init(cfg).finalize(message);
        };
      },
      /**
       * Creates a shortcut function to the HMAC's object interface.
       *
       * @param {Hasher} hasher The hasher to use in this HMAC helper.
       *
       * @return {Function} The shortcut function.
       *
       * @static
       *
       * @example
       *
       *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
       */
      _createHmacHelper: function (hasher) {
        return function (message, key) {
          return new C_algo.HMAC.init(hasher, key).finalize(message);
        };
      }
    });

    /**
     * Algorithm namespace.
     */
    var C_algo = C.algo = {};
    return C;
  }(Math);
  return CryptoJS;
});

/***/ }),

/***/ 40357:
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha3.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./x64-core */ 9396));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var C_algo = C.algo;

    // Constants tables
    var RHO_OFFSETS = [];
    var PI_INDEXES = [];
    var ROUND_CONSTANTS = [];

    // Compute Constants
    (function () {
      // Compute rho offset constants
      var x = 1,
        y = 0;
      for (var t = 0; t < 24; t++) {
        RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
        var newX = y % 5;
        var newY = (2 * x + 3 * y) % 5;
        x = newX;
        y = newY;
      }

      // Compute pi index constants
      for (var x = 0; x < 5; x++) {
        for (var y = 0; y < 5; y++) {
          PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
        }
      }

      // Compute round constants
      var LFSR = 0x01;
      for (var i = 0; i < 24; i++) {
        var roundConstantMsw = 0;
        var roundConstantLsw = 0;
        for (var j = 0; j < 7; j++) {
          if (LFSR & 0x01) {
            var bitPosition = (1 << j) - 1;
            if (bitPosition < 32) {
              roundConstantLsw ^= 1 << bitPosition;
            } else /* if (bitPosition >= 32) */{
                roundConstantMsw ^= 1 << bitPosition - 32;
              }
          }

          // Compute next LFSR
          if (LFSR & 0x80) {
            // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
            LFSR = LFSR << 1 ^ 0x71;
          } else {
            LFSR <<= 1;
          }
        }
        ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
      }
    })();

    // Reusable objects for temporary values
    var T = [];
    (function () {
      for (var i = 0; i < 25; i++) {
        T[i] = X64Word.create();
      }
    })();

    /**
     * SHA-3 hash algorithm.
     */
    var SHA3 = C_algo.SHA3 = Hasher.extend({
      /**
       * Configuration options.
       *
       * @property {number} outputLength
       *   The desired number of bits in the output hash.
       *   Only values permitted are: 224, 256, 384, 512.
       *   Default: 512
       */
      cfg: Hasher.cfg.extend({
        outputLength: 512
      }),
      _doReset: function () {
        var state = this._state = [];
        for (var i = 0; i < 25; i++) {
          state[i] = new X64Word.init();
        }
        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
      },
      _doProcessBlock: function (M, offset) {
        // Shortcuts
        var state = this._state;
        var nBlockSizeLanes = this.blockSize / 2;

        // Absorb
        for (var i = 0; i < nBlockSizeLanes; i++) {
          // Shortcuts
          var M2i = M[offset + 2 * i];
          var M2i1 = M[offset + 2 * i + 1];

          // Swap endian
          M2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;
          M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00;

          // Absorb message into state
          var lane = state[i];
          lane.high ^= M2i1;
          lane.low ^= M2i;
        }

        // Rounds
        for (var round = 0; round < 24; round++) {
          // Theta
          for (var x = 0; x < 5; x++) {
            // Mix column lanes
            var tMsw = 0,
              tLsw = 0;
            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              tMsw ^= lane.high;
              tLsw ^= lane.low;
            }

            // Temporary values
            var Tx = T[x];
            Tx.high = tMsw;
            Tx.low = tLsw;
          }
          for (var x = 0; x < 5; x++) {
            // Shortcuts
            var Tx4 = T[(x + 4) % 5];
            var Tx1 = T[(x + 1) % 5];
            var Tx1Msw = Tx1.high;
            var Tx1Lsw = Tx1.low;

            // Mix surrounding columns
            var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
            var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              lane.high ^= tMsw;
              lane.low ^= tLsw;
            }
          }

          // Rho Pi
          for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
            var tMsw;
            var tLsw;

            // Shortcuts
            var lane = state[laneIndex];
            var laneMsw = lane.high;
            var laneLsw = lane.low;
            var rhoOffset = RHO_OFFSETS[laneIndex];

            // Rotate lanes
            if (rhoOffset < 32) {
              tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
              tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
            } else /* if (rhoOffset >= 32) */{
                tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
              }

            // Transpose lanes
            var TPiLane = T[PI_INDEXES[laneIndex]];
            TPiLane.high = tMsw;
            TPiLane.low = tLsw;
          }

          // Rho pi at x = y = 0
          var T0 = T[0];
          var state0 = state[0];
          T0.high = state0.high;
          T0.low = state0.low;

          // Chi
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              // Shortcuts
              var laneIndex = x + 5 * y;
              var lane = state[laneIndex];
              var TLane = T[laneIndex];
              var Tx1Lane = T[(x + 1) % 5 + 5 * y];
              var Tx2Lane = T[(x + 2) % 5 + 5 * y];

              // Mix rows
              lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
              lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
            }
          }

          // Iota
          var lane = state[0];
          var roundConstant = ROUND_CONSTANTS[round];
          lane.high ^= roundConstant.high;
          lane.low ^= roundConstant.low;
        }
      },
      _doFinalize: function () {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        var blockSizeBits = this.blockSize * 32;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
        dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Shortcuts
        var state = this._state;
        var outputLengthBytes = this.cfg.outputLength / 8;
        var outputLengthLanes = outputLengthBytes / 8;

        // Squeeze
        var hashWords = [];
        for (var i = 0; i < outputLengthLanes; i++) {
          // Shortcuts
          var lane = state[i];
          var laneMsw = lane.high;
          var laneLsw = lane.low;

          // Swap endian
          laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;
          laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00;

          // Squeeze state to retrieve hash
          hashWords.push(laneLsw);
          hashWords.push(laneMsw);
        }

        // Return final computed hash
        return new WordArray.init(hashWords, outputLengthBytes);
      },
      clone: function () {
        var clone = Hasher.clone.call(this);
        var state = clone._state = this._state.slice(0);
        for (var i = 0; i < 25; i++) {
          state[i] = state[i].clone();
        }
        return clone;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA3('message');
     *     var hash = CryptoJS.SHA3(wordArray);
     */
    C.SHA3 = Hasher._createHelper(SHA3);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA3(message, key);
     */
    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
  })(Math);
  return CryptoJS.SHA3;
});

/***/ }),

/***/ 43504:
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/tripledes.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./enc-base64 */ 50310), __webpack_require__(/*! ./md5 */ 53728), __webpack_require__(/*! ./evpkdf */ 5814), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;

    // Permuted Choice 1 constants
    var PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];

    // Permuted Choice 2 constants
    var PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];

    // Cumulative bit shift constants
    var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

    // SBOXes and round permutation constants
    var SBOX_P = [{
      0x0: 0x808200,
      0x10000000: 0x8000,
      0x20000000: 0x808002,
      0x30000000: 0x2,
      0x40000000: 0x200,
      0x50000000: 0x808202,
      0x60000000: 0x800202,
      0x70000000: 0x800000,
      0x80000000: 0x202,
      0x90000000: 0x800200,
      0xa0000000: 0x8200,
      0xb0000000: 0x808000,
      0xc0000000: 0x8002,
      0xd0000000: 0x800002,
      0xe0000000: 0x0,
      0xf0000000: 0x8202,
      0x8000000: 0x0,
      0x18000000: 0x808202,
      0x28000000: 0x8202,
      0x38000000: 0x8000,
      0x48000000: 0x808200,
      0x58000000: 0x200,
      0x68000000: 0x808002,
      0x78000000: 0x2,
      0x88000000: 0x800200,
      0x98000000: 0x8200,
      0xa8000000: 0x808000,
      0xb8000000: 0x800202,
      0xc8000000: 0x800002,
      0xd8000000: 0x8002,
      0xe8000000: 0x202,
      0xf8000000: 0x800000,
      0x1: 0x8000,
      0x10000001: 0x2,
      0x20000001: 0x808200,
      0x30000001: 0x800000,
      0x40000001: 0x808002,
      0x50000001: 0x8200,
      0x60000001: 0x200,
      0x70000001: 0x800202,
      0x80000001: 0x808202,
      0x90000001: 0x808000,
      0xa0000001: 0x800002,
      0xb0000001: 0x8202,
      0xc0000001: 0x202,
      0xd0000001: 0x800200,
      0xe0000001: 0x8002,
      0xf0000001: 0x0,
      0x8000001: 0x808202,
      0x18000001: 0x808000,
      0x28000001: 0x800000,
      0x38000001: 0x200,
      0x48000001: 0x8000,
      0x58000001: 0x800002,
      0x68000001: 0x2,
      0x78000001: 0x8202,
      0x88000001: 0x8002,
      0x98000001: 0x800202,
      0xa8000001: 0x202,
      0xb8000001: 0x808200,
      0xc8000001: 0x800200,
      0xd8000001: 0x0,
      0xe8000001: 0x8200,
      0xf8000001: 0x808002
    }, {
      0x0: 0x40084010,
      0x1000000: 0x4000,
      0x2000000: 0x80000,
      0x3000000: 0x40080010,
      0x4000000: 0x40000010,
      0x5000000: 0x40084000,
      0x6000000: 0x40004000,
      0x7000000: 0x10,
      0x8000000: 0x84000,
      0x9000000: 0x40004010,
      0xa000000: 0x40000000,
      0xb000000: 0x84010,
      0xc000000: 0x80010,
      0xd000000: 0x0,
      0xe000000: 0x4010,
      0xf000000: 0x40080000,
      0x800000: 0x40004000,
      0x1800000: 0x84010,
      0x2800000: 0x10,
      0x3800000: 0x40004010,
      0x4800000: 0x40084010,
      0x5800000: 0x40000000,
      0x6800000: 0x80000,
      0x7800000: 0x40080010,
      0x8800000: 0x80010,
      0x9800000: 0x0,
      0xa800000: 0x4000,
      0xb800000: 0x40080000,
      0xc800000: 0x40000010,
      0xd800000: 0x84000,
      0xe800000: 0x40084000,
      0xf800000: 0x4010,
      0x10000000: 0x0,
      0x11000000: 0x40080010,
      0x12000000: 0x40004010,
      0x13000000: 0x40084000,
      0x14000000: 0x40080000,
      0x15000000: 0x10,
      0x16000000: 0x84010,
      0x17000000: 0x4000,
      0x18000000: 0x4010,
      0x19000000: 0x80000,
      0x1a000000: 0x80010,
      0x1b000000: 0x40000010,
      0x1c000000: 0x84000,
      0x1d000000: 0x40004000,
      0x1e000000: 0x40000000,
      0x1f000000: 0x40084010,
      0x10800000: 0x84010,
      0x11800000: 0x80000,
      0x12800000: 0x40080000,
      0x13800000: 0x4000,
      0x14800000: 0x40004000,
      0x15800000: 0x40084010,
      0x16800000: 0x10,
      0x17800000: 0x40000000,
      0x18800000: 0x40084000,
      0x19800000: 0x40000010,
      0x1a800000: 0x40004010,
      0x1b800000: 0x80010,
      0x1c800000: 0x0,
      0x1d800000: 0x4010,
      0x1e800000: 0x40080010,
      0x1f800000: 0x84000
    }, {
      0x0: 0x104,
      0x100000: 0x0,
      0x200000: 0x4000100,
      0x300000: 0x10104,
      0x400000: 0x10004,
      0x500000: 0x4000004,
      0x600000: 0x4010104,
      0x700000: 0x4010000,
      0x800000: 0x4000000,
      0x900000: 0x4010100,
      0xa00000: 0x10100,
      0xb00000: 0x4010004,
      0xc00000: 0x4000104,
      0xd00000: 0x10000,
      0xe00000: 0x4,
      0xf00000: 0x100,
      0x80000: 0x4010100,
      0x180000: 0x4010004,
      0x280000: 0x0,
      0x380000: 0x4000100,
      0x480000: 0x4000004,
      0x580000: 0x10000,
      0x680000: 0x10004,
      0x780000: 0x104,
      0x880000: 0x4,
      0x980000: 0x100,
      0xa80000: 0x4010000,
      0xb80000: 0x10104,
      0xc80000: 0x10100,
      0xd80000: 0x4000104,
      0xe80000: 0x4010104,
      0xf80000: 0x4000000,
      0x1000000: 0x4010100,
      0x1100000: 0x10004,
      0x1200000: 0x10000,
      0x1300000: 0x4000100,
      0x1400000: 0x100,
      0x1500000: 0x4010104,
      0x1600000: 0x4000004,
      0x1700000: 0x0,
      0x1800000: 0x4000104,
      0x1900000: 0x4000000,
      0x1a00000: 0x4,
      0x1b00000: 0x10100,
      0x1c00000: 0x4010000,
      0x1d00000: 0x104,
      0x1e00000: 0x10104,
      0x1f00000: 0x4010004,
      0x1080000: 0x4000000,
      0x1180000: 0x104,
      0x1280000: 0x4010100,
      0x1380000: 0x0,
      0x1480000: 0x10004,
      0x1580000: 0x4000100,
      0x1680000: 0x100,
      0x1780000: 0x4010004,
      0x1880000: 0x10000,
      0x1980000: 0x4010104,
      0x1a80000: 0x10104,
      0x1b80000: 0x4000004,
      0x1c80000: 0x4000104,
      0x1d80000: 0x4010000,
      0x1e80000: 0x4,
      0x1f80000: 0x10100
    }, {
      0x0: 0x80401000,
      0x10000: 0x80001040,
      0x20000: 0x401040,
      0x30000: 0x80400000,
      0x40000: 0x0,
      0x50000: 0x401000,
      0x60000: 0x80000040,
      0x70000: 0x400040,
      0x80000: 0x80000000,
      0x90000: 0x400000,
      0xa0000: 0x40,
      0xb0000: 0x80001000,
      0xc0000: 0x80400040,
      0xd0000: 0x1040,
      0xe0000: 0x1000,
      0xf0000: 0x80401040,
      0x8000: 0x80001040,
      0x18000: 0x40,
      0x28000: 0x80400040,
      0x38000: 0x80001000,
      0x48000: 0x401000,
      0x58000: 0x80401040,
      0x68000: 0x0,
      0x78000: 0x80400000,
      0x88000: 0x1000,
      0x98000: 0x80401000,
      0xa8000: 0x400000,
      0xb8000: 0x1040,
      0xc8000: 0x80000000,
      0xd8000: 0x400040,
      0xe8000: 0x401040,
      0xf8000: 0x80000040,
      0x100000: 0x400040,
      0x110000: 0x401000,
      0x120000: 0x80000040,
      0x130000: 0x0,
      0x140000: 0x1040,
      0x150000: 0x80400040,
      0x160000: 0x80401000,
      0x170000: 0x80001040,
      0x180000: 0x80401040,
      0x190000: 0x80000000,
      0x1a0000: 0x80400000,
      0x1b0000: 0x401040,
      0x1c0000: 0x80001000,
      0x1d0000: 0x400000,
      0x1e0000: 0x40,
      0x1f0000: 0x1000,
      0x108000: 0x80400000,
      0x118000: 0x80401040,
      0x128000: 0x0,
      0x138000: 0x401000,
      0x148000: 0x400040,
      0x158000: 0x80000000,
      0x168000: 0x80001040,
      0x178000: 0x40,
      0x188000: 0x80000040,
      0x198000: 0x1000,
      0x1a8000: 0x80001000,
      0x1b8000: 0x80400040,
      0x1c8000: 0x1040,
      0x1d8000: 0x80401000,
      0x1e8000: 0x400000,
      0x1f8000: 0x401040
    }, {
      0x0: 0x80,
      0x1000: 0x1040000,
      0x2000: 0x40000,
      0x3000: 0x20000000,
      0x4000: 0x20040080,
      0x5000: 0x1000080,
      0x6000: 0x21000080,
      0x7000: 0x40080,
      0x8000: 0x1000000,
      0x9000: 0x20040000,
      0xa000: 0x20000080,
      0xb000: 0x21040080,
      0xc000: 0x21040000,
      0xd000: 0x0,
      0xe000: 0x1040080,
      0xf000: 0x21000000,
      0x800: 0x1040080,
      0x1800: 0x21000080,
      0x2800: 0x80,
      0x3800: 0x1040000,
      0x4800: 0x40000,
      0x5800: 0x20040080,
      0x6800: 0x21040000,
      0x7800: 0x20000000,
      0x8800: 0x20040000,
      0x9800: 0x0,
      0xa800: 0x21040080,
      0xb800: 0x1000080,
      0xc800: 0x20000080,
      0xd800: 0x21000000,
      0xe800: 0x1000000,
      0xf800: 0x40080,
      0x10000: 0x40000,
      0x11000: 0x80,
      0x12000: 0x20000000,
      0x13000: 0x21000080,
      0x14000: 0x1000080,
      0x15000: 0x21040000,
      0x16000: 0x20040080,
      0x17000: 0x1000000,
      0x18000: 0x21040080,
      0x19000: 0x21000000,
      0x1a000: 0x1040000,
      0x1b000: 0x20040000,
      0x1c000: 0x40080,
      0x1d000: 0x20000080,
      0x1e000: 0x0,
      0x1f000: 0x1040080,
      0x10800: 0x21000080,
      0x11800: 0x1000000,
      0x12800: 0x1040000,
      0x13800: 0x20040080,
      0x14800: 0x20000000,
      0x15800: 0x1040080,
      0x16800: 0x80,
      0x17800: 0x21040000,
      0x18800: 0x40080,
      0x19800: 0x21040080,
      0x1a800: 0x0,
      0x1b800: 0x21000000,
      0x1c800: 0x1000080,
      0x1d800: 0x40000,
      0x1e800: 0x20040000,
      0x1f800: 0x20000080
    }, {
      0x0: 0x10000008,
      0x100: 0x2000,
      0x200: 0x10200000,
      0x300: 0x10202008,
      0x400: 0x10002000,
      0x500: 0x200000,
      0x600: 0x200008,
      0x700: 0x10000000,
      0x800: 0x0,
      0x900: 0x10002008,
      0xa00: 0x202000,
      0xb00: 0x8,
      0xc00: 0x10200008,
      0xd00: 0x202008,
      0xe00: 0x2008,
      0xf00: 0x10202000,
      0x80: 0x10200000,
      0x180: 0x10202008,
      0x280: 0x8,
      0x380: 0x200000,
      0x480: 0x202008,
      0x580: 0x10000008,
      0x680: 0x10002000,
      0x780: 0x2008,
      0x880: 0x200008,
      0x980: 0x2000,
      0xa80: 0x10002008,
      0xb80: 0x10200008,
      0xc80: 0x0,
      0xd80: 0x10202000,
      0xe80: 0x202000,
      0xf80: 0x10000000,
      0x1000: 0x10002000,
      0x1100: 0x10200008,
      0x1200: 0x10202008,
      0x1300: 0x2008,
      0x1400: 0x200000,
      0x1500: 0x10000000,
      0x1600: 0x10000008,
      0x1700: 0x202000,
      0x1800: 0x202008,
      0x1900: 0x0,
      0x1a00: 0x8,
      0x1b00: 0x10200000,
      0x1c00: 0x2000,
      0x1d00: 0x10002008,
      0x1e00: 0x10202000,
      0x1f00: 0x200008,
      0x1080: 0x8,
      0x1180: 0x202000,
      0x1280: 0x200000,
      0x1380: 0x10000008,
      0x1480: 0x10002000,
      0x1580: 0x2008,
      0x1680: 0x10202008,
      0x1780: 0x10200000,
      0x1880: 0x10202000,
      0x1980: 0x10200008,
      0x1a80: 0x2000,
      0x1b80: 0x202008,
      0x1c80: 0x200008,
      0x1d80: 0x0,
      0x1e80: 0x10000000,
      0x1f80: 0x10002008
    }, {
      0x0: 0x100000,
      0x10: 0x2000401,
      0x20: 0x400,
      0x30: 0x100401,
      0x40: 0x2100401,
      0x50: 0x0,
      0x60: 0x1,
      0x70: 0x2100001,
      0x80: 0x2000400,
      0x90: 0x100001,
      0xa0: 0x2000001,
      0xb0: 0x2100400,
      0xc0: 0x2100000,
      0xd0: 0x401,
      0xe0: 0x100400,
      0xf0: 0x2000000,
      0x8: 0x2100001,
      0x18: 0x0,
      0x28: 0x2000401,
      0x38: 0x2100400,
      0x48: 0x100000,
      0x58: 0x2000001,
      0x68: 0x2000000,
      0x78: 0x401,
      0x88: 0x100401,
      0x98: 0x2000400,
      0xa8: 0x2100000,
      0xb8: 0x100001,
      0xc8: 0x400,
      0xd8: 0x2100401,
      0xe8: 0x1,
      0xf8: 0x100400,
      0x100: 0x2000000,
      0x110: 0x100000,
      0x120: 0x2000401,
      0x130: 0x2100001,
      0x140: 0x100001,
      0x150: 0x2000400,
      0x160: 0x2100400,
      0x170: 0x100401,
      0x180: 0x401,
      0x190: 0x2100401,
      0x1a0: 0x100400,
      0x1b0: 0x1,
      0x1c0: 0x0,
      0x1d0: 0x2100000,
      0x1e0: 0x2000001,
      0x1f0: 0x400,
      0x108: 0x100400,
      0x118: 0x2000401,
      0x128: 0x2100001,
      0x138: 0x1,
      0x148: 0x2000000,
      0x158: 0x100000,
      0x168: 0x401,
      0x178: 0x2100400,
      0x188: 0x2000001,
      0x198: 0x2100000,
      0x1a8: 0x0,
      0x1b8: 0x2100401,
      0x1c8: 0x100401,
      0x1d8: 0x400,
      0x1e8: 0x2000400,
      0x1f8: 0x100001
    }, {
      0x0: 0x8000820,
      0x1: 0x20000,
      0x2: 0x8000000,
      0x3: 0x20,
      0x4: 0x20020,
      0x5: 0x8020820,
      0x6: 0x8020800,
      0x7: 0x800,
      0x8: 0x8020000,
      0x9: 0x8000800,
      0xa: 0x20800,
      0xb: 0x8020020,
      0xc: 0x820,
      0xd: 0x0,
      0xe: 0x8000020,
      0xf: 0x20820,
      0x80000000: 0x800,
      0x80000001: 0x8020820,
      0x80000002: 0x8000820,
      0x80000003: 0x8000000,
      0x80000004: 0x8020000,
      0x80000005: 0x20800,
      0x80000006: 0x20820,
      0x80000007: 0x20,
      0x80000008: 0x8000020,
      0x80000009: 0x820,
      0x8000000a: 0x20020,
      0x8000000b: 0x8020800,
      0x8000000c: 0x0,
      0x8000000d: 0x8020020,
      0x8000000e: 0x8000800,
      0x8000000f: 0x20000,
      0x10: 0x20820,
      0x11: 0x8020800,
      0x12: 0x20,
      0x13: 0x800,
      0x14: 0x8000800,
      0x15: 0x8000020,
      0x16: 0x8020020,
      0x17: 0x20000,
      0x18: 0x0,
      0x19: 0x20020,
      0x1a: 0x8020000,
      0x1b: 0x8000820,
      0x1c: 0x8020820,
      0x1d: 0x20800,
      0x1e: 0x820,
      0x1f: 0x8000000,
      0x80000010: 0x20000,
      0x80000011: 0x800,
      0x80000012: 0x8020020,
      0x80000013: 0x20820,
      0x80000014: 0x20,
      0x80000015: 0x8020000,
      0x80000016: 0x8000000,
      0x80000017: 0x8000820,
      0x80000018: 0x8020820,
      0x80000019: 0x8000020,
      0x8000001a: 0x8000800,
      0x8000001b: 0x0,
      0x8000001c: 0x20800,
      0x8000001d: 0x820,
      0x8000001e: 0x20020,
      0x8000001f: 0x8020800
    }];

    // Masks that select the SBOX input
    var SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];

    /**
     * DES block cipher algorithm.
     */
    var DES = C_algo.DES = BlockCipher.extend({
      _doReset: function () {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;

        // Select 56 bits according to PC1
        var keyBits = [];
        for (var i = 0; i < 56; i++) {
          var keyBitPos = PC1[i] - 1;
          keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
        }

        // Assemble 16 subkeys
        var subKeys = this._subKeys = [];
        for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
          // Create subkey
          var subKey = subKeys[nSubKey] = [];

          // Shortcut
          var bitShift = BIT_SHIFTS[nSubKey];

          // Select 48 bits according to PC2
          for (var i = 0; i < 24; i++) {
            // Select from the left 28 key bits
            subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;

            // Select from the right 28 key bits
            subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
          }

          // Since each subkey is applied to an expanded 32-bit input,
          // the subkey can be broken into 8 values scaled to 32-bits,
          // which allows the key to be used without expansion
          subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
          for (var i = 1; i < 7; i++) {
            subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
          }
          subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
        }

        // Compute inverse subkeys
        var invSubKeys = this._invSubKeys = [];
        for (var i = 0; i < 16; i++) {
          invSubKeys[i] = subKeys[15 - i];
        }
      },
      encryptBlock: function (M, offset) {
        this._doCryptBlock(M, offset, this._subKeys);
      },
      decryptBlock: function (M, offset) {
        this._doCryptBlock(M, offset, this._invSubKeys);
      },
      _doCryptBlock: function (M, offset, subKeys) {
        // Get input
        this._lBlock = M[offset];
        this._rBlock = M[offset + 1];

        // Initial permutation
        exchangeLR.call(this, 4, 0x0f0f0f0f);
        exchangeLR.call(this, 16, 0x0000ffff);
        exchangeRL.call(this, 2, 0x33333333);
        exchangeRL.call(this, 8, 0x00ff00ff);
        exchangeLR.call(this, 1, 0x55555555);

        // Rounds
        for (var round = 0; round < 16; round++) {
          // Shortcuts
          var subKey = subKeys[round];
          var lBlock = this._lBlock;
          var rBlock = this._rBlock;

          // Feistel function
          var f = 0;
          for (var i = 0; i < 8; i++) {
            f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
          }
          this._lBlock = rBlock;
          this._rBlock = lBlock ^ f;
        }

        // Undo swap from last round
        var t = this._lBlock;
        this._lBlock = this._rBlock;
        this._rBlock = t;

        // Final permutation
        exchangeLR.call(this, 1, 0x55555555);
        exchangeRL.call(this, 8, 0x00ff00ff);
        exchangeRL.call(this, 2, 0x33333333);
        exchangeLR.call(this, 16, 0x0000ffff);
        exchangeLR.call(this, 4, 0x0f0f0f0f);

        // Set output
        M[offset] = this._lBlock;
        M[offset + 1] = this._rBlock;
      },
      keySize: 64 / 32,
      ivSize: 64 / 32,
      blockSize: 64 / 32
    });

    // Swap bits across the left and right words
    function exchangeLR(offset, mask) {
      var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
      this._rBlock ^= t;
      this._lBlock ^= t << offset;
    }
    function exchangeRL(offset, mask) {
      var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
      this._lBlock ^= t;
      this._rBlock ^= t << offset;
    }

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
     */
    C.DES = BlockCipher._createHelper(DES);

    /**
     * Triple-DES block cipher algorithm.
     */
    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
      _doReset: function () {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;
        // Make sure the key length is valid (64, 128 or >= 192 bit)
        if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
          throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
        }

        // Extend the key according to the keying options defined in 3DES standard
        var key1 = keyWords.slice(0, 2);
        var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
        var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

        // Create DES instances
        this._des1 = DES.createEncryptor(WordArray.create(key1));
        this._des2 = DES.createEncryptor(WordArray.create(key2));
        this._des3 = DES.createEncryptor(WordArray.create(key3));
      },
      encryptBlock: function (M, offset) {
        this._des1.encryptBlock(M, offset);
        this._des2.decryptBlock(M, offset);
        this._des3.encryptBlock(M, offset);
      },
      decryptBlock: function (M, offset) {
        this._des3.decryptBlock(M, offset);
        this._des2.encryptBlock(M, offset);
        this._des1.decryptBlock(M, offset);
      },
      keySize: 192 / 32,
      ivSize: 64 / 32,
      blockSize: 64 / 32
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
     */
    C.TripleDES = BlockCipher._createHelper(TripleDES);
  })();
  return CryptoJS.TripleDES;
});

/***/ }),

/***/ 48425:
/*!***************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/accesos/facades/accesos.facade.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccesosFacadeService: () => (/* binding */ AccesosFacadeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _services_pregunta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/pregunta.service */ 76692);
/* harmony import */ var _services_asociacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/asociacion.service */ 16983);
/* harmony import */ var _services_validacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/validacion.service */ 93954);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/usuario.service */ 48570);
/* harmony import */ var _services_reporte_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/reporte.service */ 60523);
/* harmony import */ var _store_accesos_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/accesos.state */ 6072);








class AccesosFacadeService {
  preguntaService;
  asociacionService;
  validacionService;
  usuarioService;
  reporteService;
  state;
  preguntasSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  asociacionesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  errorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  usuariosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  preguntas$ = this.preguntasSubject.asObservable();
  asociaciones$ = this.asociacionesSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();
  error$ = this.errorSubject.asObservable();
  usuarios$ = this.usuariosSubject.asObservable();
  constructor(preguntaService, asociacionService, validacionService, usuarioService, reporteService, state // ✅ INYECTAR STATE
  ) {
    this.preguntaService = preguntaService;
    this.asociacionService = asociacionService;
    this.validacionService = validacionService;
    this.usuarioService = usuarioService;
    this.reporteService = reporteService;
    this.state = state;
  }
  // ========== Usuarios ==========
  cargarUsuarios() {
    console.log('📡 Facade: cargando usuarios...');
    this.usuarioService.listar().subscribe({
      next: response => {
        console.log('✅ Usuarios recibidos:', response.data?.length || 0);
        const usuarios = (response.data || []).map(u => ({
          id_usuario: u.usuario_id,
          nombre_usuario: u.nombre_usuario,
          nombres: u.personal?.persona?.nombres || u.nombre_usuario,
          apellidos: u.personal?.persona?.apellidos || '',
          email: u.email
        }));
        // ✅ ACTUALIZAR STATE
        this.state.setUsuarios(usuarios);
        this.usuariosSubject.next(usuarios);
        console.log('👥 State actualizado con usuarios:', this.state.usuarios().length);
      },
      error: error => {
        console.error('❌ Error cargando usuarios:', error);
      }
    });
  }
  get usuarios() {
    return this.usuariosSubject.value;
  }
  // ========== Preguntas ==========
  cargarPreguntas(params) {
    console.log('📡 Facade: cargando preguntas con params:', params);
    this.loadingSubject.next(true);
    this.preguntaService.listar(params).subscribe({
      next: response => {
        const preguntas = response.data || [];
        console.log('✅ Preguntas recibidas:', preguntas.length);
        // ✅ ACTUALIZAR STATE
        this.state.setPreguntas(preguntas);
        this.preguntasSubject.next(preguntas);
        console.log('📝 State actualizado con preguntas:', this.state.preguntas().length);
        this.loadingSubject.next(false);
      },
      error: error => {
        console.error('❌ Error cargando preguntas:', error);
        this.loadingSubject.next(false);
        this.errorSubject.next(error.message);
      }
    });
  }
  crearPregunta(data) {
    return this.preguntaService.crear(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response.success) {
        const preguntasActuales = this.state.preguntas();
        this.state.setPreguntas([response.data, ...preguntasActuales]);
        this.preguntasSubject.next([response.data, ...preguntasActuales]);
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
  }
  actualizarPregunta(id, data) {
    return this.preguntaService.actualizar(id, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response.success) {
        const preguntasActuales = this.state.preguntas();
        const index = preguntasActuales.findIndex(p => p.pregunta_id === id);
        if (index !== -1) {
          const nuevasPreguntas = [...preguntasActuales];
          nuevasPreguntas[index] = response.data;
          this.state.setPreguntas(nuevasPreguntas);
          this.preguntasSubject.next(nuevasPreguntas);
        }
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data));
  }
  eliminarPregunta(id) {
    return this.preguntaService.eliminar(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
      const preguntasActuales = this.state.preguntas();
      this.state.setPreguntas(preguntasActuales.filter(p => p.pregunta_id !== id));
      this.preguntasSubject.next(preguntasActuales.filter(p => p.pregunta_id !== id));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(() => void 0));
  }
  // ========== Asociaciones ==========
  cargarAsociaciones(params) {
    this.loadingSubject.next(true);
    this.asociacionService.listar(params).subscribe({
      next: response => {
        const asociaciones = response.data || [];
        console.log('✅ Asociaciones recibidas:', asociaciones.length);
        // ✅ ACTUALIZAR STATE
        this.state.setAsociaciones(asociaciones);
        this.asociacionesSubject.next(asociaciones);
        this.loadingSubject.next(false);
        this.errorSubject.next(null);
      },
      error: error => {
        this.loadingSubject.next(false);
        this.errorSubject.next(error.message || 'Error al cargar asociaciones');
      }
    });
  }
  crearAsociacion(data) {
    return this.asociacionService.crear(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response.success) {
        this.cargarAsociaciones();
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(() => {
      return {
        id_usuario: data.usuario_id,
        id_pregunta: data.pregunta_id,
        respuesta: '🔒 Encriptada',
        validada: false,
        fecha_asociacion: new Date().toISOString(),
        usuario_nombre: '',
        usuario_email: '',
        pregunta_texto: ''
      };
    }));
  }
  eliminarAsociacion(usuarioId, preguntaId) {
    return this.asociacionService.eliminar(usuarioId, preguntaId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
      const asociacionesActuales = this.state.asociaciones();
      this.state.setAsociaciones(asociacionesActuales.filter(a => a.id_usuario !== usuarioId || a.id_pregunta !== preguntaId));
      this.asociacionesSubject.next(asociacionesActuales.filter(a => a.id_usuario !== usuarioId || a.id_pregunta !== preguntaId));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(() => void 0));
  }
  // ========== Validación ==========
  validarRespuestaIndividual(usuarioId, preguntaId, respuesta) {
    return this.validacionService.validarRespuestaIndividual({
      usuario_id: usuarioId,
      pregunta_id: preguntaId,
      respuesta
    });
  }
  validarMultiplesRespuestas(usuarioId, respuestas, sessionId, preguntasUsadas) {
    return this.validacionService.validarMultiplesRespuestas({
      usuario_id: usuarioId,
      session_id: sessionId,
      respuestas,
      preguntas_usadas: preguntasUsadas
    });
  }
  // ========== Reportes ==========
  generarReportePreguntas(preguntas, total, activas) {
    return this.reporteService.generarReportePreguntas(preguntas, total, activas);
  }
  generarReporteAsociaciones(asociaciones, total) {
    return this.reporteService.generarReporteAsociaciones(asociaciones, total);
  }
  exportarReportePDF(reporte) {
    this.reporteService.exportarPDF(reporte);
  }
  exportarReporteExcel(reporte) {
    this.reporteService.exportarExcel(reporte);
  }
  validarMasiva(asociaciones) {
    console.log('📡 Facade.validarMasiva:', asociaciones);
    return this.asociacionService.validarMasiva(asociaciones);
  }
  actualizarRespuesta(usuarioId, preguntaId, respuesta) {
    return this.asociacionService.actualizarRespuesta(usuarioId, preguntaId, respuesta).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
      // Recargar asociaciones para actualizar el estado
      this.cargarAsociaciones();
    }));
  }
  obtenerRespuesta(usuarioId, preguntaId) {
    console.log('📡 Facade.obtenerRespuesta:', {
      usuarioId,
      preguntaId
    });
    return this.asociacionService.obtenerRespuesta(usuarioId, preguntaId);
  }
  obtenerPreguntasPorUsuario(usuarioId) {
    console.log('📡 Facade.obtenerPreguntasPorUsuario:', usuarioId);
    return this.asociacionService.obtenerPreguntasPorUsuario(usuarioId);
  }
  static ɵfac = function AccesosFacadeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AccesosFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_pregunta_service__WEBPACK_IMPORTED_MODULE_4__.PreguntaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_asociacion_service__WEBPACK_IMPORTED_MODULE_5__.AsociacionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_validacion_service__WEBPACK_IMPORTED_MODULE_6__.ValidacionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_reporte_service__WEBPACK_IMPORTED_MODULE_8__.ReporteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_store_accesos_state__WEBPACK_IMPORTED_MODULE_9__.AccesosState));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AccesosFacadeService,
    factory: AccesosFacadeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 48950:
/*!**************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/accesos/utils/pagination.util.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationUtil: () => (/* binding */ PaginationUtil)
/* harmony export */ });
class PaginationUtil {
  static getPaginationArray(total, current, delta = 2) {
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
}

/***/ }),

/***/ 50310:
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/enc-base64.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * Base64 encoding strategy.
     */
    var Base64 = C_enc.Base64 = {
      /**
       * Converts a word array to a Base64 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The Base64 string.
       *
       * @static
       *
       * @example
       *
       *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
       */
      stringify: function (wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = this._map;

        // Clamp excess bits
        wordArray.clamp();

        // Convert
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
          var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
          var triplet = byte1 << 16 | byte2 << 8 | byte3;
          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
          }
        }

        // Add padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }
        return base64Chars.join('');
      },
      /**
       * Converts a Base64 string to a word array.
       *
       * @param {string} base64Str The Base64 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
       */
      parse: function (base64Str) {
        // Shortcuts
        var base64StrLength = base64Str.length;
        var map = this._map;
        var reverseMap = this._reverseMap;
        if (!reverseMap) {
          reverseMap = this._reverseMap = [];
          for (var j = 0; j < map.length; j++) {
            reverseMap[map.charCodeAt(j)] = j;
          }
        }

        // Ignore padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);
          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        }

        // Convert
        return parseLoop(base64Str, base64StrLength, reverseMap);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };
    function parseLoop(base64Str, base64StrLength, reverseMap) {
      var words = [];
      var nBytes = 0;
      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
          var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
          var bitsCombined = bits1 | bits2;
          words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }
      return WordArray.create(words, nBytes);
    }
  })();
  return CryptoJS.enc.Base64;
});

/***/ }),

/***/ 50477:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 53728:
/*!***************************************!*\
  !*** ./node_modules/crypto-js/md5.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Constants table
    var T = [];

    // Compute constants
    (function () {
      for (var i = 0; i < 64; i++) {
        T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
      }
    })();

    /**
     * MD5 hash algorithm.
     */
    var MD5 = C_algo.MD5 = Hasher.extend({
      _doReset: function () {
        this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
      },
      _doProcessBlock: function (M, offset) {
        // Swap endian
        for (var i = 0; i < 16; i++) {
          // Shortcuts
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];
          M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
        }

        // Shortcuts
        var H = this._hash.words;
        var M_offset_0 = M[offset + 0];
        var M_offset_1 = M[offset + 1];
        var M_offset_2 = M[offset + 2];
        var M_offset_3 = M[offset + 3];
        var M_offset_4 = M[offset + 4];
        var M_offset_5 = M[offset + 5];
        var M_offset_6 = M[offset + 6];
        var M_offset_7 = M[offset + 7];
        var M_offset_8 = M[offset + 8];
        var M_offset_9 = M[offset + 9];
        var M_offset_10 = M[offset + 10];
        var M_offset_11 = M[offset + 11];
        var M_offset_12 = M[offset + 12];
        var M_offset_13 = M[offset + 13];
        var M_offset_14 = M[offset + 14];
        var M_offset_15 = M[offset + 15];

        // Working variables
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];

        // Computation
        a = FF(a, b, c, d, M_offset_0, 7, T[0]);
        d = FF(d, a, b, c, M_offset_1, 12, T[1]);
        c = FF(c, d, a, b, M_offset_2, 17, T[2]);
        b = FF(b, c, d, a, M_offset_3, 22, T[3]);
        a = FF(a, b, c, d, M_offset_4, 7, T[4]);
        d = FF(d, a, b, c, M_offset_5, 12, T[5]);
        c = FF(c, d, a, b, M_offset_6, 17, T[6]);
        b = FF(b, c, d, a, M_offset_7, 22, T[7]);
        a = FF(a, b, c, d, M_offset_8, 7, T[8]);
        d = FF(d, a, b, c, M_offset_9, 12, T[9]);
        c = FF(c, d, a, b, M_offset_10, 17, T[10]);
        b = FF(b, c, d, a, M_offset_11, 22, T[11]);
        a = FF(a, b, c, d, M_offset_12, 7, T[12]);
        d = FF(d, a, b, c, M_offset_13, 12, T[13]);
        c = FF(c, d, a, b, M_offset_14, 17, T[14]);
        b = FF(b, c, d, a, M_offset_15, 22, T[15]);
        a = GG(a, b, c, d, M_offset_1, 5, T[16]);
        d = GG(d, a, b, c, M_offset_6, 9, T[17]);
        c = GG(c, d, a, b, M_offset_11, 14, T[18]);
        b = GG(b, c, d, a, M_offset_0, 20, T[19]);
        a = GG(a, b, c, d, M_offset_5, 5, T[20]);
        d = GG(d, a, b, c, M_offset_10, 9, T[21]);
        c = GG(c, d, a, b, M_offset_15, 14, T[22]);
        b = GG(b, c, d, a, M_offset_4, 20, T[23]);
        a = GG(a, b, c, d, M_offset_9, 5, T[24]);
        d = GG(d, a, b, c, M_offset_14, 9, T[25]);
        c = GG(c, d, a, b, M_offset_3, 14, T[26]);
        b = GG(b, c, d, a, M_offset_8, 20, T[27]);
        a = GG(a, b, c, d, M_offset_13, 5, T[28]);
        d = GG(d, a, b, c, M_offset_2, 9, T[29]);
        c = GG(c, d, a, b, M_offset_7, 14, T[30]);
        b = GG(b, c, d, a, M_offset_12, 20, T[31]);
        a = HH(a, b, c, d, M_offset_5, 4, T[32]);
        d = HH(d, a, b, c, M_offset_8, 11, T[33]);
        c = HH(c, d, a, b, M_offset_11, 16, T[34]);
        b = HH(b, c, d, a, M_offset_14, 23, T[35]);
        a = HH(a, b, c, d, M_offset_1, 4, T[36]);
        d = HH(d, a, b, c, M_offset_4, 11, T[37]);
        c = HH(c, d, a, b, M_offset_7, 16, T[38]);
        b = HH(b, c, d, a, M_offset_10, 23, T[39]);
        a = HH(a, b, c, d, M_offset_13, 4, T[40]);
        d = HH(d, a, b, c, M_offset_0, 11, T[41]);
        c = HH(c, d, a, b, M_offset_3, 16, T[42]);
        b = HH(b, c, d, a, M_offset_6, 23, T[43]);
        a = HH(a, b, c, d, M_offset_9, 4, T[44]);
        d = HH(d, a, b, c, M_offset_12, 11, T[45]);
        c = HH(c, d, a, b, M_offset_15, 16, T[46]);
        b = HH(b, c, d, a, M_offset_2, 23, T[47]);
        a = II(a, b, c, d, M_offset_0, 6, T[48]);
        d = II(d, a, b, c, M_offset_7, 10, T[49]);
        c = II(c, d, a, b, M_offset_14, 15, T[50]);
        b = II(b, c, d, a, M_offset_5, 21, T[51]);
        a = II(a, b, c, d, M_offset_12, 6, T[52]);
        d = II(d, a, b, c, M_offset_3, 10, T[53]);
        c = II(c, d, a, b, M_offset_10, 15, T[54]);
        b = II(b, c, d, a, M_offset_1, 21, T[55]);
        a = II(a, b, c, d, M_offset_8, 6, T[56]);
        d = II(d, a, b, c, M_offset_15, 10, T[57]);
        c = II(c, d, a, b, M_offset_6, 15, T[58]);
        b = II(b, c, d, a, M_offset_13, 21, T[59]);
        a = II(a, b, c, d, M_offset_4, 6, T[60]);
        d = II(d, a, b, c, M_offset_11, 10, T[61]);
        c = II(c, d, a, b, M_offset_2, 15, T[62]);
        b = II(b, c, d, a, M_offset_9, 21, T[63]);

        // Intermediate hash value
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
      },
      _doFinalize: function () {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
        var nBitsTotalL = nBitsTotal;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;
        data.sigBytes = (dataWords.length + 1) * 4;

        // Hash final blocks
        this._process();

        // Shortcuts
        var hash = this._hash;
        var H = hash.words;

        // Swap endian
        for (var i = 0; i < 4; i++) {
          // Shortcut
          var H_i = H[i];
          H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
        }

        // Return final computed hash
        return hash;
      },
      clone: function () {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });
    function FF(a, b, c, d, x, s, t) {
      var n = a + (b & c | ~b & d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }
    function GG(a, b, c, d, x, s, t) {
      var n = a + (b & d | c & ~d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }
    function HH(a, b, c, d, x, s, t) {
      var n = a + (b ^ c ^ d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }
    function II(a, b, c, d, x, s, t) {
      var n = a + (c ^ (b | ~d)) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.MD5('message');
     *     var hash = CryptoJS.MD5(wordArray);
     */
    C.MD5 = Hasher._createHelper(MD5);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacMD5(message, key);
     */
    C.HmacMD5 = Hasher._createHmacHelper(MD5);
  })(Math);
  return CryptoJS.MD5;
});

/***/ }),

/***/ 55021:
/*!***************************************!*\
  !*** ./node_modules/crypto-js/rc4.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./enc-base64 */ 50310), __webpack_require__(/*! ./md5 */ 53728), __webpack_require__(/*! ./evpkdf */ 5814), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;

    /**
     * RC4 stream cipher algorithm.
     */
    var RC4 = C_algo.RC4 = StreamCipher.extend({
      _doReset: function () {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;
        var keySigBytes = key.sigBytes;

        // Init sbox
        var S = this._S = [];
        for (var i = 0; i < 256; i++) {
          S[i] = i;
        }

        // Key setup
        for (var i = 0, j = 0; i < 256; i++) {
          var keyByteIndex = i % keySigBytes;
          var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;
          j = (j + S[i] + keyByte) % 256;

          // Swap
          var t = S[i];
          S[i] = S[j];
          S[j] = t;
        }

        // Counters
        this._i = this._j = 0;
      },
      _doProcessBlock: function (M, offset) {
        M[offset] ^= generateKeystreamWord.call(this);
      },
      keySize: 256 / 32,
      ivSize: 0
    });
    function generateKeystreamWord() {
      // Shortcuts
      var S = this._S;
      var i = this._i;
      var j = this._j;

      // Generate keystream word
      var keystreamWord = 0;
      for (var n = 0; n < 4; n++) {
        i = (i + 1) % 256;
        j = (j + S[i]) % 256;

        // Swap
        var t = S[i];
        S[i] = S[j];
        S[j] = t;
        keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
      }

      // Update counters
      this._i = i;
      this._j = j;
      return keystreamWord;
    }

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
     */
    C.RC4 = StreamCipher._createHelper(RC4);

    /**
     * Modified RC4 stream cipher algorithm.
     */
    var RC4Drop = C_algo.RC4Drop = RC4.extend({
      /**
       * Configuration options.
       *
       * @property {number} drop The number of keystream words to drop. Default 192
       */
      cfg: RC4.cfg.extend({
        drop: 192
      }),
      _doReset: function () {
        RC4._doReset.call(this);

        // Drop
        for (var i = this.cfg.drop; i > 0; i--) {
          generateKeystreamWord.call(this);
        }
      }
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
     */
    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
  })();
  return CryptoJS.RC4;
});

/***/ }),

/***/ 55445:
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-ansix923.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * ANSI X.923 padding strategy.
   */
  CryptoJS.pad.AnsiX923 = {
    pad: function (data, blockSize) {
      // Shortcuts
      var dataSigBytes = data.sigBytes;
      var blockSizeBytes = blockSize * 4;

      // Count padding bytes
      var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

      // Compute last byte position
      var lastBytePos = dataSigBytes + nPaddingBytes - 1;

      // Pad
      data.clamp();
      data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
      data.sigBytes += nPaddingBytes;
    },
    unpad: function (data) {
      // Get number of padding bytes from last byte
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

      // Remove padding
      data.sigBytes -= nPaddingBytes;
    }
  };
  return CryptoJS.pad.Ansix923;
});

/***/ }),

/***/ 57191:
/*!******************************************!*\
  !*** ./node_modules/crypto-js/pbkdf2.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./sha256 */ 72021), __webpack_require__(/*! ./hmac */ 92541));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var SHA256 = C_algo.SHA256;
    var HMAC = C_algo.HMAC;

    /**
     * Password-Based Key Derivation Function 2 algorithm.
     */
    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
      /**
       * Configuration options.
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hasher to use. Default: SHA256
       * @property {number} iterations The number of iterations to perform. Default: 250000
       */
      cfg: Base.extend({
        keySize: 128 / 32,
        hasher: SHA256,
        iterations: 250000
      }),
      /**
       * Initializes a newly created key derivation function.
       *
       * @param {Object} cfg (Optional) The configuration options to use for the derivation.
       *
       * @example
       *
       *     var kdf = CryptoJS.algo.PBKDF2.create();
       *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
       *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
       */
      init: function (cfg) {
        this.cfg = this.cfg.extend(cfg);
      },
      /**
       * Computes the Password-Based Key Derivation Function 2.
       *
       * @param {WordArray|string} password The password.
       * @param {WordArray|string} salt A salt.
       *
       * @return {WordArray} The derived key.
       *
       * @example
       *
       *     var key = kdf.compute(password, salt);
       */
      compute: function (password, salt) {
        // Shortcut
        var cfg = this.cfg;

        // Init HMAC
        var hmac = HMAC.create(cfg.hasher, password);

        // Initial values
        var derivedKey = WordArray.create();
        var blockIndex = WordArray.create([0x00000001]);

        // Shortcuts
        var derivedKeyWords = derivedKey.words;
        var blockIndexWords = blockIndex.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations;

        // Generate key
        while (derivedKeyWords.length < keySize) {
          var block = hmac.update(salt).finalize(blockIndex);
          hmac.reset();

          // Shortcuts
          var blockWords = block.words;
          var blockWordsLength = blockWords.length;

          // Iterations
          var intermediate = block;
          for (var i = 1; i < iterations; i++) {
            intermediate = hmac.finalize(intermediate);
            hmac.reset();

            // Shortcut
            var intermediateWords = intermediate.words;

            // XOR intermediate with block
            for (var j = 0; j < blockWordsLength; j++) {
              blockWords[j] ^= intermediateWords[j];
            }
          }
          derivedKey.concat(block);
          blockIndexWords[0]++;
        }
        derivedKey.sigBytes = keySize * 4;
        return derivedKey;
      }
    });

    /**
     * Computes the Password-Based Key Derivation Function 2.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     * @param {Object} cfg (Optional) The configuration options to use for this computation.
     *
     * @return {WordArray} The derived key.
     *
     * @static
     *
     * @example
     *
     *     var key = CryptoJS.PBKDF2(password, salt);
     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
     */
    C.PBKDF2 = function (password, salt, cfg) {
      return PBKDF2.create(cfg).compute(password, salt);
    };
  })();
  return CryptoJS.PBKDF2;
});

/***/ }),

/***/ 57624:
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/pad-nopadding.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * A noop padding strategy.
   */
  CryptoJS.pad.NoPadding = {
    pad: function () {},
    unpad: function () {}
  };
  return CryptoJS.pad.NoPadding;
});

/***/ }),

/***/ 59183:
/*!***************************************!*\
  !*** ./node_modules/crypto-js/aes.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./enc-base64 */ 50310), __webpack_require__(/*! ./md5 */ 53728), __webpack_require__(/*! ./evpkdf */ 5814), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;

    // Lookup tables
    var SBOX = [];
    var INV_SBOX = [];
    var SUB_MIX_0 = [];
    var SUB_MIX_1 = [];
    var SUB_MIX_2 = [];
    var SUB_MIX_3 = [];
    var INV_SUB_MIX_0 = [];
    var INV_SUB_MIX_1 = [];
    var INV_SUB_MIX_2 = [];
    var INV_SUB_MIX_3 = [];

    // Compute lookup tables
    (function () {
      // Compute double table
      var d = [];
      for (var i = 0; i < 256; i++) {
        if (i < 128) {
          d[i] = i << 1;
        } else {
          d[i] = i << 1 ^ 0x11b;
        }
      }

      // Walk GF(2^8)
      var x = 0;
      var xi = 0;
      for (var i = 0; i < 256; i++) {
        // Compute sbox
        var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
        sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
        SBOX[x] = sx;
        INV_SBOX[sx] = x;

        // Compute multiplication
        var x2 = d[x];
        var x4 = d[x2];
        var x8 = d[x4];

        // Compute sub bytes, mix columns tables
        var t = d[sx] * 0x101 ^ sx * 0x1010100;
        SUB_MIX_0[x] = t << 24 | t >>> 8;
        SUB_MIX_1[x] = t << 16 | t >>> 16;
        SUB_MIX_2[x] = t << 8 | t >>> 24;
        SUB_MIX_3[x] = t;

        // Compute inv sub bytes, inv mix columns tables
        var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
        INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
        INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
        INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
        INV_SUB_MIX_3[sx] = t;

        // Compute next counter
        if (!x) {
          x = xi = 1;
        } else {
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        }
      }
    })();

    // Precomputed Rcon lookup
    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

    /**
     * AES block cipher algorithm.
     */
    var AES = C_algo.AES = BlockCipher.extend({
      _doReset: function () {
        var t;

        // Skip reset of nRounds has been set before and key did not change
        if (this._nRounds && this._keyPriorReset === this._key) {
          return;
        }

        // Shortcuts
        var key = this._keyPriorReset = this._key;
        var keyWords = key.words;
        var keySize = key.sigBytes / 4;

        // Compute number of rounds
        var nRounds = this._nRounds = keySize + 6;

        // Compute number of key schedule rows
        var ksRows = (nRounds + 1) * 4;

        // Compute key schedule
        var keySchedule = this._keySchedule = [];
        for (var ksRow = 0; ksRow < ksRows; ksRow++) {
          if (ksRow < keySize) {
            keySchedule[ksRow] = keyWords[ksRow];
          } else {
            t = keySchedule[ksRow - 1];
            if (!(ksRow % keySize)) {
              // Rot word
              t = t << 8 | t >>> 24;

              // Sub word
              t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];

              // Mix Rcon
              t ^= RCON[ksRow / keySize | 0] << 24;
            } else if (keySize > 6 && ksRow % keySize == 4) {
              // Sub word
              t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
            }
            keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
          }
        }

        // Compute inv key schedule
        var invKeySchedule = this._invKeySchedule = [];
        for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
          var ksRow = ksRows - invKsRow;
          if (invKsRow % 4) {
            var t = keySchedule[ksRow];
          } else {
            var t = keySchedule[ksRow - 4];
          }
          if (invKsRow < 4 || ksRow <= 4) {
            invKeySchedule[invKsRow] = t;
          } else {
            invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
          }
        }
      },
      encryptBlock: function (M, offset) {
        this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
      },
      decryptBlock: function (M, offset) {
        // Swap 2nd and 4th rows
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
        this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

        // Inv swap 2nd and 4th rows
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
      },
      _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
        // Shortcut
        var nRounds = this._nRounds;

        // Get input, add round key
        var s0 = M[offset] ^ keySchedule[0];
        var s1 = M[offset + 1] ^ keySchedule[1];
        var s2 = M[offset + 2] ^ keySchedule[2];
        var s3 = M[offset + 3] ^ keySchedule[3];

        // Key schedule row counter
        var ksRow = 4;

        // Rounds
        for (var round = 1; round < nRounds; round++) {
          // Shift rows, sub bytes, mix columns, add round key
          var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
          var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
          var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
          var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

          // Update state
          s0 = t0;
          s1 = t1;
          s2 = t2;
          s3 = t3;
        }

        // Shift rows, sub bytes, add round key
        var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
        var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
        var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
        var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

        // Set output
        M[offset] = t0;
        M[offset + 1] = t1;
        M[offset + 2] = t2;
        M[offset + 3] = t3;
      },
      keySize: 256 / 32
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
     */
    C.AES = BlockCipher._createHelper(AES);
  })();
  return CryptoJS.AES;
});

/***/ }),

/***/ 60523:
/*!*********************************************!*\
  !*** ./src/app/services/reporte.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReporteService: () => (/* binding */ ReporteService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class ReporteService {
  generarReportePreguntas(preguntas, totalPreguntas, preguntasActivas) {
    return {
      titulo: 'Reporte de Preguntas de Seguridad',
      fecha: new Date(),
      totalRegistros: preguntas.length,
      estadisticas: [{
        label: 'Total Preguntas',
        value: totalPreguntas
      }, {
        label: 'Preguntas Activas',
        value: preguntasActivas
      }, {
        label: 'Preguntas Inactivas',
        value: totalPreguntas - preguntasActivas
      }],
      datos: preguntas.map(p => ({
        id: p.pregunta_id,
        pregunta: p.texto,
        estado: p.activo ? 'Activa' : 'Inactiva',
        usuarios: p.usuarios_asociados || 0,
        fecha_creacion: p.fecha_creacion
      }))
    };
  }
  generarReporteAsociaciones(asociaciones, totalAsociaciones) {
    const validadas = asociaciones.filter(a => a.validada).length;
    return {
      titulo: 'Reporte de Asociaciones Usuario-Pregunta',
      fecha: new Date(),
      totalRegistros: asociaciones.length,
      estadisticas: [{
        label: 'Total Asociaciones',
        value: totalAsociaciones
      }, {
        label: 'Respuestas Validadas',
        value: validadas
      }, {
        label: 'Tasa de Validación',
        value: `${(validadas / totalAsociaciones * 100).toFixed(1)}%`
      }],
      datos: asociaciones.map(a => ({
        usuario: a.usuario_nombre,
        pregunta: a.pregunta_texto,
        validada: a.validada ? 'Sí' : 'No',
        fecha_asociacion: a.fecha_asociacion
      }))
    };
  }
  exportarPDF(reporte) {
    console.log('Exportando PDF:', reporte.titulo);
    // Implementación real con librería PDF
  }
  exportarExcel(reporte) {
    console.log('Exportando Excel:', reporte.titulo);
    // Implementación real con librería Excel
  }
  static ɵfac = function ReporteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ReporteService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ReporteService,
    factory: ReporteService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 61687:
/*!*********************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/accesos/acceso.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccesosComponent: () => (/* binding */ AccesosComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 52260);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _store_accesos_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/accesos.state */ 6072);
/* harmony import */ var _services_seguridad_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/seguridad.service */ 8440);
/* harmony import */ var _services_validacion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/validacion.service */ 93954);
/* harmony import */ var _services_reporte_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/reporte.service */ 60523);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _accesos_facades_accesos_facade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../accesos/facades/accesos.facade */ 48425);
/* harmony import */ var _utils_pagination_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/pagination.util */ 48950);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../layouts/header/header.component */ 50468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../core/services/loading.service */ 98660);







// Servicios y estados







// Utilidades

// Componentes hijos









function AccesosComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function AccesosComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 58)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 60)(4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](result_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](result_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](result_r4.description);
  }
}
function AccesosComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, AccesosComponent_div_4_div_11_div_1_Template, 8, 3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function AccesosComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function AccesosComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 46)(3, "div", 47)(4, "div", 48)(5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup.enter", function AccesosComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, AccesosComponent_div_4_button_8_Template, 2, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, AccesosComponent_div_4_div_11_Template, 2, 1, "div", 53)(12, AccesosComponent_div_4_div_12_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function AccesosComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 69)(1, "div", 70)(2, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 72)(7, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function AccesosComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 76)(1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function AccesosComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function AccesosComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 79)(2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, AccesosComponent_div_5_div_4_div_9_Template, 2, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function AccesosComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, AccesosComponent_div_5_div_2_Template, 17, 0, "div", 66)(3, AccesosComponent_div_5_div_3_Template, 3, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, AccesosComponent_div_5_div_4_Template, 10, 3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("minimized-mode", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isMinimized);
  }
}
function AccesosComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 86)(3, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u2754");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "td")(9, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "td")(12, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "td", 91)(18, "div", 92)(19, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_tr_77_Template_button_click_19_listener() {
      const pregunta_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalEditarPregunta(pregunta_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_tr_77_Template_button_click_22_listener() {
      const pregunta_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalEliminarPregunta(pregunta_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_tr_77_Template_button_click_25_listener() {
      const pregunta_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalAsociarUsuario(pregunta_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27, "\uD83D\uDD17");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const pregunta_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" PREG-", pregunta_r9.pregunta_id.toString().padStart(4, "0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](pregunta_r9.texto);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](pregunta_r9.activo ? "badge-success" : "badge-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", pregunta_r9.activo ? "Activa" : "Inactiva", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.contarUsuariosPorPregunta(pregunta_r9.pregunta_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](16, 7, pregunta_r9.fecha_creacion, "dd/MM/yyyy"));
  }
}
function AccesosComponent_div_78_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_78_button_4_Template_button_click_0_listener() {
      const pagina_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPaginaNumeroPreguntas(pagina_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("active", pagina_r12 === ctx_r1.paginaActualPreguntasValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", pagina_r12 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", pagina_r12, " ");
  }
}
function AccesosComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 96)(1, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_78_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPaginaPreguntas(ctx_r1.paginaActualPreguntasValue - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, AccesosComponent_div_78_button_4_Template, 2, 4, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_78_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPaginaPreguntas(ctx_r1.paginaActualPreguntasValue + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.paginaActualPreguntasValue === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArrayPreguntas());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.paginaActualPreguntasValue === ctx_r1.totalPaginasPreguntasValue);
  }
}
function AccesosComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 101)(1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\u2753");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "No hay preguntas de seguridad registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Configure preguntas para mejorar la seguridad del sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_79_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalCrearPregunta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " Crear primera pregunta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function AccesosComponent_option_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", usuario_r14.id_usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate3"](" ", usuario_r14.nombre_usuario, " - ", usuario_r14.nombres, " ", usuario_r14.apellidos, " ");
  }
}
function AccesosComponent_option_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pregunta_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", pregunta_r15.pregunta_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", pregunta_r15.texto.substring(0, 50), "... ");
  }
}
function AccesosComponent_tr_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 103)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "td")(10, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "\uD83D\uDD12 Encriptada");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "td")(13, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "td", 91)(19, "div", 92)(20, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_tr_132_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalEditarRespuesta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_tr_132_Template_button_click_23_listener() {
      const asociacion_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalValidarRespuesta(asociacion_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_tr_132_Template_button_click_26_listener() {
      const asociacion_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalEliminarAsociacion(asociacion_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const asociacion_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](asociacion_r17.usuario_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](asociacion_r17.usuario_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](asociacion_r17.pregunta_texto);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](asociacion_r17.validada ? "badge-success" : "badge-warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", asociacion_r17.validada ? "Validada" : "Pendiente", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](17, 7, asociacion_r17.fecha_asociacion, "dd/MM/yyyy HH:mm"));
  }
}
function AccesosComponent_div_133_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_133_button_4_Template_button_click_0_listener() {
      const pagina_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPaginaNumeroAsociaciones(pagina_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r20 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("active", pagina_r20 === ctx_r1.paginaActualAsociacionesValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", pagina_r20 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", pagina_r20, " ");
  }
}
function AccesosComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 96)(1, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_133_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPaginaAsociaciones(ctx_r1.paginaActualAsociacionesValue - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, AccesosComponent_div_133_button_4_Template, 2, 4, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_133_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPaginaAsociaciones(ctx_r1.paginaActualAsociacionesValue + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.paginaActualAsociacionesValue === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArrayAsociaciones());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.paginaActualAsociacionesValue === ctx_r1.totalPaginasAsociacionesValue);
  }
}
function AccesosComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 101)(1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\uD83D\uDD17");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "No hay asociaciones registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Asocie preguntas de seguridad a los usuarios del sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_134_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalAsociarUsuario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "\uD83D\uDD17");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " Crear primera asociaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function AccesosComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 109)(1, "div", 110)(2, "div", 111)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_135_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalPregunta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 113)(8, "form", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngSubmit", function AccesosComponent_div_135_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.isEditingPregunta ? ctx_r1.actualizarPregunta() : ctx_r1.crearPregunta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 115)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Texto de la Pregunta *");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "textarea", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_135_Template_textarea_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.preguntaFormData.texto, $event) || (ctx_r1.preguntaFormData.texto = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 115)(14, "label")(15, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_135_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.preguntaFormData.activo, $event) || (ctx_r1.preguntaFormData.activo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, " Pregunta activa (disponible para asociaci\u00F3n) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 118)(18, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_135_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalPregunta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.isEditingPregunta ? "\u270F\uFE0F Editar Pregunta de Seguridad" : "\u2753 Nueva Pregunta de Seguridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.preguntaFormData.texto);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.preguntaFormData.activo);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.isEditingPregunta ? "Actualizar" : "Guardar");
  }
}
function AccesosComponent_div_136_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", usuario_r24.id_usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate3"](" ", usuario_r24.nombre_usuario, " - ", usuario_r24.nombres, " ", usuario_r24.apellidos, " ");
  }
}
function AccesosComponent_div_136_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pregunta_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", pregunta_r25.pregunta_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", pregunta_r25.texto, " ");
  }
}
function AccesosComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 109)(1, "div", 110)(2, "div", 111)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\uD83D\uDD17 Asociar Pregunta de Seguridad a Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_136_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalAsociacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 113)(8, "form", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngSubmit", function AccesosComponent_div_136_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.guardarAsociacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 115)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Usuario *");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "select", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_136_Template_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.asociacionFormData.usuario_id, $event) || (ctx_r1.asociacionFormData.usuario_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Seleccione usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, AccesosComponent_div_136_option_15_Template, 2, 4, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div", 115)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18, "Pregunta de Seguridad *");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "select", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_136_Template_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.asociacionFormData.pregunta_id, $event) || (ctx_r1.asociacionFormData.pregunta_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Seleccione pregunta");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, AccesosComponent_div_136_option_22_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "div", 115)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, "Respuesta *");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_136_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.respuestaPlana, $event) || (ctx_r1.respuestaPlana = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "div", 118)(28, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_136_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalAsociacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](29, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31, "Guardar Asociaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.asociacionFormData.usuario_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.usuariosValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.asociacionFormData.pregunta_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.preguntasDisponiblesValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.respuestaPlana);
  }
}
function AccesosComponent_div_137_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 132)(1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵstyleProp"]("width", ctx_r1.progresoValidacion + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate3"](" Validando ", ctx_r1.progresoValidacion, "% (", ctx_r1.actualValidacion, "/", ctx_r1.totalValidar, ") ");
  }
}
function AccesosComponent_div_137_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 136)(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 138)(4, "div", 139)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const resultado_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("valid", resultado_r27.valido === true)("invalid", resultado_r27.valido === false)("pending", resultado_r27.valido === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", resultado_r27.valido === true ? "\u2705" : resultado_r27.valido === false ? "\u274C" : "\u23F3", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](resultado_r27.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](resultado_r27.pregunta);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", resultado_r27.mensaje, " ");
  }
}
function AccesosComponent_div_137_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 141)(1, "div", 142)(2, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Total procesadas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 142)(7, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "V\u00E1lidas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 142)(12, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Inv\u00E1lidas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.totalValidadas);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.respuestasValidas);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.respuestasInvalidas);
  }
}
function AccesosComponent_div_137_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_137_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.iniciarValidacionMasivaProceso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" Validar Todas (", ctx_r1.respuestasPendientes, " pendientes) ");
  }
}
function AccesosComponent_div_137_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_137_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarReporteValidacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, " Exportar Reporte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function AccesosComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 109)(1, "div", 124)(2, "div", 111)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u2705 Validaci\u00F3n Masiva de Respuestas");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_137_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalValidacionMasiva());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, AccesosComponent_div_137_div_8_Template, 5, 5, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, AccesosComponent_div_137_div_10_Template, 11, 10, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, AccesosComponent_div_137_div_11_Template, 16, 3, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, AccesosComponent_div_137_button_13_Template, 4, 1, "button", 129)(14, AccesosComponent_div_137_button_14_Template, 4, 0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_137_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalValidacionMasiva());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.validandoMasivamente);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.resultadosValidacionMasiva);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.totalValidadas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.validandoMasivamente && ctx_r1.hayPendientes);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.totalValidadas > 0);
  }
}
function AccesosComponent_div_138_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Cargando datos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function AccesosComponent_div_138_div_9_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngValue", usuario_r32.id_usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate3"](" ", usuario_r32.nombre_usuario, " - ", usuario_r32.nombres, " ", usuario_r32.apellidos, " ");
  }
}
function AccesosComponent_div_138_div_9_div_8_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pregunta_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngValue", pregunta_r34.pregunta_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", pregunta_r34.texto, " ");
  }
}
function AccesosComponent_div_138_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 115)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Pregunta de Seguridad *");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "select", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_138_div_9_div_8_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.preguntaSeleccionadaEditar, $event) || (ctx_r1.preguntaSeleccionadaEditar = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function AccesosComponent_div_138_div_9_div_8_Template_select_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cargarRespuestaActual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Seleccione una pregunta");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, AccesosComponent_div_138_div_9_div_8_option_6_Template, 2, 2, "option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.preguntaSeleccionadaEditar);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.preguntasUsuarioEditar);
  }
}
function AccesosComponent_div_138_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 115)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Respuesta Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 155)(4, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_138_div_9_div_9_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.mostrarRespuestaActual = !ctx_r1.mostrarRespuestaActual);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.mostrarRespuestaActual ? ctx_r1.respuestaActual : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.mostrarRespuestaActual ? "\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F" : "\uD83D\uDC41\uFE0F");
  }
}
function AccesosComponent_div_138_div_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 115)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Nueva Respuesta *");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_138_div_9_div_10_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.nuevaRespuesta, $event) || (ctx_r1.nuevaRespuesta = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "small", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "La respuesta ser\u00E1 encriptada autom\u00E1ticamente al guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.nuevaRespuesta);
  }
}
function AccesosComponent_div_138_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 115)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Usuario *");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "select", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_138_div_9_Template_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.usuarioSeleccionadoEditar, $event) || (ctx_r1.usuarioSeleccionadoEditar = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function AccesosComponent_div_138_div_9_Template_select_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cargarPreguntasPorUsuario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Seleccione un usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, AccesosComponent_div_138_div_9_option_7_Template, 2, 4, "option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, AccesosComponent_div_138_div_9_div_8_Template, 7, 3, "div", 154)(9, AccesosComponent_div_138_div_9_div_9_Template, 9, 2, "div", 154)(10, AccesosComponent_div_138_div_9_div_10_Template, 6, 1, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.usuarioSeleccionadoEditar);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.usuariosValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.usuarioSeleccionadoEditar);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.respuestaActualCargada);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.preguntaSeleccionadaEditar);
  }
}
function AccesosComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 109)(1, "div", 110)(2, "div", 111)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u270F\uFE0F Editar Respuesta de Seguridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_138_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalEditarRespuesta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, AccesosComponent_div_138_div_8_Template, 4, 0, "div", 147)(9, AccesosComponent_div_138_div_9_Template, 11, 6, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 118)(11, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_138_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalEditarRespuesta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_138_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.guardarEditarRespuesta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, " Guardar Cambios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.cargandoRespuesta);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.cargandoRespuesta);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !ctx_r1.usuarioSeleccionadoEditar || !ctx_r1.preguntaSeleccionadaEditar || !ctx_r1.nuevaRespuesta.trim());
  }
}
function AccesosComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 109)(1, "div", 110)(2, "div", 111)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u2705 Validar Respuesta de Seguridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_139_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalValidacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 113)(8, "p")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "Pregunta:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "form", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngSubmit", function AccesosComponent_div_139_Template_form_ngSubmit_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.procesarValidacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 115)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "Ingrese la respuesta para validar *");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_div_139_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.respuestaValidacion, $event) || (ctx_r1.respuestaValidacion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 118)(18, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_139_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalValidacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Validar Respuesta");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.asociacionValidacion == null ? null : ctx_r1.asociacionValidacion.pregunta_texto);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.respuestaValidacion);
  }
}
function AccesosComponent_div_140_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" \u00BFEst\u00E1 seguro de eliminar la pregunta \"", ctx_r1.elementoAEliminar == null ? null : ctx_r1.elementoAEliminar.texto, "\"? ");
  }
}
function AccesosComponent_div_140_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" \u00BFEst\u00E1 seguro de eliminar la asociaci\u00F3n entre ", ctx_r1.elementoAEliminar == null ? null : ctx_r1.elementoAEliminar.usuario_nombre, " y \"", ctx_r1.elementoAEliminar == null ? null : ctx_r1.elementoAEliminar.pregunta_texto, "\"? ");
  }
}
function AccesosComponent_div_140_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Esta acci\u00F3n tambi\u00E9n eliminar\u00E1 todas las asociaciones de usuarios con esta pregunta. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function AccesosComponent_div_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 109)(1, "div", 161)(2, "div", 162)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u26A0\uFE0F Confirmar Eliminaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_140_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalConfirmacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, AccesosComponent_div_140_p_8_Template, 2, 1, "p", 148)(9, AccesosComponent_div_140_p_9_Template, 2, 2, "p", 148)(10, AccesosComponent_div_140_p_10_Template, 2, 0, "p", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 165)(12, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_140_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalConfirmacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_div_140_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmarEliminacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.tipoEliminacion === "pregunta");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.tipoEliminacion === "asociacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.tipoEliminacion === "pregunta");
  }
}
class AccesosComponent {
  moduleLoader;
  loadingService;
  // Inyección de dependencias
  facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_accesos_facades_accesos_facade__WEBPACK_IMPORTED_MODULE_15__.AccesosFacadeService);
  state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_store_accesos_state__WEBPACK_IMPORTED_MODULE_9__.AccesosState);
  seguridadService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_seguridad_service__WEBPACK_IMPORTED_MODULE_10__.SeguridadService);
  validacionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_validacion_service__WEBPACK_IMPORTED_MODULE_11__.ValidacionService);
  reporteService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_reporte_service__WEBPACK_IMPORTED_MODULE_12__.ReporteService);
  notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_13__.NotificationService);
  themeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_14__.ThemeService);
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  // Estado compartido del sistema
  moduleName = 'Administración de Accesos y Permisos';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  isSidebarCollapsed = false;
  showHelpSupport = false;
  isMinimized = false;
  showMinimizeNotification = false;
  isSearchOpen = false;
  isNotificationsOpen = false;
  isUserMenuOpen = false;
  // Variables de UI
  searchQuery = '';
  searchResults = [];
  currentTheme = 'light';
  // Modal flags
  showModalPregunta = false;
  showModalAsociacion = false;
  showModalValidacion = false;
  showModalReportes = false;
  showModalConfirmacion = false;
  showModalReporteUsuario = false;
  showModalValidacionMasiva = false;
  // Estado de edición
  isEditingPregunta = false;
  tipoEliminacion = 'pregunta';
  elementoAEliminar = null;
  // Datos de formularios
  preguntaFormData = {
    texto: '',
    activo: true
  };
  asociacionFormData = {
    usuario_id: 0,
    pregunta_id: 0,
    respuesta: ''
  };
  respuestaEditando = null;
  showModalEditarRespuesta = false;
  cargandoRespuesta = false;
  usuarioSeleccionadoEditar = null;
  preguntaSeleccionadaEditar = null;
  preguntasUsuarioEditar = [];
  respuestaActual = '';
  respuestaActualCargada = false;
  mostrarRespuestaActual = false;
  nuevaRespuesta = '';
  respuestaPlana = '';
  respuestaValidacion = '';
  mostrarRespuesta = false;
  errorValidacion = null;
  resultadoValidacion = null;
  asociacionValidacion = null;
  // Filtros
  filtrosAsociaciones = {
    id_usuario: null,
    id_pregunta: null
  };
  // Variables de validación masiva
  validandoMasivamente = false;
  progresoValidacion = 0;
  actualValidacion = 0;
  totalValidar = 0;
  resultadosValidacionMasiva = [];
  // Reportes
  reporteSeleccionado = null;
  usuarioReporteSeleccionado = null;
  reporteUsuario = null;
  // Notificaciones (mock temporal)
  notifications = [{
    user: 'Juan Pérez',
    action: 'Nueva pregunta creada',
    time: '5 min',
    read: false,
    avatar: 'JP'
  }, {
    user: 'María González',
    action: 'Respuesta validada',
    time: '15 min',
    read: true,
    avatar: 'MG'
  }];
  // Computed signals para paginación
  preguntasPaginadas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
    const start = (this.state.paginaActualPreguntas() - 1) * 5;
    const end = start + 5;
    return this.state.preguntas().slice(start, end);
  }, ...(ngDevMode ? [{
    debugName: "preguntasPaginadas"
  }] : []));
  totalPaginasPreguntas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => Math.ceil(this.state.totalPreguntas() / 5), ...(ngDevMode ? [{
    debugName: "totalPaginasPreguntas"
  }] : []));
  asociacionesFiltradas = this.state.asociacionesFiltradas;
  asociacionesPaginadas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
    const start = (this.state.paginaActualAsociaciones() - 1) * 5;
    const end = start + 5;
    return this.asociacionesFiltradas().slice(start, end);
  }, ...(ngDevMode ? [{
    debugName: "asociacionesPaginadas"
  }] : []));
  totalPaginasAsociaciones = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => Math.ceil(this.asociacionesFiltradas().length / 5), ...(ngDevMode ? [{
    debugName: "totalPaginasAsociaciones"
  }] : []));
  // Computed values
  totalPreguntas = this.state.totalPreguntas;
  preguntasActivas = this.state.preguntasActivas;
  totalAsociaciones = this.state.totalAsociaciones;
  usuariosConPreguntas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => new Set(this.state.asociaciones().map(a => a.id_usuario)).size, ...(ngDevMode ? [{
    debugName: "usuariosConPreguntas"
  }] : []));
  preguntasActivasList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.state.preguntas().filter(p => p.activo), ...(ngDevMode ? [{
    debugName: "preguntasActivasList"
  }] : []));
  preguntasDisponibles = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
    if (!this.asociacionFormData.usuario_id) {
      return this.preguntasActivasList();
    }
    const preguntasUsuario = this.state.asociaciones().filter(a => a.id_usuario === this.asociacionFormData.usuario_id).map(a => a.id_pregunta);
    return this.preguntasActivasList().filter(p => !preguntasUsuario.includes(p.pregunta_id));
  }, ...(ngDevMode ? [{
    debugName: "preguntasDisponibles"
  }] : []));
  unreadNotificationsCount = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.notifications.filter(n => !n.read).length, ...(ngDevMode ? [{
    debugName: "unreadNotificationsCount"
  }] : []));
  constructor(moduleLoader, loadingService) {
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
    // Efecto para recargar asociaciones cuando cambian los filtros
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
      const filtros = this.state.filtrosAsociaciones();
      this.facade.cargarAsociaciones({
        usuario_id: filtros.id_usuario || undefined,
        pregunta_id: filtros.id_pregunta || undefined
      });
    });
  }
  ngOnInit() {
    this.cargarDatosIniciales();
    this.cargarUsuarios();
    this.setupThemeSubscription();
    this.setupKeyboardShortcuts();
    this.setupSearchDebounce();
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
    const hasContent = document.querySelector('.accesos-container, .main-content, app-accesos');
    const hasData = document.querySelector('.stats-container, .section-container, .data-table, .table-responsive');
    console.log(`🔍 [Accesos] Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
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
    this.themeService.theme$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.state.reset();
    this.moduleLoader.markModuleRendered(this.moduleName);
  }
  cargarUsuarios() {
    this.facade.cargarUsuarios();
  }
  cargarDatosIniciales() {
    this.facade.cargarPreguntas();
    this.facade.cargarAsociaciones();
  }
  setupSearchDebounce() {
    // Implementar búsqueda con debounce
  }
  // ========== Métodos de UI ==========
  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onToggleHelpSupport() {
    this.showHelpSupport = !this.showHelpSupport;
  }
  onOpenSearchModal() {
    this.isSearchOpen = true;
  }
  closeSearchModal() {
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }
  performSearch() {
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      return;
    }
    const query = this.searchQuery.toLowerCase();
    const preguntasMatch = this.state.preguntas().filter(p => p.texto.toLowerCase().includes(query)).map(p => ({
      title: `Pregunta: ${p.texto.substring(0, 50)}...`,
      description: `ID: PREG-${p.pregunta_id.toString().padStart(4, '0')}`,
      icon: '❓'
    }));
    // Simular resultados de usuarios
    this.searchResults = preguntasMatch.slice(0, 10);
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  minimizeToBubble() {
    this.isMinimized = true;
    setTimeout(() => {
      this.showMinimizeNotification = true;
      setTimeout(() => {
        this.showMinimizeNotification = false;
      }, 3000);
    }, 300);
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
    const target = event.target;
    if (target.classList.contains('modal-overlay-sigpaz') && this.showHelpSupport && !this.isMinimized) {
      this.minimizeToBubble();
    }
  }
  // ========== Métodos de Preguntas ==========
  abrirModalEditarRespuesta() {
    this.showModalEditarRespuesta = true;
    this.usuarioSeleccionadoEditar = null;
    this.preguntaSeleccionadaEditar = null;
    this.preguntasUsuarioEditar = [];
    this.respuestaActual = '';
    this.respuestaActualCargada = false;
    this.nuevaRespuesta = '';
    this.mostrarRespuestaActual = false;
    this.cargandoRespuesta = false;
  }
  cargarPreguntasPorUsuario() {
    if (!this.usuarioSeleccionadoEditar) {
      this.preguntasUsuarioEditar = [];
      this.preguntaSeleccionadaEditar = null;
      return;
    }
    console.log('🔍 Cargando preguntas para usuario:', this.usuarioSeleccionadoEditar);
    this.cargandoRespuesta = true;
    this.preguntaSeleccionadaEditar = null;
    this.respuestaActualCargada = false;
    this.respuestaActual = '';
    this.facade.obtenerPreguntasPorUsuario(this.usuarioSeleccionadoEditar).subscribe({
      next: response => {
        console.log('✅ Respuesta del backend:', response);
        console.log('✅ Preguntas recibidas:', response.data);
        // ✅ CORREGIDO: Usar id_pregunta (como viene del backend)
        this.preguntasUsuarioEditar = response.data.map(item => ({
          pregunta_id: item.id_pregunta,
          // ← Cambiado de item.pregunta_id a item.id_pregunta
          texto: item.pregunta_texto,
          activo: true,
          fecha_creacion: new Date().toISOString()
        }));
        console.log('✅ Preguntas mapeadas:', this.preguntasUsuarioEditar);
        this.cargandoRespuesta = false;
        if (this.preguntasUsuarioEditar.length > 0) {
          const primeraPreguntaId = this.preguntasUsuarioEditar[0].pregunta_id;
          console.log('✅ Seleccionando primera pregunta (ID):', primeraPreguntaId);
          if (primeraPreguntaId) {
            setTimeout(() => {
              this.preguntaSeleccionadaEditar = primeraPreguntaId;
              console.log('✅ preguntaSeleccionadaEditar actualizada a:', this.preguntaSeleccionadaEditar);
              this.cargarRespuestaActual();
            }, 100);
          }
        }
        if (this.preguntasUsuarioEditar.length === 0) {
          this.notificationService.showWarning('Este usuario no tiene preguntas de seguridad asociadas');
        }
      },
      error: error => {
        console.error('❌ Error:', error);
        this.notificationService.showError('Error al cargar las preguntas del usuario');
        this.cargandoRespuesta = false;
      }
    });
  }
  cargarRespuestaActual() {
    // ✅ Validación más estricta
    if (!this.usuarioSeleccionadoEditar) {
      console.warn('No se puede cargar respuesta: usuario es null o undefined');
      return;
    }
    if (!this.preguntaSeleccionadaEditar) {
      console.warn('No se puede cargar respuesta: pregunta es null o undefined');
      return;
    }
    if (this.preguntaSeleccionadaEditar === 0 || this.preguntaSeleccionadaEditar === null) {
      console.warn('No se puede cargar respuesta: pregunta es 0 o null');
      return;
    }
    console.log('🔍 Cargando respuesta para usuario:', this.usuarioSeleccionadoEditar, 'pregunta:', this.preguntaSeleccionadaEditar);
    this.cargandoRespuesta = true;
    this.respuestaActualCargada = false;
    this.facade.obtenerRespuesta(this.usuarioSeleccionadoEditar, this.preguntaSeleccionadaEditar).subscribe({
      next: response => {
        console.log('✅ Respuesta obtenida:', response);
        this.respuestaActual = response.respuesta;
        this.respuestaActualCargada = true;
        this.mostrarRespuestaActual = false;
        this.cargandoRespuesta = false;
      },
      error: error => {
        console.error('❌ Error cargando respuesta:', error);
        this.notificationService.showError('Error al cargar la respuesta actual');
        this.cargandoRespuesta = false;
      }
    });
  }
  guardarEditarRespuesta() {
    if (!this.usuarioSeleccionadoEditar || !this.preguntaSeleccionadaEditar || !this.nuevaRespuesta.trim()) {
      this.notificationService.showWarning('Complete todos los campos');
      return;
    }
    this.cargandoRespuesta = true;
    this.facade.actualizarRespuesta(this.usuarioSeleccionadoEditar, this.preguntaSeleccionadaEditar, this.nuevaRespuesta.trim()).subscribe({
      next: () => {
        this.notificationService.showSuccess('Respuesta actualizada exitosamente');
        this.facade.cargarAsociaciones();
        this.cerrarModalEditarRespuesta();
      },
      error: error => {
        this.notificationService.showError(error.error?.message || 'Error al actualizar respuesta');
        this.cargandoRespuesta = false;
      }
    });
  }
  cerrarModalEditarRespuesta() {
    this.showModalEditarRespuesta = false;
    this.usuarioSeleccionadoEditar = null;
    this.preguntaSeleccionadaEditar = null;
    this.preguntasUsuarioEditar = [];
    this.respuestaActual = '';
    this.nuevaRespuesta = '';
    this.cargandoRespuesta = false;
    this.respuestaActualCargada = false;
  }
  abrirModalCrearPregunta() {
    this.isEditingPregunta = false;
    this.preguntaFormData = {
      texto: '',
      activo: true
    };
    this.errorValidacion = null;
    this.showModalPregunta = true;
  }
  abrirModalEditarPregunta(pregunta) {
    this.isEditingPregunta = true;
    this.preguntaFormData = {
      pregunta_id: pregunta.pregunta_id,
      texto: pregunta.texto,
      activo: pregunta.activo,
      fecha_creacion: pregunta.fecha_creacion
    };
    this.showModalPregunta = true;
  }
  crearPregunta() {
    if (!this.validarFormularioPregunta()) return;
    const data = {
      texto: this.preguntaFormData.texto,
      activo: this.preguntaFormData.activo
    };
    this.facade.crearPregunta(data).subscribe({
      next: () => {
        this.notificationService.showSuccess('Pregunta creada exitosamente');
        this.cerrarModalPregunta();
        this.facade.cargarPreguntas();
      },
      error: error => {
        this.notificationService.showError(error.message || 'Error al crear pregunta');
      }
    });
  }
  actualizarPregunta() {
    if (!this.validarFormularioPregunta() || !this.preguntaFormData.pregunta_id) return;
    const data = {
      pregunta_id: this.preguntaFormData.pregunta_id,
      texto: this.preguntaFormData.texto,
      activo: this.preguntaFormData.activo
    };
    this.facade.actualizarPregunta(data.pregunta_id, data).subscribe({
      next: () => {
        this.notificationService.showSuccess('Pregunta actualizada exitosamente');
        this.cerrarModalPregunta();
      },
      error: error => {
        this.notificationService.showError(error.message || 'Error al actualizar pregunta');
      }
    });
  }
  validarFormularioPregunta() {
    if (!this.preguntaFormData.texto?.trim()) {
      this.errorValidacion = 'El texto de la pregunta es obligatorio';
      return false;
    }
    if (this.preguntaFormData.texto.length > 255) {
      this.errorValidacion = 'La pregunta no puede exceder los 255 caracteres';
      return false;
    }
    this.errorValidacion = null;
    return true;
  }
  cerrarModalPregunta() {
    this.showModalPregunta = false;
    this.preguntaFormData = {
      texto: '',
      activo: true
    };
    this.errorValidacion = null;
  }
  // ========== Métodos de Asociaciones ==========
  abrirModalAsociarUsuario(pregunta) {
    this.asociacionFormData = {
      usuario_id: 0,
      pregunta_id: pregunta?.pregunta_id || 0,
      respuesta: ''
    };
    this.respuestaPlana = '';
    this.errorValidacion = null;
    this.resultadoValidacion = null;
    this.showModalAsociacion = true;
  }
  guardarAsociacion() {
    if (!this.validarFormularioAsociacion()) return;
    const data = {
      usuario_id: this.asociacionFormData.usuario_id,
      pregunta_id: this.asociacionFormData.pregunta_id,
      respuesta: this.respuestaPlana
    };
    this.facade.crearAsociacion(data).subscribe({
      next: () => {
        this.notificationService.showSuccess('Asociación creada exitosamente');
        this.cerrarModalAsociacion();
        this.facade.cargarAsociaciones();
      },
      error: error => {
        this.notificationService.showError(error.message || 'Error al crear asociación');
      }
    });
  }
  validarFormularioAsociacion() {
    if (!this.asociacionFormData.usuario_id) {
      this.errorValidacion = 'Debe seleccionar un usuario';
      return false;
    }
    if (!this.asociacionFormData.pregunta_id) {
      this.errorValidacion = 'Debe seleccionar una pregunta';
      return false;
    }
    if (!this.respuestaPlana.trim()) {
      this.errorValidacion = 'Debe ingresar una respuesta';
      return false;
    }
    // Verificar si ya existe
    const existe = this.state.asociaciones().some(a => a.id_usuario === this.asociacionFormData.usuario_id && a.id_pregunta === this.asociacionFormData.pregunta_id);
    if (existe) {
      this.errorValidacion = 'Este usuario ya tiene asociada esta pregunta';
      return false;
    }
    this.errorValidacion = null;
    return true;
  }
  cerrarModalAsociacion() {
    this.showModalAsociacion = false;
    this.asociacionFormData = {
      usuario_id: 0,
      pregunta_id: 0,
      respuesta: ''
    };
    this.respuestaPlana = '';
    this.errorValidacion = null;
    this.resultadoValidacion = null;
  }
  // ========== Métodos de Validación ==========
  abrirModalValidarRespuesta(asociacion) {
    this.asociacionValidacion = asociacion;
    this.respuestaValidacion = '';
    this.resultadoValidacion = null;
    this.showModalValidacion = true;
  }
  cerrarModalValidacion() {
    this.showModalValidacion = false;
    this.asociacionValidacion = null;
    this.respuestaValidacion = '';
    this.resultadoValidacion = null;
  }
  // ========== Métodos de Filtros ==========
  aplicarFiltrosAsociaciones() {
    const filtros = {
      id_usuario: this.filtrosAsociaciones.id_usuario ? Number(this.filtrosAsociaciones.id_usuario) : null,
      id_pregunta: this.filtrosAsociaciones.id_pregunta ? Number(this.filtrosAsociaciones.id_pregunta) : null
    };
    console.log('🔍 Aplicando filtros:', filtros);
    this.state.setFiltrosAsociaciones(filtros);
    this.state.setPaginaActualAsociaciones(1);
  }
  limpiarFiltrosAsociaciones() {
    this.filtrosAsociaciones = {
      id_usuario: null,
      id_pregunta: null
    };
    this.state.setFiltrosAsociaciones(this.filtrosAsociaciones);
    this.state.setPaginaActualAsociaciones(1);
  }
  // ========== Métodos de Paginación ==========
  cambiarPaginaPreguntas(pagina) {
    this.state.setPaginaActualPreguntas(pagina);
  }
  cambiarPaginaNumeroPreguntas(pagina) {
    if (typeof pagina === 'number') {
      this.state.setPaginaActualPreguntas(pagina);
    }
  }
  cambiarPaginaAsociaciones(pagina) {
    this.state.setPaginaActualAsociaciones(pagina);
  }
  cambiarPaginaNumeroAsociaciones(pagina) {
    if (typeof pagina === 'number') {
      this.state.setPaginaActualAsociaciones(pagina);
    }
  }
  getPaginationArrayPreguntas() {
    return _utils_pagination_util__WEBPACK_IMPORTED_MODULE_16__.PaginationUtil.getPaginationArray(this.totalPaginasPreguntas(), this.state.paginaActualPreguntas());
  }
  getPaginationArrayAsociaciones() {
    return _utils_pagination_util__WEBPACK_IMPORTED_MODULE_16__.PaginationUtil.getPaginationArray(this.totalPaginasAsociaciones(), this.state.paginaActualAsociaciones());
  }
  // ========== Métodos de Reportes ==========
  generarReporteGeneral() {
    this.showModalReportes = true;
    this.reporteSeleccionado = null;
  }
  generarReportePreguntas() {
    this.reporteSeleccionado = this.facade.generarReportePreguntas(this.state.preguntas(), this.totalPreguntas(), this.preguntasActivas());
  }
  generarReporteAsociaciones() {
    this.reporteSeleccionado = this.facade.generarReporteAsociaciones(this.state.asociaciones(), this.totalAsociaciones());
  }
  exportarReportePDF() {
    if (this.reporteSeleccionado) {
      this.facade.exportarReportePDF(this.reporteSeleccionado);
    }
  }
  exportarReporteExcel() {
    if (this.reporteSeleccionado) {
      this.facade.exportarReporteExcel(this.reporteSeleccionado);
    }
  }
  cerrarModalReportes() {
    this.showModalReportes = false;
    this.reporteSeleccionado = null;
  }
  // ========== Métodos de Eliminación ==========
  abrirModalEliminarPregunta(pregunta) {
    this.tipoEliminacion = 'pregunta';
    this.elementoAEliminar = pregunta;
    this.showModalConfirmacion = true;
  }
  abrirModalEliminarAsociacion(asociacion) {
    this.tipoEliminacion = 'asociacion';
    this.elementoAEliminar = asociacion;
    this.showModalConfirmacion = true;
  }
  confirmarEliminacion() {
    if (this.tipoEliminacion === 'pregunta' && this.elementoAEliminar) {
      this.facade.eliminarPregunta(this.elementoAEliminar.pregunta_id).subscribe({
        next: () => {
          this.notificationService.showSuccess('Pregunta eliminada exitosamente');
          this.cerrarModalConfirmacion();
        },
        error: error => {
          this.notificationService.showError(error.message || 'Error al eliminar pregunta');
        }
      });
    } else if (this.tipoEliminacion === 'asociacion' && this.elementoAEliminar) {
      this.facade.eliminarAsociacion(this.elementoAEliminar.id_usuario, this.elementoAEliminar.id_pregunta).subscribe({
        next: () => {
          this.notificationService.showSuccess('Asociación eliminada exitosamente');
          this.cerrarModalConfirmacion();
        },
        error: error => {
          this.notificationService.showError(error.message || 'Error al eliminar asociación');
        }
      });
    }
  }
  cerrarModalConfirmacion() {
    this.showModalConfirmacion = false;
    this.elementoAEliminar = null;
  }
  // ========== Métodos Auxiliares ==========
  contarUsuariosPorPregunta(idPregunta) {
    return this.state.asociaciones().filter(a => a.id_pregunta === idPregunta).length;
  }
  toggleMostrarRespuesta() {
    this.mostrarRespuesta = !this.mostrarRespuesta;
  }
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', event => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        this.onOpenSearchModal();
      }
      if (event.key === 'Escape') {
        if (this.isSearchOpen) this.closeSearchModal();
        if (this.showModalPregunta) this.cerrarModalPregunta();
        if (this.showModalAsociacion) this.cerrarModalAsociacion();
        if (this.showModalValidacion) this.cerrarModalValidacion();
        if (this.showModalReportes) this.cerrarModalReportes();
        if (this.showModalConfirmacion) this.cerrarModalConfirmacion();
      }
      if (event.ctrlKey && event.key === 'n') {
        event.preventDefault();
        this.abrirModalCrearPregunta();
      }
    });
  }
  // ========== MÉTODOS DE VALIDACIÓN MASIVA ==========
  procesarValidacion() {
    if (!this.respuestaValidacion.trim() || !this.asociacionValidacion) return;
    this.facade.validarRespuestaIndividual(this.asociacionValidacion.id_usuario, this.asociacionValidacion.id_pregunta, this.respuestaValidacion).subscribe({
      next: resultado => {
        this.resultadoValidacion = resultado.valido || false;
        if (resultado.valido) {
          // ✅ Recargar asociaciones para actualizar el estado
          this.facade.cargarAsociaciones();
          this.notificationService.showSuccess('Respuesta validada correctamente');
          setTimeout(() => this.cerrarModalValidacion(), 1500);
        } else {
          this.notificationService.showWarning(resultado.message || 'Respuesta incorrecta');
        }
      },
      error: error => {
        this.notificationService.showError(error.error?.message || 'Error al validar respuesta');
      }
    });
  }
  // Validación masiva
  iniciarValidacionMasiva() {
    // Obtener solo las asociaciones no validadas
    const pendientes = this.state.asociaciones().filter(a => !a.validada);
    console.log('🔍 Pendientes de validar:', pendientes);
    if (pendientes.length === 0) {
      this.notificationService.showInfo('No hay respuestas pendientes de validar');
      return;
    }
    // Mostrar las preguntas pendientes en el modal
    this.resultadosValidacionMasiva = pendientes.map(asociacion => ({
      usuario: asociacion.usuario_nombre,
      pregunta: asociacion.pregunta_texto,
      id_usuario: asociacion.id_usuario,
      id_pregunta: asociacion.id_pregunta,
      valido: null,
      mensaje: 'Pendiente de validación masiva'
    }));
    console.log('📋 Resultados iniciales:', this.resultadosValidacionMasiva);
    this.showModalValidacionMasiva = true;
    this.validandoMasivamente = false;
    this.progresoValidacion = 0;
    this.actualValidacion = 0;
    this.totalValidar = pendientes.length;
  }
  iniciarValidacionMasivaProceso() {
    const pendientes = this.resultadosValidacionMasiva.filter(r => r.valido === null);
    if (pendientes.length === 0) {
      this.notificationService.showInfo('No hay respuestas pendientes de validar');
      return;
    }
    this.validandoMasivamente = true;
    this.progresoValidacion = 0;
    this.actualValidacion = 0;
    this.totalValidar = pendientes.length;
    // Preparar datos para el backend
    const data = pendientes.map(p => ({
      usuario_id: p.id_usuario,
      pregunta_id: p.id_pregunta
    }));
    console.log('📤 Enviando validación masiva:', data);
    // Llamar al endpoint de validación masiva
    this.facade.validarMasiva(data).subscribe({
      next: response => {
        console.log('✅ Respuesta validación masiva:', response);
        // ✅ CORREGIDO: Verificar estructura de respuesta
        if (response && response.success) {
          // Marcar todas las pendientes como válidas
          this.resultadosValidacionMasiva = this.resultadosValidacionMasiva.map(r => {
            if (r.valido === null) {
              return {
                ...r,
                valido: true,
                mensaje: 'Validado masivamente'
              };
            }
            return r;
          });
          // Actualizar estado local
          pendientes.forEach(p => {
            this.state.updateAsociacionValidacion(p.id_usuario, p.id_pregunta, true);
          });
          this.progresoValidacion = 100;
          this.validandoMasivamente = false;
          this.notificationService.showSuccess(`Validación masiva completada: ${pendientes.length} respuestas validadas`);
          // Recargar asociaciones para actualizar la tabla
          setTimeout(() => {
            this.facade.cargarAsociaciones();
          }, 500);
        } else {
          this.validandoMasivamente = false;
          this.notificationService.showError(response?.message || 'Error en validación masiva');
        }
      },
      error: error => {
        console.error('❌ Error validación masiva:', error);
        this.validandoMasivamente = false;
        this.notificationService.showError(error.error?.message || 'Error en validación masiva');
      }
    });
  }
  cerrarModalValidacionMasiva() {
    this.showModalValidacionMasiva = false;
    this.validandoMasivamente = false;
    this.resultadosValidacionMasiva = [];
  }
  exportarReporteValidacion() {
    console.log('Exportando reporte de validación');
    // Implementar exportación
  }
  // ========== MÉTODOS DEL HEADER ==========
  toggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
    if (this.isNotificationsOpen) {
      this.isUserMenuOpen = false;
    }
  }
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    if (this.isUserMenuOpen) {
      this.isNotificationsOpen = false;
    }
  }
  markAllAsRead() {
    this.notifications.forEach(notification => notification.read = true);
  }
  // ========== MÉTODOS DE EXPORTACIÓN ==========
  exportarPreguntasPDF() {
    const reporte = this.reporteService.generarReportePreguntas(this.state.preguntas(), this.totalPreguntas(), this.preguntasActivas());
    this.reporteService.exportarPDF(reporte);
  }
  exportarPreguntasExcel() {
    const reporte = this.reporteService.generarReportePreguntas(this.state.preguntas(), this.totalPreguntas(), this.preguntasActivas());
    this.reporteService.exportarExcel(reporte);
  }
  // ========== GETTERS PARA SIGNALS EN EL TEMPLATE ==========
  get totalValidadas() {
    return this.resultadosValidacionMasiva.length;
  }
  get respuestasValidas() {
    return this.resultadosValidacionMasiva.filter(r => r.valido === true).length;
  }
  get respuestasInvalidas() {
    return this.resultadosValidacionMasiva.filter(r => r.valido === false).length;
  }
  get respuestasPendientes() {
    return this.resultadosValidacionMasiva.filter(r => r.valido === null).length;
  }
  get hayPendientes() {
    return this.respuestasPendientes > 0;
  }
  get preguntasActivasValue() {
    return this.state.preguntasActivas();
  }
  get totalAsociacionesValue() {
    return this.state.totalAsociaciones();
  }
  get usuariosConPreguntasValue() {
    return new Set(this.state.asociaciones().map(a => a.id_usuario)).size;
  }
  get totalPaginasPreguntasValue() {
    return Math.ceil(this.state.totalPreguntas() / 5);
  }
  get totalPaginasAsociacionesValue() {
    return Math.ceil(this.state.asociacionesFiltradas().length / 5);
  }
  get paginaActualPreguntasValue() {
    return this.state.paginaActualPreguntas();
  }
  get paginaActualAsociacionesValue() {
    return this.state.paginaActualAsociaciones();
  }
  get asociacionesPaginadasValue() {
    const start = (this.state.paginaActualAsociaciones() - 1) * 5;
    const end = start + 5;
    return this.state.asociacionesFiltradas().slice(start, end);
  }
  get preguntasActivasListValue() {
    return this.state.preguntas().filter(p => p.activo);
  }
  get preguntasDisponiblesValue() {
    if (!this.asociacionFormData.usuario_id) {
      return this.preguntasActivasListValue;
    }
    const preguntasUsuario = this.state.asociaciones().filter(a => a.id_usuario === this.asociacionFormData.usuario_id).map(a => a.id_pregunta);
    return this.preguntasActivasListValue.filter(p => !preguntasUsuario.includes(p.pregunta_id));
  }
  get totalPreguntasValue() {
    const value = this.state.totalPreguntas();
    console.log('🔢 totalPreguntasValue:', value);
    return value;
  }
  get usuariosValue() {
    const users = this.state.usuarios();
    console.log('👥 usuariosValue:', users.length, users);
    return users;
  }
  get preguntasPaginadasValue() {
    const start = (this.state.paginaActualPreguntas() - 1) * 5;
    const end = start + 5;
    const result = this.state.preguntas().slice(start, end);
    console.log('📋 preguntasPaginadasValue:', result.length, result.slice(0, 2));
    return result;
  }
  static ɵfac = function AccesosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AccesosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_22__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_23__.LoadingService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: AccesosComponent,
    selectors: [["app-accesos"]],
    decls: 142,
    vars: 35,
    consts: [[1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "markAllAsRead", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], [1, "accesos-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-secondary", 3, "click"], [1, "stats-container"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "section-container"], [1, "section-header"], [1, "section-actions"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], [1, "table-responsive"], [1, "data-table"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "btn", "btn-small", "btn-primary", 3, "click"], [1, "filtros-container"], [1, "filtros-header"], [1, "btn-link", 3, "click"], [1, "filtros-grid"], [1, "filtro-item"], ["for", "filtro-usuario"], ["id", "filtro-usuario", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "filtro-pregunta"], ["id", "filtro-pregunta", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-search", 3, "click"], ["class", "modal-overlay", 4, "ngIf"], [3, "isSidebarCollapsed"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar preguntas o usuarios...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "codigo-cell"], [1, "codigo-icon"], [1, "pregunta-texto"], [1, "estado-badge"], [1, "usuarios-count"], [1, "actions-cell"], [1, "actions-buttons"], ["title", "Editar Pregunta", 1, "btn-action", "edit", 3, "click"], ["title", "Eliminar Pregunta", 1, "btn-action", "delete", 3, "click"], ["title", "Asociar Usuario", 1, "btn-action", "associate", 3, "click"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "pagination-page", 3, "click", "disabled"], [1, "empty-state"], [1, "empty-icon"], [1, "usuario-cell"], [1, "respuesta-encrypted"], [1, "estado-respuesta-badge"], ["title", "Editar Respuesta de Usuario", 1, "btn-action", "edit", 3, "click"], ["title", "Validar Respuesta", 1, "btn-action", "validate", 3, "click"], ["title", "Eliminar Asociaci\u00F3n", 1, "btn-action", "delete", 3, "click"], [1, "modal-overlay"], [1, "modal-container"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [3, "ngSubmit"], [1, "form-group"], ["name", "texto", "required", "", "rows", "4", "maxlength", "255", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "activo", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], ["name", "usuario_id", "required", "", 3, "ngModelChange", "ngModel"], ["name", "pregunta_id", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "respuesta", "required", "", 3, "ngModelChange", "ngModel"], [1, "modal-container", "modal-large"], ["class", "validacion-progress", 4, "ngIf"], [1, "validacion-results"], ["class", "resultado-item", 3, "valid", "invalid", "pending", 4, "ngFor", "ngForOf"], ["class", "validacion-summary", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "btn", "btn-cancel", 3, "click"], [1, "validacion-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "resultado-item"], [1, "resultado-icon"], [1, "resultado-info"], [1, "resultado-usuario"], [1, "resultado-mensaje"], [1, "validacion-summary"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value"], [1, "summary-value", "valid"], [1, "summary-value", "invalid"], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner"], ["required", "", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], [1, "respuesta-actual"], [1, "respuesta-texto"], ["type", "button", 1, "btn-action", "view", 3, "click"], ["type", "text", "placeholder", "Ingrese la nueva respuesta", "autocomplete", "off", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-help"], ["type", "text", "name", "respuesta", "required", "", 3, "ngModelChange", "ngModel"], [1, "confirm-modal"], [1, "confirm-header"], [1, "confirm-body"], ["class", "confirm-warning", 4, "ngIf"], [1, "confirm-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "confirm-warning"]],
    template: function AccesosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("toggleSidebar", function AccesosComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function AccesosComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "main", 2)(3, "app-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("toggleNotifications", function AccesosComponent_Template_app_header_toggleNotifications_3_listener() {
          return ctx.toggleNotifications();
        })("toggleUserMenu", function AccesosComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.toggleUserMenu();
        })("markAllAsRead", function AccesosComponent_Template_app_header_markAllAsRead_3_listener() {
          return ctx.markAllAsRead();
        })("openSearchModal", function AccesosComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, AccesosComponent_div_4_Template, 13, 6, "div", 4)(5, AccesosComponent_div_5_Template, 5, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "\uD83D\uDD10 Gesti\u00F3n de Accesos");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Administre preguntas de seguridad y respuestas de usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 11)(14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_Template_button_click_14_listener() {
          return ctx.abrirModalCrearPregunta();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "\u2795");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, " Nueva Pregunta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_Template_button_click_18_listener() {
          return ctx.generarReporteGeneral();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, " Reporte General ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_Template_button_click_22_listener() {
          return ctx.iniciarValidacionMasiva();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, " Validar Respuestas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 15)(27, "div", 16)(28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31, "Preguntas Totales");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "div", 16)(33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](36, "Preguntas Activas");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "div", 16)(38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](41, "Asociaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "div", 16)(43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](46, "Usuarios Protegidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](47, "div", 19)(48, "div", 20)(49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](50, "\u2753 Preguntas de Seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "div", 21)(52, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_Template_button_click_52_listener() {
          return ctx.exportarPreguntasPDF();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](53, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](54, "\uD83D\uDCC4");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](55, " PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](56, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_Template_button_click_56_listener() {
          return ctx.exportarPreguntasExcel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](58, "\uD83D\uDCE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](59, " Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](60, "div", 23)(61, "table", 24)(62, "thead")(63, "tr")(64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](65, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](67, "Pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](69, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](71, "Usuarios Asociados");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](73, "Fecha Creaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](74, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](75, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](76, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](77, AccesosComponent_tr_77_Template, 28, 10, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](78, AccesosComponent_div_78_Template, 7, 3, "div", 27)(79, AccesosComponent_div_79_Template, 11, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](80, "div", 19)(81, "div", 20)(82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](83, "\uD83D\uDC65 Asociaciones Usuario-Pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](84, "div", 21)(85, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_Template_button_click_85_listener() {
          return ctx.abrirModalAsociarUsuario();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](86, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](87, "\uD83D\uDD17");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](88, " Nueva Asociaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](89, "div", 30)(90, "div", 31)(91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](92, "\uD83D\uDD0D Filtros de B\u00FAsqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](93, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_Template_button_click_93_listener() {
          return ctx.limpiarFiltrosAsociaciones();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](94, "Limpiar filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](95, "div", 33)(96, "div", 34)(97, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](98, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](99, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_Template_select_ngModelChange_99_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx.filtrosAsociaciones.id_usuario, $event) || (ctx.filtrosAsociaciones.id_usuario = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](100, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](101, "Todos los usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](102, AccesosComponent_option_102_Template, 2, 4, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](103, "div", 34)(104, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](105, "Pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](106, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function AccesosComponent_Template_select_ngModelChange_106_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx.filtrosAsociaciones.id_pregunta, $event) || (ctx.filtrosAsociaciones.id_pregunta = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](107, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](108, "Todas las preguntas");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](109, AccesosComponent_option_109_Template, 2, 2, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](110, "div", 34)(111, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function AccesosComponent_Template_button_click_111_listener() {
          return ctx.aplicarFiltrosAsociaciones();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](112, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](113, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](114, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](115, "div", 23)(116, "table", 24)(117, "thead")(118, "tr")(119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](120, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](122, "Pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](124, "Respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](126, "Estado Respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](128, "Fecha Asociaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](129, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](130, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](131, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](132, AccesosComponent_tr_132_Template, 29, 10, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](133, AccesosComponent_div_133_Template, 7, 3, "div", 27)(134, AccesosComponent_div_134_Template, 11, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](135, AccesosComponent_div_135_Template, 22, 6, "div", 42)(136, AccesosComponent_div_136_Template, 32, 9, "div", 42)(137, AccesosComponent_div_137_Template, 17, 7, "div", 42)(138, AccesosComponent_div_138_Template, 15, 5, "div", 42)(139, AccesosComponent_div_139_Template, 22, 4, "div", 42)(140, AccesosComponent_div_140_Template, 16, 5, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](141, "app-footer", 43);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.totalPreguntasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.preguntasActivasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.totalAsociacionesValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.usuariosConPreguntasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.preguntasPaginadasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.totalPaginasPreguntasValue > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.totalPreguntasValue === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx.filtrosAsociaciones.id_usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.usuariosValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx.filtrosAsociaciones.id_pregunta);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.preguntasActivasListValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.asociacionesPaginadasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.totalPaginasAsociacionesValue > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.totalAsociacionesValue === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showModalPregunta);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showModalAsociacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showModalValidacionMasiva);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showModalEditarRespuesta);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showModalValidacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showModalConfirmacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_17__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_20__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    styles: ["@keyframes pulse-encryption {\n  0%,\n  100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);\n  }\n  50% {\n    transform: scale(1.05);\n    box-shadow: 0 0 0 10px rgba(139, 92, 246, 0);\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n.accesos-container {\n  min-height: 100vh;\n  width: 100%;\n  animation: fadeInUp 0.6s ease-out;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n  animation: slideInRight 0.5s ease-out;\n}\n.header .header-content .page-title {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header .header-content .page-subtitle {\n  font-size: 16px;\n  color: var(--text-muted);\n  margin: 0;\n  animation: fadeInUp 0.8s ease-out;\n}\n.header .header-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.section-container {\n  background: var(--bg-primary);\n  border-radius: 12px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  animation: fadeInUp 0.6s ease-out;\n  transition: all 0.3s;\n}\n.section-container:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.section-container .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--primary-light);\n}\n.section-container .section-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-container .section-header .section-actions {\n  display: flex;\n  gap: 8px;\n}\n.stats-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-container .stat-card {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  border: 1px solid var(--card-border);\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  position: relative;\n  overflow: hidden;\n}\n.stats-container .stat-card:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--card-hover-shadow);\n}\n.stats-container .stat-card::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--gradient-primary);\n  opacity: 0.7;\n  animation: shimmer 2s infinite linear;\n  background-size: 1000px 100%;\n}\n.stats-container .stat-card .stat-value {\n  font-size: 36px;\n  font-weight: 800;\n  color: var(--primary);\n  margin-bottom: 8px;\n  line-height: 1;\n  transition: all 0.3s ease;\n}\n.stats-container .stat-card .stat-label {\n  font-size: 14px;\n  color: var(--text-muted);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filtros-container {\n  background: var(--bg-primary);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  animation: fadeInUp 0.7s ease-out;\n}\n.filtros-container .filtros-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.filtros-container .filtros-header h4 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filtros-container .filtros-header .btn-link {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n  transition: all 0.3s;\n}\n.filtros-container .filtros-header .btn-link:hover {\n  color: var(--primary-hover);\n  transform: translateX(4px);\n}\n.filtros-container .filtros-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .filtros-container .filtros-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .filtros-container .filtros-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.filtros-container .filtros-grid .filtro-item label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.filtros-container .filtros-grid .filtro-item input,\n.filtros-container .filtros-grid .filtro-item select {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.filtros-container .filtros-grid .filtro-item input:focus,\n.filtros-container .filtros-grid .filtro-item select:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n  transform: translateY(-1px);\n}\n.table-responsive {\n  overflow-x: auto;\n  max-height: 600px;\n  overflow-y: auto;\n}\n.table-responsive::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-responsive::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n}\n.table-responsive::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.table-responsive::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1000px;\n  animation: fadeInUp 0.8s ease-out;\n}\n.data-table thead {\n  background: var(--bg-tertiary);\n  border-bottom: 2px solid var(--border-color);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.data-table thead th {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n.data-table thead th::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: var(--gradient-primary);\n  transform: translateX(-100%);\n  transition: transform 0.3s ease;\n}\n.data-table thead th:hover::after {\n  transform: translateX(0);\n}\n.data-table tbody tr {\n  border-bottom: 1px solid var(--border-light);\n  transition: all 0.3s;\n  animation: slideInRight 0.5s ease-out;\n  animation-fill-mode: both;\n}\n.data-table tbody tr:nth-child(even) {\n  animation-delay: 0.05s;\n}\n.data-table tbody tr:nth-child(odd) {\n  animation-delay: 0.1s;\n}\n.data-table tbody tr:hover {\n  background: var(--bg-hover);\n  transform: translateX(4px);\n}\n.data-table tbody tr td {\n  padding: 16px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.data-table tbody tr td .codigo-cell {\n  font-weight: 600;\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.data-table tbody tr td .codigo-cell .codigo-icon {\n  font-size: 16px;\n  opacity: 0.7;\n  animation: pulse-encryption 2s infinite;\n}\n.data-table tbody tr td .pregunta-texto {\n  max-width: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.data-table tbody tr td .usuario-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.data-table tbody tr td .usuario-cell strong {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.data-table tbody tr td .usuario-cell small {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.data-table tbody tr .actions-cell .actions-buttons {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.data-table tbody tr .actions-cell .actions-buttons .btn-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 16px;\n  opacity: 0.7;\n  transform: translateY(10px);\n}\n.data-table tbody tr .actions-cell .actions-buttons .btn-action:hover {\n  transform: scale(1.2);\n  opacity: 1;\n}\n.data-table tbody tr .actions-cell .actions-buttons .btn-action.view {\n  background: var(--info-light);\n  color: var(--info);\n}\n.data-table tbody tr .actions-cell .actions-buttons .btn-action.edit {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.data-table tbody tr .actions-cell .actions-buttons .btn-action.delete {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.data-table tbody tr .actions-cell .actions-buttons .btn-action.associate {\n  background: var(--security-light);\n  color: var(--security);\n}\n.data-table tbody tr .actions-cell .actions-buttons .btn-action.validate {\n  background: var(--success-light);\n  color: var(--success);\n}\n.data-table tbody tr .actions-cell .actions-buttons .btn-action.report {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-badge,\n.estado-respuesta-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  gap: 4px;\n  transition: all 0.3s ease;\n}\n.estado-badge.badge-success,\n.estado-respuesta-badge.badge-success {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-badge.badge-danger,\n.estado-respuesta-badge.badge-danger {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.estado-badge.badge-warning,\n.estado-respuesta-badge.badge-warning {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.respuesta-encrypted {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  background: var(--gradient-primary);\n  color: white;\n  animation: pulse-encryption 2s infinite;\n}\n.usuarios-count {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: 600;\n  animation: pulse-encryption 2s infinite;\n}\n.respuesta-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.respuesta-container .form-input {\n  padding-right: 48px;\n  width: 100%;\n}\n.respuesta-container .btn-toggle-password {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.respuesta-container .btn-toggle-password:hover {\n  background: var(--bg-hover);\n  color: var(--primary);\n  transform: rotate(15deg) scale(1.1);\n}\n.encryption-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: var(--primary-light);\n  border-radius: 8px;\n  border-left: 4px solid var(--security);\n  margin-top: 16px;\n  animation: fadeInUp 0.6s ease-out;\n}\n.encryption-info .encryption-icon {\n  font-size: 24px;\n  animation: spin 3s linear infinite;\n}\n.encryption-info .encryption-text {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.validacion-info {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 24px;\n  animation: fadeInUp 0.6s ease-out;\n}\n.validacion-info .validacion-usuario,\n.validacion-info .validacion-pregunta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s ease;\n}\n.validacion-info .validacion-usuario:hover,\n.validacion-info .validacion-pregunta:hover {\n  transform: translateX(4px);\n  box-shadow: var(--shadow-sm);\n}\n.validacion-info .validacion-usuario .validacion-icon,\n.validacion-info .validacion-pregunta .validacion-icon {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.validacion-info .validacion-usuario .validacion-details,\n.validacion-info .validacion-pregunta .validacion-details {\n  flex: 1;\n}\n.validacion-info .validacion-usuario .validacion-details strong,\n.validacion-info .validacion-pregunta .validacion-details strong {\n  font-weight: 600;\n  color: var(--text-primary);\n  display: block;\n  margin-bottom: 4px;\n}\n.validacion-info .validacion-usuario .validacion-details small,\n.validacion-info .validacion-pregunta .validacion-details small,\n.validacion-info .validacion-usuario .validacion-details p,\n.validacion-info .validacion-pregunta .validacion-details p {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.validacion-result {\n  margin: 20px 0;\n  animation: fadeInUp 0.6s ease-out;\n}\n.validacion-result .resultado-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 12px;\n  border-left: 6px solid transparent;\n  background: var(--bg-tertiary);\n  transition: all 0.4s;\n}\n.validacion-result .resultado-item.valid {\n  border-left-color: var(--success);\n  background: var(--success-light);\n  animation: pulse-encryption 2s infinite;\n}\n.validacion-result .resultado-item.invalid {\n  border-left-color: var(--danger);\n  background: var(--danger-light);\n}\n.validacion-result .resultado-item .resultado-icon {\n  font-size: 32px;\n  flex-shrink: 0;\n}\n.validacion-result .resultado-item .resultado-mensagem {\n  flex: 1;\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2000;\n}\n.modal-container {\n  background: var(--modal-bg);\n  border-radius: 16px;\n  width: 90%;\n  max-width: 550px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-xl);\n  animation: fadeInUp 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n.modal-container.modal-large {\n  max-width: 800px;\n}\n.modal-container .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.modal-container .modal-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.modal-container .modal-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: var(--text-muted);\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.modal-container .modal-header .modal-close:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.modal-container .modal-content {\n  padding: 24px;\n}\n.modal-container .modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.confirm-modal {\n  background: var(--modal-bg);\n  border-radius: 16px;\n  width: 90%;\n  max-width: 450px;\n  box-shadow: var(--shadow-xl);\n  border: 1px solid var(--modal-border);\n}\n.confirm-modal .confirm-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.confirm-modal .confirm-header h3 {\n  margin: 0;\n  color: var(--danger);\n}\n.confirm-modal .confirm-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: var(--text-muted);\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.confirm-modal .confirm-header .modal-close:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.confirm-modal .confirm-body {\n  padding: 24px;\n  text-align: center;\n}\n.confirm-modal .confirm-body .confirm-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.confirm-modal .confirm-body p {\n  margin: 8px 0;\n  color: var(--text-primary);\n}\n.confirm-modal .confirm-body .confirm-warning {\n  color: var(--warning);\n  font-size: 13px;\n  margin-top: 12px;\n}\n.confirm-modal .confirm-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.form-group label .required {\n  color: var(--danger);\n}\n.form-group .form-textarea,\n.form-group .form-input,\n.form-group .form-select,\n.form-group .respuesta-actual {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  font-size: 14px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  transition: all 0.2s;\n}\n.form-group .form-textarea:focus,\n.form-group .form-input:focus,\n.form-group .form-select:focus,\n.form-group .respuesta-actual:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group .form-textarea .btn-action,\n.form-group .form-input .btn-action,\n.form-group .form-select .btn-action,\n.form-group .respuesta-actual .btn-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-size: 16px;\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  position: relative;\n  left: 395px;\n}\n.form-group .form-textarea .btn-action:hover,\n.form-group .form-input .btn-action:hover,\n.form-group .form-select .btn-action:hover,\n.form-group .respuesta-actual .btn-action:hover {\n  transform: translateY(-3px) scale(1.05);\n}\n.form-group .form-textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.form-group .form-select {\n  cursor: pointer;\n  appearance: none;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  background-size: 16px;\n}\n.form-group .form-check {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.form-group .form-check .form-check-input {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--primary);\n}\n.form-group .form-check .form-check-label {\n  margin: 0;\n  cursor: pointer;\n  color: var(--text-primary);\n}\n.form-group .form-help {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.pagination {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  margin-top: 20px;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n}\n.pagination .pagination-btn {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.pagination .pagination-btn:hover:not(:disabled) {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination .pagination-pages {\n  display: flex;\n  gap: 4px;\n}\n.pagination .pagination-pages .pagination-page {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--text-primary);\n}\n.pagination .pagination-pages .pagination-page:hover:not(.active) {\n  background: var(--bg-hover);\n}\n.pagination .pagination-pages .pagination-page.active {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.4s;\n  white-space: nowrap;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn .btn-icon {\n  font-size: 16px;\n  transition: transform 0.3s ease;\n}\n.btn:hover:not(:disabled) .btn-icon {\n  transform: scale(1.2);\n}\n.btn-primary {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-secondary {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n}\n.btn-cancel {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-cancel:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-danger {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-small {\n  padding: 6px 12px;\n  font-size: 12px;\n  border-radius: 6px;\n}\n.btn-search {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n  margin-top: 25px;\n}\n.btn-search:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n  animation: fadeInUp 0.8s ease-out;\n}\n.empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n  animation: pulse-encryption 3s infinite;\n}\n.empty-state h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.empty-state p {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n}\n.dashboard-container {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s;\n}\n.dashboard-container.sidebar-collapsed .main-content {\n  margin-left: 90px;\n}\n.main-content {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 280px;\n  transition: all 0.3s;\n  width: calc(100% - 280px);\n}\n.main-content::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.main-content::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.dashboard-container.sidebar-collapsed .main-content {\n  margin-left: 90px;\n  width: calc(100% - 90px);\n}\n.reportes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.reportes-grid .reporte-card {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n  animation: fadeInUp 0.5s ease-out;\n}\n.reportes-grid .reporte-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--card-hover-shadow);\n  border-color: var(--primary);\n}\n.reportes-grid .reporte-card .reporte-icon {\n  font-size: 32px;\n  margin-bottom: 12px;\n  animation: pulse-encryption 3s infinite;\n}\n.reportes-grid .reporte-card .reporte-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  font-size: 16px;\n}\n.reportes-grid .reporte-card .reporte-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.reporte-preview {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 24px;\n  animation: fadeInUp 0.6s ease-out;\n}\n.reporte-preview .reporte-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--border-color);\n}\n.reporte-preview .reporte-header h4 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.reporte-preview .reporte-header .reporte-fecha {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.reporte-preview .reporte-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n  justify-content: center;\n}\n.audit-info {\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n  border-left: 4px solid var(--info);\n}\n.audit-info .audit-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.audit-info .audit-item:last-child {\n  margin-bottom: 0;\n}\n.audit-info .audit-item .audit-label {\n  font-weight: 600;\n  color: var(--text-primary);\n  min-width: 120px;\n}\n.audit-info .audit-item .audit-value {\n  flex: 1;\n  color: var(--text-secondary);\n}\n.audit-info .audit-item .audit-date {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.validacion-results {\n  max-height: 400px;\n  overflow-y: auto;\n  margin: 20px 0;\n  padding-right: 8px;\n}\n.validacion-results .resultado-item {\n  padding: 16px;\n  margin-bottom: 12px;\n  border-radius: 8px;\n  animation: slideInRight 0.4s ease-out;\n  background: var(--bg-tertiary);\n}\n.validacion-results .resultado-item.valid {\n  border-left: 4px solid var(--success);\n  background: var(--success-light);\n}\n.validacion-results .resultado-item.invalid {\n  border-left: 4px solid var(--danger);\n  background: var(--danger-light);\n}\n.validacion-results .resultado-item .resultado-usuario {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.validacion-results .resultado-item .resultado-usuario strong {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.validacion-results .resultado-item .resultado-usuario small {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.validacion-results .resultado-item .resultado-mensaje {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.validacion-summary {\n  display: flex;\n  justify-content: space-around;\n  padding: 20px;\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  margin-top: 24px;\n}\n.validacion-summary .summary-item {\n  text-align: center;\n}\n.validacion-summary .summary-item .summary-label {\n  display: block;\n  font-size: 14px;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n}\n.validacion-summary .summary-item .summary-value {\n  font-size: 24px;\n  font-weight: 700;\n  display: block;\n}\n.validacion-summary .summary-item .summary-value.valid {\n  color: var(--success);\n}\n.validacion-summary .summary-item .summary-value.invalid {\n  color: var(--danger);\n}\n@media (max-width: 1024px) {\n  .accesos-container {\n    padding: 16px;\n  }\n  .header {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .filtros-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .section-header {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n  .modal-container,\n  .confirm-modal {\n    width: 95%;\n  }\n  .modal-footer {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .pagination {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .stats-container {\n    grid-template-columns: 1fr;\n  }\n  .filtros-grid {\n    grid-template-columns: 1fr;\n  }\n  .header-actions {\n    flex-direction: column;\n  }\n  .header-actions .btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .actions-buttons {\n    flex-wrap: wrap;\n  }\n  .reportes-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.text-center {\n  text-align: center;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--border-color);\n  border-top: 4px solid var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 20px auto;\n}\n.char-counter {\n  text-align: right;\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.validation-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--warning-light);\n  border-radius: 8px;\n  border-left: 4px solid var(--warning);\n}\n.validation-message .validation-icon {\n  font-size: 16px;\n}\n.validation-message .validation-text {\n  color: var(--warning);\n  font-size: 14px;\n  font-weight: 500;\n}\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode .floating-bubble {\n  pointer-events: auto;\n}\n.modal-content-sigpaz {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized {\n  display: none;\n}\n.modal-content-sigpaz:not(.minimized) {\n  animation: modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header-sigpaz .modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz .modal-title .icon {\n  font-size: 1.4rem;\n  animation: iconBounce 2s infinite;\n}\n.modal-header-sigpaz .modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-icon {\n  transition: transform 0.3s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-icon {\n  transform: scale(1.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-tooltip {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 10002;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-tooltip {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.minimize-btn.animating {\n  animation: minimizeAnimation 0.5s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: shake 0.5s ease;\n}\n.modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n}\n.modal-body app-help-support {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing {\n  animation: bubblePulse 2s infinite;\n}\n.floating-bubble .bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble .bubble-icon {\n  font-size: 1.5rem;\n  animation: spinSlow 3s linear infinite;\n}\n.floating-bubble .bubble-text {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.floating-bubble .bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.floating-bubble .bubble-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble .bubble-close .close-icon {\n  display: block;\n  line-height: 1;\n}\n.floating-bubble .bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4f46e5;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: notificationSlide 0.5s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n@keyframes bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz {\n    padding: 12px 20px;\n  }\n  .modal-btn {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text {\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvYWNjZXNvcy9hY2Nlc28uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRTs7SUFDRSxtQkFBQTtJQUNBLDJDQUFBO0VBUkY7RUFVQTtJQUNFLHNCQUFBO0lBQ0EsNENBQUE7RUFSRjtBQUNGO0FBV0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQVRGO0VBV0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFURjtBQUNGO0FBWUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQVZGO0VBWUE7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFWRjtBQUNGO0FBYUE7RUFDRTtJQUFPLHVCQUFBO0VBVlA7RUFXQTtJQUFLLHlCQUFBO0VBUkw7QUFDRjtBQVVBO0VBQ0U7SUFBSyw4QkFBQTtFQVBMO0VBUUE7SUFBTyw2QkFBQTtFQUxQO0FBQ0Y7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBUkY7QUFjQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBWkY7QUFDQTtFQWVNLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBYk47QUFSQTtFQXlCTSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7QUFkTjtBQWRBO0VBaUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQWhCSjtBQXVCQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QUFyQkY7QUF1QkU7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBckJKO0FBU0E7RUFnQkksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7QUF0Qko7QUFDQTtFQXdCTSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBdEJOO0FBUkE7RUFrQ00sYUFBQTtFQUNBLFFBQUE7QUF2Qk47QUErQkE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUE3QkY7QUF5QkE7RUFPSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE3Qko7QUErQkk7RUFDRSwyQkFBQTtFQUNBLG9DQUFBO0FBN0JOO0FBZ0NJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7QUE5Qk47QUFEQTtFQW1DTSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBL0JOO0FBVEE7RUE0Q00sZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBaENOO0FBd0NBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtBQXRDRjtBQStCQTtFQVVJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF0Q0o7QUF5QkE7RUFnQk0sZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXRDTjtBQWdCQTtFQTBCTSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQXZDTjtBQXlDTTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7QUF2Q1I7QUFHQTtFQTBDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBMUNKO0FBNENJO0VBQUE7SUFDRSxxQ0FBQTtFQXpDSjtBQUNGO0FBMkNJO0VBQUE7SUFDRSwwQkFBQTtFQXhDSjtBQUNGO0FBWkE7RUF3RFEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUF6Q1I7QUFuQkE7O0VBZ0VRLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBekNSO0FBMkNROztFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7QUF4Q1Y7QUFrREE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFoREY7QUFrREU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQWhESjtBQW1ERTtFQUNFLDhCQUFBO0FBakRKO0FBb0RFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQWxESjtBQW9ESTtFQUNFLGdDQUFBO0FBbEROO0FBdURBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQXJERjtBQWlEQTtFQU9JLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBckRKO0FBMENBO0VBY00sYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFyRE47QUF1RE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBckRSO0FBd0RNO0VBQ0Usd0JBQUE7QUF0RFI7QUFrQkE7RUEyQ00sNENBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUExRE47QUE0RE07RUFBb0Isc0JBQUE7QUF6RDFCO0FBMERNO0VBQW1CLHFCQUFBO0FBdkR6QjtBQXlETTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7QUF2RFI7QUFFQTtFQXlEUSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUF4RFI7QUFKQTtFQStEVSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXhEVjtBQVhBO0VBc0VZLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUF4RFo7QUFoQkE7RUE2RVUsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUExRFY7QUF0QkE7RUFvRlUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQTNEVjtBQTNCQTtFQXlGWSxnQkFBQTtFQUNBLDBCQUFBO0FBM0RaO0FBL0JBO0VBOEZZLGVBQUE7RUFDQSx3QkFBQTtBQTVEWjtBQW5DQTtFQXNHVSxhQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0FBaEVWO0FBeENBO0VBMkdZLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQWhFWjtBQWtFWTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQWhFZDtBQW1FWTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7QUFqRWQ7QUFvRVk7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FBbEVkO0FBcUVZO0VBQ0UsK0JBQUE7RUFDQSxvQkFBQTtBQW5FZDtBQXNFWTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7QUFwRWQ7QUF1RVk7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FBckVkO0FBd0VZO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBQXRFZDtBQWtGQTs7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QUEvRUY7QUFpRkU7O0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBQTlFSjtBQWlGRTs7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0FBOUVKO0FBaUZFOztFQUNFLGdDQUFBO0VBQ0EscUJBQUE7QUE5RUo7QUFrRkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQWhGRjtBQW1GQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtBQWpGRjtBQXVGQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBckZGO0FBa0ZBO0VBTUksbUJBQUE7RUFDQSxXQUFBO0FBckZKO0FBOEVBO0VBV0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBdEZKO0FBd0ZJO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0FBdEZOO0FBMkZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBekZGO0FBZ0ZBO0VBWUksZUFBQTtFQUNBLGtDQUFBO0FBekZKO0FBNEVBO0VBaUJJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBMUZKO0FBaUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUEvRkY7QUEwRkE7O0VBU0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQS9GSjtBQWlHSTs7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0FBOUZOO0FBMEVBOztFQXdCTSxlQUFBO0VBQ0EsY0FBQTtBQTlGTjtBQXFFQTs7RUE2Qk0sT0FBQTtBQTlGTjtBQWlFQTs7RUFnQ1EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTdGUjtBQTBEQTs7OztFQXVDUSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBM0ZSO0FBaUdBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0FBL0ZGO0FBNkZBO0VBS0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQS9GSjtBQWlHSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtBQS9GTjtBQWtHSTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUFoR047QUEwRUE7RUEwQk0sZUFBQTtFQUNBLGNBQUE7QUFqR047QUFzRUE7RUErQk0sT0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBbEdOO0FBMEdBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUF4R0Y7QUEyR0E7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtBQXpHRjtBQTJHRTtFQUNFLGdCQUFBO0FBekdKO0FBNkZBO0VBZ0JJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtDQUFBO0FBMUdKO0FBcUZBO0VBd0JNLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQTFHTjtBQStFQTtFQStCTSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUEzR047QUE2R007RUFDRSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUEzR1I7QUE0REE7RUFxREksYUFBQTtBQTlHSjtBQXlEQTtFQXlESSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7QUEvR0o7QUFzSEE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtBQXBIRjtBQThHQTtFQVNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtDQUFBO0FBcEhKO0FBc0dBO0VBaUJNLFNBQUE7RUFDQSxvQkFBQTtBQXBITjtBQWtHQTtFQXNCTSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBckhOO0FBdUhNO0VBQ0UsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FBckhSO0FBZ0ZBO0VBMkNJLGFBQUE7RUFDQSxrQkFBQTtBQXhISjtBQTRFQTtFQStDTSxlQUFBO0VBQ0EsbUJBQUE7QUF4SE47QUF3RUE7RUFvRE0sYUFBQTtFQUNBLDBCQUFBO0FBekhOO0FBb0VBO0VBeURNLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBMUhOO0FBK0RBO0VBZ0VJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7QUE1SEo7QUFtSUE7RUFDRSxtQkFBQTtBQWpJRjtBQWdJQTtFQUlJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFqSUo7QUEwSEE7RUFVTSxvQkFBQTtBQWpJTjtBQXVIQTs7OztFQWVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FBaElKO0FBa0lJOzs7O0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7QUE3SE47QUFrR0E7Ozs7RUErQlksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTNIWjtBQTZIWTs7OztFQUNFLHVDQUFBO0FBeEhkO0FBeUVBO0VBdURJLGdCQUFBO0VBQ0EsaUJBQUE7QUE3SEo7QUFxRUE7RUE0REksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMlJBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7QUE5SEo7QUE2REE7RUFxRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQS9ISjtBQXdEQTtFQTBFTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQS9ITjtBQWtEQTtFQWlGTSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBaElOO0FBNkNBO0VBd0ZJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFsSUo7QUF5SUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUF2SUY7QUFnSUE7RUFVSSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQXZJSjtBQXlJSTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQXZJTjtBQTBJSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXhJTjtBQTZHQTtFQWdDSSxhQUFBO0VBQ0EsUUFBQTtBQTFJSjtBQXlHQTtFQW9DTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUExSU47QUE0SU07RUFDRSwyQkFBQTtBQTFJUjtBQTZJTTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBM0lSO0FBb0pBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBbEpGO0FBb0pFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBbEpKO0FBbUlBO0VBbUJJLGVBQUE7RUFDQSwrQkFBQTtBQW5KSjtBQXNKRTtFQUNFLHFCQUFBO0FBcEpKO0FBd0pBO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUF0SkY7QUF3SkU7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBdEpKO0FBMEpBO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0FBeEpGO0FBMEpFO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUF4Sko7QUE0SkE7RUFDRSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7QUExSkY7QUE0SkU7RUFDRSwyQkFBQTtBQTFKSjtBQThKQTtFQUNFLGtDQUFBO0VBQ0EsWUFBQTtBQTVKRjtBQThKRTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUE1Sko7QUFnS0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTlKRjtBQWlLQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUEvSkY7QUFpS0U7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBL0pKO0FBc0tBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBcEtGO0FBaUtBO0VBTUksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBcEtKO0FBMkpBO0VBYUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQXJLSjtBQXFKQTtFQW9CSSx3QkFBQTtFQUNBLG1CQUFBO0FBdEtKO0FBNktBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUEzS0Y7QUE2S0U7RUFFSSxpQkFBQTtBQTVLTjtBQWlMQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBL0tGO0FBaUxFO0VBQ0UsVUFBQTtBQS9LSjtBQWtMRTtFQUNFLHVCQUFBO0FBaExKO0FBbUxFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQWpMSjtBQW1MSTtFQUNFLGdDQUFBO0FBakxOO0FBcUxFO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQW5MSjtBQTBMQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQXhMRjtBQW9MQTtFQU9JLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0FBeExKO0FBMExJO0VBQ0UsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0FBeExOO0FBcUtBO0VBdUJNLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FBekxOO0FBZ0tBO0VBNkJNLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUExTE47QUEwSkE7RUFvQ00sZUFBQTtFQUNBLHdCQUFBO0FBM0xOO0FBZ01BO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBOUxGO0FBeUxBO0VBUUksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7QUE5TEo7QUFpTEE7RUFnQk0sU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBOUxOO0FBMktBO0VBdUJNLGVBQUE7RUFDQSx3QkFBQTtBQS9MTjtBQXVLQTtFQTZCSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFqTUo7QUF3TUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUF0TUY7QUFpTUE7RUFRSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBdE1KO0FBd01JO0VBQ0UsZ0JBQUE7QUF0TU47QUF1TEE7RUFtQk0sZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBdk1OO0FBa0xBO0VBeUJNLE9BQUE7RUFDQSw0QkFBQTtBQXhNTjtBQThLQTtFQThCTSx3QkFBQTtFQUNBLGVBQUE7QUF6TU47QUFpTkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBL01GO0FBMk1BO0VBT0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0FBL01KO0FBaU5JO0VBQ0UscUNBQUE7RUFDQSxnQ0FBQTtBQS9NTjtBQWtOSTtFQUNFLG9DQUFBO0VBQ0EsK0JBQUE7QUFoTk47QUE0TEE7RUF3Qk0sYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBak5OO0FBc0xBO0VBOEJRLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBak5SO0FBaUxBO0VBb0NRLGVBQUE7RUFDQSx3QkFBQTtBQWxOUjtBQTZLQTtFQTBDTSxlQUFBO0VBQ0EsMEJBQUE7QUFwTk47QUF5TkE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBdk5GO0FBaU5BO0VBU0ksa0JBQUE7QUF2Tko7QUE4TUE7RUFZTSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUF2Tk47QUF3TUE7RUFtQk0sZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXhOTjtBQTBOTTtFQUNFLHFCQUFBO0FBeE5SO0FBMk5NO0VBQ0Usb0JBQUE7QUF6TlI7QUFrT0E7RUFDRTtJQUNFLGFBQUE7RUFoT0Y7RUFtT0E7SUFDRSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQWpPRjtFQW9PQTtJQUNFLHFDQUFBO0VBbE9GO0FBQ0Y7QUFxT0E7RUFDRTtJQUNFLHFDQUFBO0VBbk9GO0VBc09BO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0lBQ0Esb0JBQUE7RUFwT0Y7RUF1T0E7O0lBQ0UsVUFBQTtFQXBPRjtFQXVPQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQXJPRjtFQXdPQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQXRPRjtBQUNGO0FBeU9BO0VBQ0U7SUFDRSwwQkFBQTtFQXZPRjtFQTBPQTtJQUNFLDBCQUFBO0VBeE9GO0VBMk9BO0lBQ0Usc0JBQUE7RUF6T0Y7RUF3T0E7SUFJSSxXQUFBO0lBQ0EsdUJBQUE7RUF6T0o7RUE2T0E7SUFDRSxlQUFBO0VBM09GO0VBOE9BO0lBQ0UsMEJBQUE7RUE1T0Y7QUFDRjtBQWtQQTtFQUNFLGtCQUFBO0FBaFBGO0FBbVBBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBalBGO0FBb1BBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBbFBGO0FBcVBBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBblBGO0FBNE9BO0VBVUksZUFBQTtBQW5QSjtBQXlPQTtFQWNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBcFBKO0FBb1FBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBbFFGO0FBcVFFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBblFKO0FBcVFJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBblFOO0FBd1FFO0VBQ0Usb0JBQUE7QUF0UUo7QUF3UUk7RUFDRSxhQUFBO0FBdFFOO0FBa1FFO0VBU0ksb0JBQUE7QUF4UU47QUFnUkE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxzREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTlRRjtBQWdSRTtFQUNFLGFBQUE7QUE5UUo7QUFpUkU7RUFDRSw4REFBQTtBQS9RSjtBQXNSQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQXBSRjtBQTJRQTtFQVlJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBcFJKO0FBb1FBO0VBbUJNLGlCQUFBO0VBQ0EsaUNBQUE7QUFwUk47QUFnUUE7RUF5QkksYUFBQTtFQUNBLFNBQUE7QUF0Uko7QUE0UEE7RUE2Qk0sa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0FBdFJOO0FBd1JNO0VBQ0UscUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUNBQUE7QUF0UlI7QUF5Uk07RUFDRSxvQ0FBQTtBQXZSUjtBQWtPQTtFQXlEUSwrQkFBQTtBQXhSUjtBQTJSTTtFQUNFLHFCQUFBO0FBelJSO0FBNE5BO0VBaUVRLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUExUlI7QUE2Uk07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBM1JSO0FBOFJNO0VBQ0Usc0NBQUE7QUE1UlI7QUErUk07RUFDRSw2Q0FBQTtFQUNBLCtDQUFBO0FBN1JSO0FBK1JRO0VBQ0UsNkNBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FBN1JWO0FBdVNBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0FBclNGO0FBd1NBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQXRTRjtBQXlTRTtFQUNFLFdBQUE7QUF2U0o7QUEwU0U7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXhTSjtBQTJTRTtFQUNFLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBelNKO0FBMlNJO0VBQ0UscURBQUE7QUF6U047QUErUUE7RUFnQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBNVNKO0FBbVRBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSw4REFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQWpURjtBQW1URTtFQUNFLHVDQUFBO0VBQ0EsOENBQUE7QUFqVEo7QUFvVEU7RUFDRSxrQ0FBQTtBQWxUSjtBQXlSQTtFQTZCSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBblRKO0FBb1JBO0VBbUNJLGlCQUFBO0VBQ0Esc0NBQUE7QUFwVEo7QUFnUkE7RUF3Q0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7QUFyVEo7QUEwUUE7RUErQ0kscUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUF0VEo7QUF3VEk7RUFDRSxxQ0FBQTtFQUNBLG1DQUFBO0FBdFROO0FBd1BBO0VBa0VNLGNBQUE7RUFDQSxjQUFBO0FBdlROO0FBb1BBO0VBd0VJLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQXpUSjtBQWdVQTtFQUNFO0lBQU8sVUFBQTtFQTdUUDtFQThUQTtJQUFLLFVBQUE7RUEzVEw7QUFDRjtBQTZUQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRDQUFBO0VBM1RGO0VBNlRBO0lBQ0UsVUFBQTtJQUNBLHlDQUFBO0VBM1RGO0FBQ0Y7QUE4VEE7RUFDRTs7SUFBVyx3QkFBQTtFQTFUWDtFQTJUQTtJQUFNLDJCQUFBO0VBeFROO0FBQ0Y7QUEwVEE7RUFDRTtJQUFLLG1CQUFBO0VBdlRMO0VBd1RBO0lBQU0sb0NBQUE7RUFyVE47RUFzVEE7SUFBTyxtQkFBQTtFQW5UUDtBQUNGO0FBcVRBO0VBQ0U7O0lBQVcsd0JBQUE7RUFqVFg7RUFrVEE7SUFBTSwyQkFBQTtFQS9TTjtFQWdUQTtJQUFNLDBCQUFBO0VBN1NOO0FBQ0Y7QUErU0E7RUFDRTtJQUNFLHVEQUFBO0lBQ0EsVUFBQTtFQTdTRjtFQStTQTtJQUNFLHFEQUFBO0VBN1NGO0VBK1NBO0lBQ0UsMkNBQUE7SUFDQSxVQUFBO0VBN1NGO0FBQ0Y7QUFnVEE7RUFDRTs7SUFDRSw4Q0FBQTtFQTdTRjtFQStTQTtJQUNFLGlGQUFBO0VBN1NGO0FBQ0Y7QUFnVEE7RUFDRTtJQUFLLHVCQUFBO0VBN1NMO0VBOFNBO0lBQU8seUJBQUE7RUEzU1A7QUFDRjtBQTZTQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBM1NGO0VBNlNBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBM1NGO0FBQ0Y7QUFpVEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBL1NGO0VBa1RBO0lBQ0UsZ0JBQUE7RUFoVEY7QUFDRjtBQW1UQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VBalRGO0VBb1RBO0lBQ0Usa0JBQUE7RUFsVEY7RUFxVEE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQW5URjtFQXNUQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtFQXBURjtFQXVUQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFyVEY7QUFDRjtBQXdUQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQXRURjtFQXlUQTtJQUNFLGdCQUFBO0lBQ0EsT0FBQTtFQXZURjtFQTBUQTtJQUNFLDhCQUFBO0lBQ0EsZ0JBQUE7RUF4VEY7RUEyVEE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBelRGO0VBNFRBO0lBQ0UsZUFBQTtFQTFURjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFDQ0VTT1MgLSBFU1RJTE9TIENPTiBWQVJJQUJMRVMgR0xPQkFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE5vdGE6IFRvZGFzIGxhcyB2YXJpYWJsZXMgQ1NTIHZpZW5lbiBkZWZpbmlkYXMgZW4gdGhlbWVzLmxlc3Ncbi8vIFNlIGFjY2VkZW4gbWVkaWFudGUgdmFyKC0tbm9tYnJlLXZhcmlhYmxlKVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVMgUEVSU09OQUxJWkFEQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Aa2V5ZnJhbWVzIHB1bHNlLWVuY3J5cHRpb24ge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMTM5LCA5MiwgMjQ2LCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQGtleWZyYW1lcyBzaGltbWVyIHtcbiAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwMHB4IDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMDBweCAwOyB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5hY2Nlc29zLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjZzIGVhc2Utb3V0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBhbmltYXRpb246IHNsaWRlSW5SaWdodCAwLjVzIGVhc2Utb3V0O1xuXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAucGFnZS1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBhbmltYXRpb246IGZhZGVJblVwIDAuOHMgZWFzZS1vdXQ7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFQ0NJw4PCk04gQ09OVEFJTkVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNlY3Rpb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC42cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIH1cblxuICAuc2VjdGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVEFEw4PCjVNUSUNBU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIC5zdGF0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1ob3Zlci1zaGFkb3cpO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICBhbmltYXRpb246IHNoaW1tZXIgMnMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggMTAwJTtcbiAgICB9XG5cbiAgICAuc3RhdC12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cblxuICAgIC5zdGF0LWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRklMVFJPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5maWx0cm9zLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuN3MgZWFzZS1vdXQ7XG5cbiAgLmZpbHRyb3MtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC5idG4tbGluayB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpbHRyb3MtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDE2cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAuZmlsdHJvLWl0ZW0ge1xuICAgICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQsIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUQUJMQSBERSBEQVRPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgfVxuICB9XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1pbi13aWR0aDogMTAwMHB4O1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuOHMgZWFzZS1vdXQ7XG5cbiAgdGhlYWQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDtcblxuICAgIHRoIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRib2R5IHtcbiAgICB0ciB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgMC41cyBlYXNlLW91dDtcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG5cbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjA1czsgfVxuICAgICAgJjpudGgtY2hpbGQob2RkKSB7IGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICAgIH1cblxuICAgICAgdGQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgLmNvZGlnby1jZWxsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgICAuY29kaWdvLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZS1lbmNyeXB0aW9uIDJzIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcmVndW50YS10ZXh0byB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cblxuICAgICAgICAudXN1YXJpby1jZWxsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFjdGlvbnMtY2VsbCB7XG4gICAgICAgIC5hY3Rpb25zLWJ1dHRvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAuYnRuLWFjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudmlldyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW5mbyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZWRpdCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZGVsZXRlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYXNzb2NpYXRlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VjdXJpdHktbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VjdXJpdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnZhbGlkYXRlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5yZXBvcnQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQkFER0VTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmVzdGFkby1iYWRnZSwgLmVzdGFkby1yZXNwdWVzdGEtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBnYXA6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmLmJhZGdlLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgfVxuXG4gICYuYmFkZ2UtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICB9XG5cbiAgJi5iYWRnZS13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gIH1cbn1cblxuLnJlc3B1ZXN0YS1lbmNyeXB0ZWQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGFuaW1hdGlvbjogcHVsc2UtZW5jcnlwdGlvbiAycyBpbmZpbml0ZTtcbn1cblxuLnVzdWFyaW9zLWNvdW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYW5pbWF0aW9uOiBwdWxzZS1lbmNyeXB0aW9uIDJzIGluZmluaXRlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUFVFU1RBIENPTlRBSU5FUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5yZXNwdWVzdGEtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5mb3JtLWlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmJ0bi10b2dnbGUtcGFzc3dvcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZykgc2NhbGUoMS4xKTtcbiAgICB9XG4gIH1cbn1cblxuLmVuY3J5cHRpb24taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1zZWN1cml0eSk7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC42cyBlYXNlLW91dDtcblxuICAuZW5jcnlwdGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIC5lbmNyeXB0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQUxJREFDScODwpNOXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnZhbGlkYWNpb24taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjZzIGVhc2Utb3V0O1xuXG4gIC52YWxpZGFjaW9uLXVzdWFyaW8sXG4gIC52YWxpZGFjaW9uLXByZWd1bnRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICB9XG5cbiAgICAudmFsaWRhY2lvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cblxuICAgIC52YWxpZGFjaW9uLWRldGFpbHMge1xuICAgICAgZmxleDogMTtcblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIHNtYWxsLCBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnZhbGlkYWNpb24tcmVzdWx0IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC42cyBlYXNlLW91dDtcblxuICAucmVzdWx0YWRvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuXG4gICAgJi52YWxpZCB7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UtZW5jcnlwdGlvbiAycyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAmLmludmFsaWQge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgIH1cblxuICAgIC5yZXN1bHRhZG8taWNvbiB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG5cbiAgICAucmVzdWx0YWRvLW1lbnNhZ2VtIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtb3ZlcmxheSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMjAwMDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgJi5tb2RhbC1sYXJnZSB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWhlYWRlci1iZyk7XG5cbiAgICBoMiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgLm1vZGFsLWNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udGVudCB7XG4gICAgcGFkZGluZzogMjRweDtcbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBDT05GSVJNQUNJw4PCk05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uY29uZmlybS1tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcblxuICAuY29uZmlybS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWhlYWRlci1iZyk7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICB9XG5cbiAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29uZmlybS1ib2R5IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5jb25maXJtLWljb24ge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAuY29uZmlybS13YXJuaW5nIHtcbiAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLmNvbmZpcm0tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGT1JNVUxBUklPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAucmVxdWlyZWQge1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tdGV4dGFyZWEsIC5mb3JtLWlucHV0LCAuZm9ybS1zZWxlY3QsIC5yZXNwdWVzdGEtYWN0dWFsICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgfVxuXG4gICAgICAuYnRuLWFjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDM5NXB4O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9XG4gIH1cblxuICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIC5mb3JtLXNlbGVjdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNlJTNjcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM2UlM2MvcG9seWxpbmUlM2UlM2Mvc3ZnJTNlXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tY2hlY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGFjY2VudC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgLmZvcm0tY2hlY2stbGFiZWwge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0taGVscCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBR0lOQUNJw4PCk05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAucGFnaW5hdGlvbi1idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxuXG4gIC5wYWdpbmF0aW9uLXBhZ2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNHB4O1xuXG4gICAgLnBhZ2luYXRpb24tcGFnZSB7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgICAmOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9UT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gIC5idG4taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIH1cblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIC5idG4taWNvbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgfVxufVxuXG4uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWRhbmdlcik7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxufVxuXG4uYnRuLXNtYWxsIHtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uYnRuLXNlYXJjaCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVNUFRZIFNUQVRFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0OHB4IDI0cHg7XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC44cyBlYXNlLW91dDtcblxuICAuZW1wdHktaWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGFuaW1hdGlvbjogcHVsc2UtZW5jcnlwdGlvbiAzcyBpbmZpbml0ZTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gREFTSEJPQVJEIENPTlRBSU5FUiBZIE1BSU4gQ09OVEVOVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICYuc2lkZWJhci1jb2xsYXBzZWQge1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gICAgfVxuICB9XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAyNHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogNjZweDtcbiAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5kYXNoYm9hcmQtY29udGFpbmVyLnNpZGViYXItY29sbGFwc2VkICYge1xuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVQT1JURVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucmVwb3J0ZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgLnJlcG9ydGUtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGFuaW1hdGlvbjogZmFkZUluVXAgMC41cyBlYXNlLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1ob3Zlci1zaGFkb3cpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAucmVwb3J0ZS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICBhbmltYXRpb246IHB1bHNlLWVuY3J5cHRpb24gM3MgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgLnJlcG9ydGUtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5yZXBvcnRlLWRlc2Mge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIH1cbiAgfVxufVxuXG4ucmVwb3J0ZS1wcmV2aWV3IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQ7XG5cbiAgLnJlcG9ydGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgLnJlcG9ydGUtZmVjaGEge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIC5yZXBvcnRlLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFVRElUT1LDg8KNQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5hdWRpdC1pbmZvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW5mbyk7XG5cbiAgLmF1ZGl0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuYXVkaXQtbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICB9XG5cbiAgICAuYXVkaXQtdmFsdWUge1xuICAgICAgZmxleDogMTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgLmF1ZGl0LWRhdGUge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVkFMSURBQ0nDg8KTTiBNQVNJVkFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udmFsaWRhY2lvbi1yZXN1bHRzIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG5cbiAgLnJlc3VsdGFkby1pdGVtIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IDAuNHMgZWFzZS1vdXQ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuXG4gICAgJi52YWxpZCB7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgfVxuXG4gICAgJi5pbnZhbGlkIHtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgfVxuXG4gICAgLnJlc3VsdGFkby11c3VhcmlvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIHNtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlc3VsdGFkby1tZW5zYWplIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cbiAgfVxufVxuXG4udmFsaWRhY2lvbi1zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcblxuICAuc3VtbWFyeS1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuc3VtbWFyeS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuc3VtbWFyeS12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICYudmFsaWQge1xuICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICB9XG5cbiAgICAgICYuaW52YWxpZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFjY2Vzb3MtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZpbHRyb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAubW9kYWwtY29udGFpbmVyLCAuY29uZmlybS1tb2RhbCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLnBhZ2luYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc3RhdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5maWx0cm9zLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb25zLWJ1dHRvbnMge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5yZXBvcnRlcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVVRJTElEQURFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwaW5uZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5jaGFyLWNvdW50ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnZhbGlkYXRpb24tbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0td2FybmluZyk7XG5cbiAgLnZhbGlkYXRpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLnZhbGlkYXRpb24tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgU0lHUEFaIC0gRVNUSUxPUyDDg8KaTklDT1MgKENPTVBMRVRPKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gVmFyaWFibGVzIGludGVybmFzIChubyBpbnRlcmZpZXJlbiBjb24gZ2xvYmFsZXMpXG5Ac2lncGF6LXByaW1hcnk6ICM0ZjQ2ZTU7XG5Ac2lncGF6LXNlY29uZGFyeTogIzYzNjZmMTtcbkBzaWdwYXotYWNjZW50OiAjMDBmZjg4O1xuQHNpZ3Bhei1kYW5nZXI6ICNlZjQ0NDQ7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPVkVSTEFZIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1vdmVybGF5LXNpZ3BheiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDAwMDtcblxuICAvLyBTb2xvIG1vc3RyYXIgZm9uZG8gY3VhbmRvIGVsIG1vZGFsIGVzdMODwqEgYWJpZXJ0b1xuICAmOm5vdCgubWluaW1pemVkLW1vZGUpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VhbmRvIGVzdMODwqEgbWluaW1pemFkbzogc2luIGZvbmRvIG5pIGJsb3F1ZW9cbiAgJi5taW5pbWl6ZWQtbW9kZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAvLyBTb2xvIGxhIGJ1cmJ1amEgZXMgaW50ZXJhY3RpdmFcbiAgICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVORURPUiBQUklOQ0lQQUwgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTAwMDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgbWF4LXdpZHRoOiA5OHZ3O1xuICBtYXgtaGVpZ2h0OiA5OHZoO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcblxuICAmLm1pbmltaXplZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICY6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBhbmltYXRpb246IG1vZGFsU2xpZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotcHJpbWFyeSwgQHNpZ3Bhei1zZWNvbmRhcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbiAgLm1vZGFsLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGFuaW1hdGlvbjogaWNvbkJvdW5jZSAycyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLm1vZGFsLWJ0biB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDQycHg7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG4gICAgICB9XG5cbiAgICAgIC5idG4taWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgLmJ0bi1pY29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgfVxuXG4gICAgICAuYnRuLXRvb2x0aXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIHotaW5kZXg6IDEwMDAyO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIC5idG4tdG9vbHRpcCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICB9XG5cbiAgICAgICYubWluaW1pemUtYnRuLmFuaW1hdGluZyB7XG4gICAgICAgIGFuaW1hdGlvbjogbWluaW1pemVBbmltYXRpb24gMC41cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAmLmNsb3NlLW1vZGFsLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMikgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC41KSAhaW1wb3J0YW50O1xuICAgICAgICAgIGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDVUVSUE8gREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm94LXNoYWRvdzogMCAyNXB4IDcwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG5cbiAgLy8gU2Nyb2xsYmFyIHBlcnNvbmFsaXphZGFcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotc2Vjb25kYXJ5LCBAc2lncGF6LXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFzZWd1cmFyIHF1ZSBlbCBjb21wb25lbnRlIGludGVybm8gb2N1cGUgdG9kbyBlbCBhbmNob1xuICBhcHAtaGVscC1zdXBwb3J0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJVUkJVSkEgRkxPVEFOVEUgKE1JTklNSVpBRE8pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZsb2F0aW5nLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBidWJibGVBcHBlYXIgMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjcpO1xuICB9XG5cbiAgJi5wdWxzaW5nIHtcbiAgICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG5cbiAgLmJ1YmJsZS1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBhbmltYXRpb246IHNwaW5TbG93IDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAuYnViYmxlLWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMik7XG4gICAgfVxuXG4gICAgLmNsb3NlLWljb24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG4gIH1cblxuICAuYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIGNvbG9yOiBAc2lncGF6LXByaW1hcnk7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBhbmltYXRpb246IG5vdGlmaWNhdGlvblNsaWRlIDAuNXMgZWFzZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vZGFsU2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ4JSkgc2NhbGUoMC45NSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBpY29uQm91bmNlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgbWluaW1pemVBbmltYXRpb24ge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZSgtMTBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7IH1cbn1cblxuQGtleWZyYW1lcyBidWJibGVBcHBlYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KSBzY2FsZSgwLjMpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxLjEpIHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnViYmxlUHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC41KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuOCksIDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvblNsaWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxuXG4gIC5tb2RhbC1idG4ge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG5cbiAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('150ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 68983:
/*!***************************************************!*\
  !*** ./node_modules/crypto-js/pad-zeropadding.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * Zero padding strategy.
   */
  CryptoJS.pad.ZeroPadding = {
    pad: function (data, blockSize) {
      // Shortcut
      var blockSizeBytes = blockSize * 4;

      // Pad
      data.clamp();
      data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
    },
    unpad: function (data) {
      // Shortcut
      var dataWords = data.words;

      // Unpad
      var i = data.sigBytes - 1;
      for (var i = data.sigBytes - 1; i >= 0; i--) {
        if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff) {
          data.sigBytes = i + 1;
          break;
        }
      }
    }
  };
  return CryptoJS.pad.ZeroPadding;
});

/***/ }),

/***/ 71889:
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ofb.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * Output Feedback block mode.
   */
  CryptoJS.mode.OFB = function () {
    var OFB = CryptoJS.lib.BlockCipherMode.extend();
    var Encryptor = OFB.Encryptor = OFB.extend({
      processBlock: function (words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var keystream = this._keystream;

        // Generate keystream
        if (iv) {
          keystream = this._keystream = iv.slice(0);

          // Remove IV for subsequent blocks
          this._iv = undefined;
        }
        cipher.encryptBlock(keystream, 0);

        // Encrypt
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
    });
    OFB.Decryptor = Encryptor;
    return OFB;
  }();
  return CryptoJS.mode.OFB;
});

/***/ }),

/***/ 72021:
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Initialization and round constants tables
    var H = [];
    var K = [];

    // Compute constants
    (function () {
      function isPrime(n) {
        var sqrtN = Math.sqrt(n);
        for (var factor = 2; factor <= sqrtN; factor++) {
          if (!(n % factor)) {
            return false;
          }
        }
        return true;
      }
      function getFractionalBits(n) {
        return (n - (n | 0)) * 0x100000000 | 0;
      }
      var n = 2;
      var nPrime = 0;
      while (nPrime < 64) {
        if (isPrime(n)) {
          if (nPrime < 8) {
            H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
          }
          K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
          nPrime++;
        }
        n++;
      }
    })();

    // Reusable object
    var W = [];

    /**
     * SHA-256 hash algorithm.
     */
    var SHA256 = C_algo.SHA256 = Hasher.extend({
      _doReset: function () {
        this._hash = new WordArray.init(H.slice(0));
      },
      _doProcessBlock: function (M, offset) {
        // Shortcut
        var H = this._hash.words;

        // Working variables
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        var f = H[5];
        var g = H[6];
        var h = H[7];

        // Computation
        for (var i = 0; i < 64; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var gamma0x = W[i - 15];
            var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
            var gamma1x = W[i - 2];
            var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
            W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
          }
          var ch = e & f ^ ~e & g;
          var maj = a & b ^ a & c ^ b & c;
          var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
          var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
          var t1 = h + sigma1 + ch + K[i] + W[i];
          var t2 = sigma0 + maj;
          h = g;
          g = f;
          f = e;
          e = d + t1 | 0;
          d = c;
          c = b;
          b = a;
          a = t1 + t2 | 0;
        }

        // Intermediate hash value
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
        H[5] = H[5] + f | 0;
        H[6] = H[6] + g | 0;
        H[7] = H[7] + h | 0;
      },
      _doFinalize: function () {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Return final computed hash
        return this._hash;
      },
      clone: function () {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA256('message');
     *     var hash = CryptoJS.SHA256(wordArray);
     */
    C.SHA256 = Hasher._createHelper(SHA256);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA256(message, key);
     */
    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
  })(Math);
  return CryptoJS.SHA256;
});

/***/ }),

/***/ 73878:
/*!******************************************!*\
  !*** ./node_modules/crypto-js/rabbit.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./enc-base64 */ 50310), __webpack_require__(/*! ./md5 */ 53728), __webpack_require__(/*! ./evpkdf */ 5814), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;

    // Reusable objects
    var S = [];
    var C_ = [];
    var G = [];

    /**
     * Rabbit stream cipher algorithm
     */
    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
      _doReset: function () {
        // Shortcuts
        var K = this._key.words;
        var iv = this.cfg.iv;

        // Swap endian
        for (var i = 0; i < 4; i++) {
          K[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;
        }

        // Generate initial state values
        var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];

        // Generate initial counter values
        var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];

        // Carry bit
        this._b = 0;

        // Iterate the system four times
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }

        // Modify the counters
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        }

        // IV setup
        if (iv) {
          // Shortcuts
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];

          // Generate four subvectors
          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
          var i1 = i0 >>> 16 | i2 & 0xffff0000;
          var i3 = i2 << 16 | i0 & 0x0000ffff;

          // Modify counter values
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;

          // Iterate the system four times
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },
      _doProcessBlock: function (M, offset) {
        // Shortcut
        var X = this._X;

        // Iterate the system
        nextState.call(this);

        // Generate four keystream words
        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
        for (var i = 0; i < 4; i++) {
          // Swap endian
          S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;

          // Encrypt
          M[offset + i] ^= S[i];
        }
      },
      blockSize: 128 / 32,
      ivSize: 64 / 32
    });
    function nextState() {
      // Shortcuts
      var X = this._X;
      var C = this._C;

      // Save old counter values
      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      }

      // Calculate new counter values
      C[0] = C[0] + 0x4d34d34d + this._b | 0;
      C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
      C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
      C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
      C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
      C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
      C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
      C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;

      // Calculate the g-values
      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i];

        // Construct high and low argument for squaring
        var ga = gx & 0xffff;
        var gb = gx >>> 16;

        // Calculate high and low result of squaring
        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
        var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);

        // High XOR low
        G[i] = gh ^ gl;
      }

      // Calculate new state values
      X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
      X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
      X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
      X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
      X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
      X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
      X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
      X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
    }

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
     */
    C.Rabbit = StreamCipher._createHelper(Rabbit);
  })();
  return CryptoJS.Rabbit;
});

/***/ }),

/***/ 75720:
/*!*****************************************!*\
  !*** ./node_modules/crypto-js/index.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./x64-core */ 9396), __webpack_require__(/*! ./lib-typedarrays */ 83180), __webpack_require__(/*! ./enc-utf16 */ 30035), __webpack_require__(/*! ./enc-base64 */ 50310), __webpack_require__(/*! ./enc-base64url */ 85249), __webpack_require__(/*! ./md5 */ 53728), __webpack_require__(/*! ./sha1 */ 80867), __webpack_require__(/*! ./sha256 */ 72021), __webpack_require__(/*! ./sha224 */ 32400), __webpack_require__(/*! ./sha512 */ 35232), __webpack_require__(/*! ./sha384 */ 80369), __webpack_require__(/*! ./sha3 */ 40357), __webpack_require__(/*! ./ripemd160 */ 87396), __webpack_require__(/*! ./hmac */ 92541), __webpack_require__(/*! ./pbkdf2 */ 57191), __webpack_require__(/*! ./evpkdf */ 5814), __webpack_require__(/*! ./cipher-core */ 83161), __webpack_require__(/*! ./mode-cfb */ 25517), __webpack_require__(/*! ./mode-ctr */ 28335), __webpack_require__(/*! ./mode-ctr-gladman */ 30536), __webpack_require__(/*! ./mode-ofb */ 71889), __webpack_require__(/*! ./mode-ecb */ 21258), __webpack_require__(/*! ./pad-ansix923 */ 55445), __webpack_require__(/*! ./pad-iso10126 */ 77821), __webpack_require__(/*! ./pad-iso97971 */ 97726), __webpack_require__(/*! ./pad-zeropadding */ 68983), __webpack_require__(/*! ./pad-nopadding */ 57624), __webpack_require__(/*! ./format-hex */ 35901), __webpack_require__(/*! ./aes */ 59183), __webpack_require__(/*! ./tripledes */ 43504), __webpack_require__(/*! ./rc4 */ 55021), __webpack_require__(/*! ./rabbit */ 73878), __webpack_require__(/*! ./rabbit-legacy */ 97436), __webpack_require__(/*! ./blowfish */ 9148));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  return CryptoJS;
});

/***/ }),

/***/ 76692:
/*!**********************************************!*\
  !*** ./src/app/services/pregunta.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreguntaService: () => (/* binding */ PreguntaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);




class PreguntaService {
  http;
  baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/preguntas-seguridad`;
  constructor(http) {
    this.http = http;
  }
  listar(params) {
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (params?.page) httpParams = httpParams.set('page', params.page);
    if (params?.per_page) httpParams = httpParams.set('per_page', params.per_page);
    if (params?.activo !== undefined) httpParams = httpParams.set('activo', params.activo);
    if (params?.search) httpParams = httpParams.set('search', params.search);
    return this.http.get(this.baseUrl, {
      params: httpParams
    });
  }
  obtener(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  crear(data) {
    return this.http.post(this.baseUrl, data);
  }
  actualizar(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
  eliminar(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static ɵfac = function PreguntaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PreguntaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PreguntaService,
    factory: PreguntaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 77821:
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-iso10126.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * ISO 10126 padding strategy.
   */
  CryptoJS.pad.Iso10126 = {
    pad: function (data, blockSize) {
      // Shortcut
      var blockSizeBytes = blockSize * 4;

      // Count padding bytes
      var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

      // Pad
      data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
    },
    unpad: function (data) {
      // Get number of padding bytes from last byte
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

      // Remove padding
      data.sigBytes -= nPaddingBytes;
    }
  };
  return CryptoJS.pad.Iso10126;
});

/***/ }),

/***/ 80369:
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha384.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./x64-core */ 9396), __webpack_require__(/*! ./sha512 */ 35232));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;
    var SHA512 = C_algo.SHA512;

    /**
     * SHA-384 hash algorithm.
     */
    var SHA384 = C_algo.SHA384 = SHA512.extend({
      _doReset: function () {
        this._hash = new X64WordArray.init([new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507), new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939), new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511), new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);
      },
      _doFinalize: function () {
        var hash = SHA512._doFinalize.call(this);
        hash.sigBytes -= 16;
        return hash;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA384('message');
     *     var hash = CryptoJS.SHA384(wordArray);
     */
    C.SHA384 = SHA512._createHelper(SHA384);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA384(message, key);
     */
    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
  })();
  return CryptoJS.SHA384;
});

/***/ }),

/***/ 80867:
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha1.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Reusable object
    var W = [];

    /**
     * SHA-1 hash algorithm.
     */
    var SHA1 = C_algo.SHA1 = Hasher.extend({
      _doReset: function () {
        this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
      },
      _doProcessBlock: function (M, offset) {
        // Shortcut
        var H = this._hash.words;

        // Working variables
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];

        // Computation
        for (var i = 0; i < 80; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = n << 1 | n >>> 31;
          }
          var t = (a << 5 | a >>> 27) + e + W[i];
          if (i < 20) {
            t += (b & c | ~b & d) + 0x5a827999;
          } else if (i < 40) {
            t += (b ^ c ^ d) + 0x6ed9eba1;
          } else if (i < 60) {
            t += (b & c | b & d | c & d) - 0x70e44324;
          } else /* if (i < 80) */{
              t += (b ^ c ^ d) - 0x359d3e2a;
            }
          e = d;
          d = c;
          c = b << 30 | b >>> 2;
          b = a;
          a = t;
        }

        // Intermediate hash value
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
      },
      _doFinalize: function () {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Return final computed hash
        return this._hash;
      },
      clone: function () {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA1('message');
     *     var hash = CryptoJS.SHA1(wordArray);
     */
    C.SHA1 = Hasher._createHelper(SHA1);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA1(message, key);
     */
    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
  })();
  return CryptoJS.SHA1;
});

/***/ }),

/***/ 83161:
/*!***********************************************!*\
  !*** ./node_modules/crypto-js/cipher-core.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./evpkdf */ 5814));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * Cipher core components.
   */
  CryptoJS.lib.Cipher || function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var Base64 = C_enc.Base64;
    var C_algo = C.algo;
    var EvpKDF = C_algo.EvpKDF;

    /**
     * Abstract base cipher template.
     *
     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
     */
    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
      /**
       * Configuration options.
       *
       * @property {WordArray} iv The IV to use for this operation.
       */
      cfg: Base.extend(),
      /**
       * Creates this cipher in encryption mode.
       *
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {Cipher} A cipher instance.
       *
       * @static
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
       */
      createEncryptor: function (key, cfg) {
        return this.create(this._ENC_XFORM_MODE, key, cfg);
      },
      /**
       * Creates this cipher in decryption mode.
       *
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {Cipher} A cipher instance.
       *
       * @static
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
       */
      createDecryptor: function (key, cfg) {
        return this.create(this._DEC_XFORM_MODE, key, cfg);
      },
      /**
       * Initializes a newly created cipher.
       *
       * @param {number} xformMode Either the encryption or decryption transormation mode constant.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
       */
      init: function (xformMode, key, cfg) {
        // Apply config defaults
        this.cfg = this.cfg.extend(cfg);

        // Store transform mode and key
        this._xformMode = xformMode;
        this._key = key;

        // Set initial values
        this.reset();
      },
      /**
       * Resets this cipher to its initial state.
       *
       * @example
       *
       *     cipher.reset();
       */
      reset: function () {
        // Reset data buffer
        BufferedBlockAlgorithm.reset.call(this);

        // Perform concrete-cipher logic
        this._doReset();
      },
      /**
       * Adds data to be encrypted or decrypted.
       *
       * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
       *
       * @return {WordArray} The data after processing.
       *
       * @example
       *
       *     var encrypted = cipher.process('data');
       *     var encrypted = cipher.process(wordArray);
       */
      process: function (dataUpdate) {
        // Append
        this._append(dataUpdate);

        // Process available blocks
        return this._process();
      },
      /**
       * Finalizes the encryption or decryption process.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
       *
       * @return {WordArray} The data after final processing.
       *
       * @example
       *
       *     var encrypted = cipher.finalize();
       *     var encrypted = cipher.finalize('data');
       *     var encrypted = cipher.finalize(wordArray);
       */
      finalize: function (dataUpdate) {
        // Final data update
        if (dataUpdate) {
          this._append(dataUpdate);
        }

        // Perform concrete-cipher logic
        var finalProcessedData = this._doFinalize();
        return finalProcessedData;
      },
      keySize: 128 / 32,
      ivSize: 128 / 32,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      /**
       * Creates shortcut functions to a cipher's object interface.
       *
       * @param {Cipher} cipher The cipher to create a helper for.
       *
       * @return {Object} An object with encrypt and decrypt shortcut functions.
       *
       * @static
       *
       * @example
       *
       *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
       */
      _createHelper: function () {
        function selectCipherStrategy(key) {
          if (typeof key == 'string') {
            return PasswordBasedCipher;
          } else {
            return SerializableCipher;
          }
        }
        return function (cipher) {
          return {
            encrypt: function (message, key, cfg) {
              return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
            },
            decrypt: function (ciphertext, key, cfg) {
              return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
            }
          };
        };
      }()
    });

    /**
     * Abstract base stream cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
     */
    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
      _doFinalize: function () {
        // Process partial blocks
        var finalProcessedBlocks = this._process(!!'flush');
        return finalProcessedBlocks;
      },
      blockSize: 1
    });

    /**
     * Mode namespace.
     */
    var C_mode = C.mode = {};

    /**
     * Abstract base block cipher mode template.
     */
    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
      /**
       * Creates this mode for encryption.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @static
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
       */
      createEncryptor: function (cipher, iv) {
        return this.Encryptor.create(cipher, iv);
      },
      /**
       * Creates this mode for decryption.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @static
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
       */
      createDecryptor: function (cipher, iv) {
        return this.Decryptor.create(cipher, iv);
      },
      /**
       * Initializes a newly created mode.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
       */
      init: function (cipher, iv) {
        this._cipher = cipher;
        this._iv = iv;
      }
    });

    /**
     * Cipher Block Chaining mode.
     */
    var CBC = C_mode.CBC = function () {
      /**
       * Abstract base CBC mode.
       */
      var CBC = BlockCipherMode.extend();

      /**
       * CBC encryptor.
       */
      CBC.Encryptor = CBC.extend({
        /**
         * Processes the data block at offset.
         *
         * @param {Array} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         *
         * @example
         *
         *     mode.processBlock(data.words, offset);
         */
        processBlock: function (words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;

          // XOR and encrypt
          xorBlock.call(this, words, offset, blockSize);
          cipher.encryptBlock(words, offset);

          // Remember this block to use with next block
          this._prevBlock = words.slice(offset, offset + blockSize);
        }
      });

      /**
       * CBC decryptor.
       */
      CBC.Decryptor = CBC.extend({
        /**
         * Processes the data block at offset.
         *
         * @param {Array} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         *
         * @example
         *
         *     mode.processBlock(data.words, offset);
         */
        processBlock: function (words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;

          // Remember this block to use with next block
          var thisBlock = words.slice(offset, offset + blockSize);

          // Decrypt and XOR
          cipher.decryptBlock(words, offset);
          xorBlock.call(this, words, offset, blockSize);

          // This block becomes the previous block
          this._prevBlock = thisBlock;
        }
      });
      function xorBlock(words, offset, blockSize) {
        var block;

        // Shortcut
        var iv = this._iv;

        // Choose mixing block
        if (iv) {
          block = iv;

          // Remove IV for subsequent blocks
          this._iv = undefined;
        } else {
          block = this._prevBlock;
        }

        // XOR blocks
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= block[i];
        }
      }
      return CBC;
    }();

    /**
     * Padding namespace.
     */
    var C_pad = C.pad = {};

    /**
     * PKCS #5/7 padding strategy.
     */
    var Pkcs7 = C_pad.Pkcs7 = {
      /**
       * Pads data using the algorithm defined in PKCS #5/7.
       *
       * @param {WordArray} data The data to pad.
       * @param {number} blockSize The multiple that the data should be padded to.
       *
       * @static
       *
       * @example
       *
       *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
       */
      pad: function (data, blockSize) {
        // Shortcut
        var blockSizeBytes = blockSize * 4;

        // Count padding bytes
        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

        // Create padding word
        var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;

        // Create padding
        var paddingWords = [];
        for (var i = 0; i < nPaddingBytes; i += 4) {
          paddingWords.push(paddingWord);
        }
        var padding = WordArray.create(paddingWords, nPaddingBytes);

        // Add padding
        data.concat(padding);
      },
      /**
       * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
       *
       * @param {WordArray} data The data to unpad.
       *
       * @static
       *
       * @example
       *
       *     CryptoJS.pad.Pkcs7.unpad(wordArray);
       */
      unpad: function (data) {
        // Get number of padding bytes from last byte
        var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

        // Remove padding
        data.sigBytes -= nPaddingBytes;
      }
    };

    /**
     * Abstract base block cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
     */
    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
      /**
       * Configuration options.
       *
       * @property {Mode} mode The block mode to use. Default: CBC
       * @property {Padding} padding The padding strategy to use. Default: Pkcs7
       */
      cfg: Cipher.cfg.extend({
        mode: CBC,
        padding: Pkcs7
      }),
      reset: function () {
        var modeCreator;

        // Reset cipher
        Cipher.reset.call(this);

        // Shortcuts
        var cfg = this.cfg;
        var iv = cfg.iv;
        var mode = cfg.mode;

        // Reset block mode
        if (this._xformMode == this._ENC_XFORM_MODE) {
          modeCreator = mode.createEncryptor;
        } else /* if (this._xformMode == this._DEC_XFORM_MODE) */{
            modeCreator = mode.createDecryptor;
            // Keep at least one block in the buffer for unpadding
            this._minBufferSize = 1;
          }
        if (this._mode && this._mode.__creator == modeCreator) {
          this._mode.init(this, iv && iv.words);
        } else {
          this._mode = modeCreator.call(mode, this, iv && iv.words);
          this._mode.__creator = modeCreator;
        }
      },
      _doProcessBlock: function (words, offset) {
        this._mode.processBlock(words, offset);
      },
      _doFinalize: function () {
        var finalProcessedBlocks;

        // Shortcut
        var padding = this.cfg.padding;

        // Finalize
        if (this._xformMode == this._ENC_XFORM_MODE) {
          // Pad data
          padding.pad(this._data, this.blockSize);

          // Process final blocks
          finalProcessedBlocks = this._process(!!'flush');
        } else /* if (this._xformMode == this._DEC_XFORM_MODE) */{
            // Process final blocks
            finalProcessedBlocks = this._process(!!'flush');

            // Unpad data
            padding.unpad(finalProcessedBlocks);
          }
        return finalProcessedBlocks;
      },
      blockSize: 128 / 32
    });

    /**
     * A collection of cipher parameters.
     *
     * @property {WordArray} ciphertext The raw ciphertext.
     * @property {WordArray} key The key to this ciphertext.
     * @property {WordArray} iv The IV used in the ciphering operation.
     * @property {WordArray} salt The salt used with a key derivation function.
     * @property {Cipher} algorithm The cipher algorithm.
     * @property {Mode} mode The block mode used in the ciphering operation.
     * @property {Padding} padding The padding scheme used in the ciphering operation.
     * @property {number} blockSize The block size of the cipher.
     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
     */
    var CipherParams = C_lib.CipherParams = Base.extend({
      /**
       * Initializes a newly created cipher params object.
       *
       * @param {Object} cipherParams An object with any of the possible cipher parameters.
       *
       * @example
       *
       *     var cipherParams = CryptoJS.lib.CipherParams.create({
       *         ciphertext: ciphertextWordArray,
       *         key: keyWordArray,
       *         iv: ivWordArray,
       *         salt: saltWordArray,
       *         algorithm: CryptoJS.algo.AES,
       *         mode: CryptoJS.mode.CBC,
       *         padding: CryptoJS.pad.PKCS7,
       *         blockSize: 4,
       *         formatter: CryptoJS.format.OpenSSL
       *     });
       */
      init: function (cipherParams) {
        this.mixIn(cipherParams);
      },
      /**
       * Converts this cipher params object to a string.
       *
       * @param {Format} formatter (Optional) The formatting strategy to use.
       *
       * @return {string} The stringified cipher params.
       *
       * @throws Error If neither the formatter nor the default formatter is set.
       *
       * @example
       *
       *     var string = cipherParams + '';
       *     var string = cipherParams.toString();
       *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
       */
      toString: function (formatter) {
        return (formatter || this.formatter).stringify(this);
      }
    });

    /**
     * Format namespace.
     */
    var C_format = C.format = {};

    /**
     * OpenSSL formatting strategy.
     */
    var OpenSSLFormatter = C_format.OpenSSL = {
      /**
       * Converts a cipher params object to an OpenSSL-compatible string.
       *
       * @param {CipherParams} cipherParams The cipher params object.
       *
       * @return {string} The OpenSSL-compatible string.
       *
       * @static
       *
       * @example
       *
       *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
       */
      stringify: function (cipherParams) {
        var wordArray;

        // Shortcuts
        var ciphertext = cipherParams.ciphertext;
        var salt = cipherParams.salt;

        // Format
        if (salt) {
          wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
        } else {
          wordArray = ciphertext;
        }
        return wordArray.toString(Base64);
      },
      /**
       * Converts an OpenSSL-compatible string to a cipher params object.
       *
       * @param {string} openSSLStr The OpenSSL-compatible string.
       *
       * @return {CipherParams} The cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
       */
      parse: function (openSSLStr) {
        var salt;

        // Parse base64
        var ciphertext = Base64.parse(openSSLStr);

        // Shortcut
        var ciphertextWords = ciphertext.words;

        // Test for salt
        if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
          // Extract salt
          salt = WordArray.create(ciphertextWords.slice(2, 4));

          // Remove salt from ciphertext
          ciphertextWords.splice(0, 4);
          ciphertext.sigBytes -= 16;
        }
        return CipherParams.create({
          ciphertext: ciphertext,
          salt: salt
        });
      }
    };

    /**
     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
     */
    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
      /**
       * Configuration options.
       *
       * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
       */
      cfg: Base.extend({
        format: OpenSSLFormatter
      }),
      /**
       * Encrypts a message.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {WordArray|string} message The message to encrypt.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {CipherParams} A cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       */
      encrypt: function (cipher, message, key, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Encrypt
        var encryptor = cipher.createEncryptor(key, cfg);
        var ciphertext = encryptor.finalize(message);

        // Shortcut
        var cipherCfg = encryptor.cfg;

        // Create and return serializable cipher params
        return CipherParams.create({
          ciphertext: ciphertext,
          key: key,
          iv: cipherCfg.iv,
          algorithm: cipher,
          mode: cipherCfg.mode,
          padding: cipherCfg.padding,
          blockSize: cipher.blockSize,
          formatter: cfg.format
        });
      },
      /**
       * Decrypts serialized ciphertext.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {WordArray} The plaintext.
       *
       * @static
       *
       * @example
       *
       *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       */
      decrypt: function (cipher, ciphertext, key, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Convert string to CipherParams
        ciphertext = this._parse(ciphertext, cfg.format);

        // Decrypt
        var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
        return plaintext;
      },
      /**
       * Converts serialized ciphertext to CipherParams,
       * else assumed CipherParams already and returns ciphertext unchanged.
       *
       * @param {CipherParams|string} ciphertext The ciphertext.
       * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
       *
       * @return {CipherParams} The unserialized ciphertext.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
       */
      _parse: function (ciphertext, format) {
        if (typeof ciphertext == 'string') {
          return format.parse(ciphertext, this);
        } else {
          return ciphertext;
        }
      }
    });

    /**
     * Key derivation function namespace.
     */
    var C_kdf = C.kdf = {};

    /**
     * OpenSSL key derivation function.
     */
    var OpenSSLKdf = C_kdf.OpenSSL = {
      /**
       * Derives a key and IV from a password.
       *
       * @param {string} password The password to derive from.
       * @param {number} keySize The size in words of the key to generate.
       * @param {number} ivSize The size in words of the IV to generate.
       * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
       *
       * @return {CipherParams} A cipher params object with the key, IV, and salt.
       *
       * @static
       *
       * @example
       *
       *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
       *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
       */
      execute: function (password, keySize, ivSize, salt, hasher) {
        // Generate random salt
        if (!salt) {
          salt = WordArray.random(64 / 8);
        }

        // Derive key and IV
        if (!hasher) {
          var key = EvpKDF.create({
            keySize: keySize + ivSize
          }).compute(password, salt);
        } else {
          var key = EvpKDF.create({
            keySize: keySize + ivSize,
            hasher: hasher
          }).compute(password, salt);
        }

        // Separate key and IV
        var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
        key.sigBytes = keySize * 4;

        // Return params
        return CipherParams.create({
          key: key,
          iv: iv,
          salt: salt
        });
      }
    };

    /**
     * A serializable cipher wrapper that derives the key from a password,
     * and returns ciphertext as a serializable cipher params object.
     */
    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
      /**
       * Configuration options.
       *
       * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
       */
      cfg: SerializableCipher.cfg.extend({
        kdf: OpenSSLKdf
      }),
      /**
       * Encrypts a message using a password.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {WordArray|string} message The message to encrypt.
       * @param {string} password The password.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {CipherParams} A cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
       *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
       */
      encrypt: function (cipher, message, password, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Derive key and other params
        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);

        // Add IV to config
        cfg.iv = derivedParams.iv;

        // Encrypt
        var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

        // Mix in derived params
        ciphertext.mixIn(derivedParams);
        return ciphertext;
      },
      /**
       * Decrypts serialized ciphertext using a password.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
       * @param {string} password The password.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {WordArray} The plaintext.
       *
       * @static
       *
       * @example
       *
       *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
       *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
       */
      decrypt: function (cipher, ciphertext, password, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Convert string to CipherParams
        ciphertext = this._parse(ciphertext, cfg.format);

        // Derive key and other params
        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);

        // Add IV to config
        cfg.iv = derivedParams.iv;

        // Decrypt
        var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
        return plaintext;
      }
    });
  }();
});

/***/ }),

/***/ 83180:
/*!***************************************************!*\
  !*** ./node_modules/crypto-js/lib-typedarrays.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Check if typed arrays are supported
    if (typeof ArrayBuffer != 'function') {
      return;
    }

    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;

    // Reference original init
    var superInit = WordArray.init;

    // Augment WordArray.init to handle typed arrays
    var subInit = WordArray.init = function (typedArray) {
      // Convert buffers to uint8
      if (typedArray instanceof ArrayBuffer) {
        typedArray = new Uint8Array(typedArray);
      }

      // Convert other array views to uint8
      if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
        typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
      }

      // Handle Uint8Array
      if (typedArray instanceof Uint8Array) {
        // Shortcut
        var typedArrayByteLength = typedArray.byteLength;

        // Extract bytes
        var words = [];
        for (var i = 0; i < typedArrayByteLength; i++) {
          words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
        }

        // Initialize this word array
        superInit.call(this, words, typedArrayByteLength);
      } else {
        // Else call normal init
        superInit.apply(this, arguments);
      }
    };
    subInit.prototype = WordArray;
  })();
  return CryptoJS.lib.WordArray;
});

/***/ }),

/***/ 85249:
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/enc-base64url.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * Base64url encoding strategy.
     */
    var Base64url = C_enc.Base64url = {
      /**
       * Converts a word array to a Base64url string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @param {boolean} urlSafe Whether to use url safe
       *
       * @return {string} The Base64url string.
       *
       * @static
       *
       * @example
       *
       *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
       */
      stringify: function (wordArray, urlSafe) {
        if (urlSafe === undefined) {
          urlSafe = true;
        }
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = urlSafe ? this._safe_map : this._map;

        // Clamp excess bits
        wordArray.clamp();

        // Convert
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
          var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
          var triplet = byte1 << 16 | byte2 << 8 | byte3;
          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
          }
        }

        // Add padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }
        return base64Chars.join('');
      },
      /**
       * Converts a Base64url string to a word array.
       *
       * @param {string} base64Str The Base64url string.
       *
       * @param {boolean} urlSafe Whether to use url safe
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
       */
      parse: function (base64Str, urlSafe) {
        if (urlSafe === undefined) {
          urlSafe = true;
        }

        // Shortcuts
        var base64StrLength = base64Str.length;
        var map = urlSafe ? this._safe_map : this._map;
        var reverseMap = this._reverseMap;
        if (!reverseMap) {
          reverseMap = this._reverseMap = [];
          for (var j = 0; j < map.length; j++) {
            reverseMap[map.charCodeAt(j)] = j;
          }
        }

        // Ignore padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);
          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        }

        // Convert
        return parseLoop(base64Str, base64StrLength, reverseMap);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
    };
    function parseLoop(base64Str, base64StrLength, reverseMap) {
      var words = [];
      var nBytes = 0;
      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
          var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
          var bitsCombined = bits1 | bits2;
          words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }
      return WordArray.create(words, nBytes);
    }
  })();
  return CryptoJS.enc.Base64url;
});

/***/ }),

/***/ 87396:
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/ripemd160.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /** @preserve
  (c) 2012 by Cédric Mesnil. All rights reserved.
  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */

  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Constants table
    var _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
    var _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
    var _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
    var _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
    var _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
    var _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

    /**
     * RIPEMD160 hash algorithm.
     */
    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
      _doReset: function () {
        this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
      },
      _doProcessBlock: function (M, offset) {
        // Swap endian
        for (var i = 0; i < 16; i++) {
          // Shortcuts
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];

          // Swap
          M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
        }
        // Shortcut
        var H = this._hash.words;
        var hl = _hl.words;
        var hr = _hr.words;
        var zl = _zl.words;
        var zr = _zr.words;
        var sl = _sl.words;
        var sr = _sr.words;

        // Working variables
        var al, bl, cl, dl, el;
        var ar, br, cr, dr, er;
        ar = al = H[0];
        br = bl = H[1];
        cr = cl = H[2];
        dr = dl = H[3];
        er = el = H[4];
        // Computation
        var t;
        for (var i = 0; i < 80; i += 1) {
          t = al + M[offset + zl[i]] | 0;
          if (i < 16) {
            t += f1(bl, cl, dl) + hl[0];
          } else if (i < 32) {
            t += f2(bl, cl, dl) + hl[1];
          } else if (i < 48) {
            t += f3(bl, cl, dl) + hl[2];
          } else if (i < 64) {
            t += f4(bl, cl, dl) + hl[3];
          } else {
            // if (i<80) {
            t += f5(bl, cl, dl) + hl[4];
          }
          t = t | 0;
          t = rotl(t, sl[i]);
          t = t + el | 0;
          al = el;
          el = dl;
          dl = rotl(cl, 10);
          cl = bl;
          bl = t;
          t = ar + M[offset + zr[i]] | 0;
          if (i < 16) {
            t += f5(br, cr, dr) + hr[0];
          } else if (i < 32) {
            t += f4(br, cr, dr) + hr[1];
          } else if (i < 48) {
            t += f3(br, cr, dr) + hr[2];
          } else if (i < 64) {
            t += f2(br, cr, dr) + hr[3];
          } else {
            // if (i<80) {
            t += f1(br, cr, dr) + hr[4];
          }
          t = t | 0;
          t = rotl(t, sr[i]);
          t = t + er | 0;
          ar = er;
          er = dr;
          dr = rotl(cr, 10);
          cr = br;
          br = t;
        }
        // Intermediate hash value
        t = H[1] + cl + dr | 0;
        H[1] = H[2] + dl + er | 0;
        H[2] = H[3] + el + ar | 0;
        H[3] = H[4] + al + br | 0;
        H[4] = H[0] + bl + cr | 0;
        H[0] = t;
      },
      _doFinalize: function () {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;
        data.sigBytes = (dataWords.length + 1) * 4;

        // Hash final blocks
        this._process();

        // Shortcuts
        var hash = this._hash;
        var H = hash.words;

        // Swap endian
        for (var i = 0; i < 5; i++) {
          // Shortcut
          var H_i = H[i];

          // Swap
          H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
        }

        // Return final computed hash
        return hash;
      },
      clone: function () {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });
    function f1(x, y, z) {
      return x ^ y ^ z;
    }
    function f2(x, y, z) {
      return x & y | ~x & z;
    }
    function f3(x, y, z) {
      return (x | ~y) ^ z;
    }
    function f4(x, y, z) {
      return x & z | y & ~z;
    }
    function f5(x, y, z) {
      return x ^ (y | ~z);
    }
    function rotl(x, n) {
      return x << n | x >>> 32 - n;
    }

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.RIPEMD160('message');
     *     var hash = CryptoJS.RIPEMD160(wordArray);
     */
    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
     */
    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
  })(Math);
  return CryptoJS.RIPEMD160;
});

/***/ }),

/***/ 92541:
/*!****************************************!*\
  !*** ./node_modules/crypto-js/hmac.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;

    /**
     * HMAC algorithm.
     */
    var HMAC = C_algo.HMAC = Base.extend({
      /**
       * Initializes a newly created HMAC.
       *
       * @param {Hasher} hasher The hash algorithm to use.
       * @param {WordArray|string} key The secret key.
       *
       * @example
       *
       *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
       */
      init: function (hasher, key) {
        // Init hasher
        hasher = this._hasher = new hasher.init();

        // Convert string to WordArray, else assume WordArray already
        if (typeof key == 'string') {
          key = Utf8.parse(key);
        }

        // Shortcuts
        var hasherBlockSize = hasher.blockSize;
        var hasherBlockSizeBytes = hasherBlockSize * 4;

        // Allow arbitrary length keys
        if (key.sigBytes > hasherBlockSizeBytes) {
          key = hasher.finalize(key);
        }

        // Clamp excess bits
        key.clamp();

        // Clone key for inner and outer pads
        var oKey = this._oKey = key.clone();
        var iKey = this._iKey = key.clone();

        // Shortcuts
        var oKeyWords = oKey.words;
        var iKeyWords = iKey.words;

        // XOR keys with pad constants
        for (var i = 0; i < hasherBlockSize; i++) {
          oKeyWords[i] ^= 0x5c5c5c5c;
          iKeyWords[i] ^= 0x36363636;
        }
        oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

        // Set initial values
        this.reset();
      },
      /**
       * Resets this HMAC to its initial state.
       *
       * @example
       *
       *     hmacHasher.reset();
       */
      reset: function () {
        // Shortcut
        var hasher = this._hasher;

        // Reset
        hasher.reset();
        hasher.update(this._iKey);
      },
      /**
       * Updates this HMAC with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {HMAC} This HMAC instance.
       *
       * @example
       *
       *     hmacHasher.update('message');
       *     hmacHasher.update(wordArray);
       */
      update: function (messageUpdate) {
        this._hasher.update(messageUpdate);

        // Chainable
        return this;
      },
      /**
       * Finalizes the HMAC computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The HMAC.
       *
       * @example
       *
       *     var hmac = hmacHasher.finalize();
       *     var hmac = hmacHasher.finalize('message');
       *     var hmac = hmacHasher.finalize(wordArray);
       */
      finalize: function (messageUpdate) {
        // Shortcut
        var hasher = this._hasher;

        // Compute HMAC
        var innerHash = hasher.finalize(messageUpdate);
        hasher.reset();
        var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
        return hmac;
      }
    });
  })();
});

/***/ }),

/***/ 93954:
/*!************************************************!*\
  !*** ./src/app/services/validacion.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidacionService: () => (/* binding */ ValidacionService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 50698);



class ValidacionService {
  http;
  baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Validar una respuesta de seguridad específica
   * ENDPOINT REAL DEL BACKEND: POST /api/v1/usuarios-preguntas/validar
   */
  validarRespuestaIndividual(data) {
    return this.http.post(`${this.baseUrl}/usuarios-preguntas/validar`, data);
  }
  /**
   * Validar múltiples respuestas (flujo de login)
   * ENDPOINT REAL DEL BACKEND: POST /api/v1/auth/validar-preguntas
   */
  validarMultiplesRespuestas(data) {
    return this.http.post(`${this.baseUrl}/auth/validar-preguntas`, data);
  }
  static ɵfac = function ValidacionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ValidacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ValidacionService,
    factory: ValidacionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 97436:
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/rabbit-legacy.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./enc-base64 */ 50310), __webpack_require__(/*! ./md5 */ 53728), __webpack_require__(/*! ./evpkdf */ 5814), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;

    // Reusable objects
    var S = [];
    var C_ = [];
    var G = [];

    /**
     * Rabbit stream cipher algorithm.
     *
     * This is a legacy version that neglected to convert the key to little-endian.
     * This error doesn't affect the cipher's security,
     * but it does affect its compatibility with other implementations.
     */
    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
      _doReset: function () {
        // Shortcuts
        var K = this._key.words;
        var iv = this.cfg.iv;

        // Generate initial state values
        var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];

        // Generate initial counter values
        var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];

        // Carry bit
        this._b = 0;

        // Iterate the system four times
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }

        // Modify the counters
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        }

        // IV setup
        if (iv) {
          // Shortcuts
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];

          // Generate four subvectors
          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
          var i1 = i0 >>> 16 | i2 & 0xffff0000;
          var i3 = i2 << 16 | i0 & 0x0000ffff;

          // Modify counter values
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;

          // Iterate the system four times
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },
      _doProcessBlock: function (M, offset) {
        // Shortcut
        var X = this._X;

        // Iterate the system
        nextState.call(this);

        // Generate four keystream words
        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
        for (var i = 0; i < 4; i++) {
          // Swap endian
          S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;

          // Encrypt
          M[offset + i] ^= S[i];
        }
      },
      blockSize: 128 / 32,
      ivSize: 64 / 32
    });
    function nextState() {
      // Shortcuts
      var X = this._X;
      var C = this._C;

      // Save old counter values
      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      }

      // Calculate new counter values
      C[0] = C[0] + 0x4d34d34d + this._b | 0;
      C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
      C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
      C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
      C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
      C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
      C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
      C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;

      // Calculate the g-values
      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i];

        // Construct high and low argument for squaring
        var ga = gx & 0xffff;
        var gb = gx >>> 16;

        // Calculate high and low result of squaring
        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
        var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);

        // High XOR low
        G[i] = gh ^ gl;
      }

      // Calculate new state values
      X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
      X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
      X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
      X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
      X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
      X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
      X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
      X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
    }

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
     */
    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
  })();
  return CryptoJS.RabbitLegacy;
});

/***/ }),

/***/ 97726:
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-iso97971.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

;
(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 36609), __webpack_require__(/*! ./cipher-core */ 83161));
  } else // removed by dead control flow
{}
})(this, function (CryptoJS) {
  /**
   * ISO/IEC 9797-1 Padding Method 2.
   */
  CryptoJS.pad.Iso97971 = {
    pad: function (data, blockSize) {
      // Add 0x80 byte
      data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

      // Zero pad the rest
      CryptoJS.pad.ZeroPadding.pad(data, blockSize);
    },
    unpad: function (data) {
      // Remove zero padding
      CryptoJS.pad.ZeroPadding.unpad(data);

      // Remove one more byte -- the 0x80 byte
      data.sigBytes--;
    }
  };
  return CryptoJS.pad.Iso97971;
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_seguridad_pages_accesos_acceso_component_ts.js.map