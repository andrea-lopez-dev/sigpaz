"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"],{

/***/ 7174:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/help-support/help-support.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpSupportComponent: () => (/* binding */ HelpSupportComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _core_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/pipes/linkify.pipe */ 42012);
/* harmony import */ var _strategies_message_processor_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./strategies/message-processor.strategy */ 96867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _core_services_chatbot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/chatbot.service */ 72263);
/* harmony import */ var _core_services_chatbot_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/chatbot-session.service */ 20590);
/* harmony import */ var _core_services_chatbot_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/services/chatbot-storage.service */ 28571);
/* harmony import */ var _core_services_modal_communication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/services/modal-communication.service */ 44728);













const _c0 = ["chatContainer"];
const _c1 = ["chatScrollContainer"];
const _c2 = ["messageInput"];
function HelpSupportComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 108)(1, "div", 109)(2, "div", 110)(3, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\uD83D\uDC4B");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\u00A1Bienvenido al chat!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 112)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Soy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, ", tu asistente virtual. Estoy aqu\u00ED para ayudarte con:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ul", 113)(14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "\u2705 Problemas t\u00E9cnicos del sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "\u2705 Consultas sobre facturaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "\u2705 Configuraci\u00F3n de cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "\u2705 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "C\u00F3digo Maestro");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, " para soporte t\u00E9cnico");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\u2705 Soporte general 24/7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 114)(28, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "\uD83D\uDCA1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Usa las acciones r\u00E1pidas o escribe tu pregunta. Puedes solicitar el ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "C\u00F3digo Maestro");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, " en cualquier momento.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
}
function HelpSupportComponent_div_140_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 127)(1, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_div_140_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const msg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.rateResponse(msg_r3.id, "helpful"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\uD83D\uDC4D");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00DAtil");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_div_140_div_13_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const msg_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.rateResponse(msg_r3.id, "not-helpful"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\uD83D\uDC4E");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "No \u00FAtil");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function HelpSupportComponent_div_140_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 130)(1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Gracias por tu feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HelpSupportComponent_div_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 116)(1, "div", 117)(2, "div", 118)(3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 120)(6, "div", 121)(7, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "linkify");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, HelpSupportComponent_div_140_div_13_Template, 11, 0, "div", 125)(14, HelpSupportComponent_div_140_div_14_Template, 5, 0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("sigpaz-user-message", msg_r3.sender === "user")("sigpaz-robot-message", msg_r3.sender === "robot");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("sigpaz-user-avatar", msg_r3.sender === "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", msg_r3.sender === "user" ? "\uD83D\uDC64" : "\uD83E\uDD16", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](msg_r3.sender === "user" ? "T\u00FA" : "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.formatTime(msg_r3.timestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 12, ctx_r3.formatearTexto(msg_r3.text)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", msg_r3.sender === "robot" && !msg_r3.rated && msg_r3.id < 1000000000000);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", msg_r3.rated);
  }
}
function HelpSupportComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 133)(1, "div", 117)(2, "div", 118)(3, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 135)(6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "span")(8, "span")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "SIGPAZ est\u00E1 escribiendo...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
}
class HelpSupportComponent {
  chatbotService;
  sessionService;
  storageService;
  modalCommService;
  chatContainer;
  chatScrollContainer;
  messageInput;
  chatVisible = true;
  isTyping = false;
  isOnline = true;
  isSpeechActive = false;
  userInput = '';
  // Usando la NUEVA interfaz
  chatHistory = [];
  // Procesadores de mensajes
  messageProcessors = [];
  floatingTexts = ['¿Qué más puedo hacer por ti?', '¡Estoy aquí para ayudarte!', '¿En qué puedo asistirte hoy?'];
  currentFloatingText = '';
  textInterval;
  sesionId;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  constructor(chatbotService, sessionService, storageService, modalCommService) {
    this.chatbotService = chatbotService;
    this.sessionService = sessionService;
    this.storageService = storageService;
    this.modalCommService = modalCommService;
    this.sesionId = this.sessionService.obtenerSesionId();
    // Inicializar procesadores
    this.messageProcessors = [new _strategies_message_processor_strategy__WEBPACK_IMPORTED_MODULE_8__.UserMessageProcessor(), new _strategies_message_processor_strategy__WEBPACK_IMPORTED_MODULE_8__.AssistantMessageProcessor(), new _strategies_message_processor_strategy__WEBPACK_IMPORTED_MODULE_8__.SystemMessageProcessor()];
  }
  ngOnInit() {
    this.cargarHistorial();
    this.setupMessageDebouncer();
    this.setupConnectionCheck();
    this.suscribirEventosModal();
    this.iniciarTextosFlotantes();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.textInterval) {
      clearInterval(this.textInterval);
    }
    this.guardarMensajesLocalmente();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  iniciarTextosFlotantes() {
    let index = 0;
    this.currentFloatingText = this.floatingTexts[0];
    this.textInterval = setInterval(() => {
      index = (index + 1) % this.floatingTexts.length;
      this.currentFloatingText = this.floatingTexts[index];
    }, 4000);
  }
  suscribirEventosModal() {
    this.modalCommService.getModalState().subscribe(state => {
      if (state.type === 'chat') {
        this.chatVisible = state.isOpen;
      } else if (state.type === 'otp' && this.chatVisible) {
        this.chatVisible = false;
      }
    });
    this.modalCommService.getEvents().subscribe(event => {
      if (event === 'toggleChat') {
        this.toggleChat();
      }
    });
  }
  cargarHistorial() {
    const localMensajes = this.storageService.cargarMensajes(this.sesionId);
    if (localMensajes && localMensajes.length > 0) {
      this.chatHistory = localMensajes;
      setTimeout(() => this.scrollToBottom(), 100);
      return;
    }
    this.chatbotService.obtenerHistorial(this.sesionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: respuesta => {
        const mensajes = respuesta?.data || respuesta;
        if (mensajes && mensajes.length > 0) {
          // Convertir al formato MensajeChatVisual
          this.chatHistory = mensajes.map(msg => ({
            id: msg.id,
            sender: msg.remitente === 'usuario' ? 'user' : 'robot',
            text: msg.contenido,
            timestamp: new Date(msg.fechaCompleta || msg.fecha)
          }));
          setTimeout(() => this.scrollToBottom(), 100);
        } else {
          this.agregarMensajeBienvenida();
        }
      },
      error: () => this.agregarMensajeBienvenida()
    });
  }
  guardarMensajesLocalmente() {
    this.storageService.guardarMensajes(this.sesionId, this.chatHistory);
  }
  agregarMensajeBienvenida() {
    const mensajeBienvenida = {
      id: 0,
      sender: 'robot',
      text: '¡Hola! Soy SIGPAZ, tu asistente virtual. ¿En qué puedo ayudarte hoy? Puedes usar las acciones rápidas o escribir tu pregunta directamente.',
      timestamp: new Date()
    };
    this.chatHistory = [this.procesarConEstrategias(mensajeBienvenida)];
  }
  procesarConEstrategias(mensaje) {
    const procesador = this.messageProcessors.find(p => p.puedeProcesar(mensaje));
    return procesador ? procesador.procesarMensaje(mensaje) : mensaje;
  }
  setupMessageDebouncer() {
    this.messageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(mensaje => mensaje.trim().length > 0)).subscribe(mensaje => {
      this.procesarMensaje(mensaje);
    });
  }
  setupConnectionCheck() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(30000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(() => {
      this.isOnline = navigator.onLine;
    });
  }
  sendMessage() {
    if (!this.userInput.trim()) return;
    const mensaje = this.userInput;
    this.userInput = '';
    const mensajeUsuario = {
      id: Date.now(),
      sender: 'user',
      text: mensaje,
      timestamp: new Date()
    };
    const mensajeProcesado = this.procesarConEstrategias(mensajeUsuario);
    this.chatHistory.push(mensajeProcesado);
    this.guardarMensajesLocalmente();
    this.scrollToBottom();
    this.isTyping = true;
    this.messageSubject.next(mensaje);
  }
  procesarMensaje(mensaje) {
    console.log('📤 Enviando mensaje:', mensaje);
    console.log('📤 Sesión ID:', this.sesionId);
    this.chatbotService.enviarMensaje(mensaje, this.sesionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: respuesta => {
        console.log('📥 Respuesta recibida:', respuesta);
        if (respuesta?.success && respuesta.data) {
          // ✅ Asegurar que mensaje_id existe, si no usar timestamp
          const mensajeId = respuesta.data.mensaje_id || Date.now();
          const mensajeBot = {
            id: mensajeId,
            // ← Ahora siempre es number
            sender: 'robot',
            text: respuesta.data.respuesta,
            timestamp: new Date()
          };
          this.chatHistory.push(mensajeBot);
          this.guardarMensajesLocalmente();
          this.scrollToBottom();
          if (respuesta.data.accion === 'mostrar_boton_codigo') {
            this.resaltarBotonCodigo();
          }
        }
      },
      error: error => {
        console.error('❌ Error completo:', error);
        console.error('Error:', error);
        this.chatHistory.push({
          id: Date.now(),
          sender: 'robot',
          text: 'Lo siento, ocurrió un error. Por favor, intenta de nuevo.',
          timestamp: new Date()
        });
        this.guardarMensajesLocalmente();
        this.scrollToBottom();
      }
    });
  }
  resaltarBotonCodigo() {
    const boton = document.querySelector('.sigpaz-code-master-btn, .sigpaz-code-master-footer');
    if (boton) {
      boton.classList.add('sigpaz-pulse-animation');
      setTimeout(() => boton.classList.remove('sigpaz-pulse-animation'), 2000);
    }
  }
  askQuickQuestion(question) {
    this.userInput = question;
    this.sendMessage();
  }
  handleKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  formatTime(date) {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  rateResponse(messageId, rating) {
    const message = this.chatHistory.find(msg => msg.id === messageId);
    if (message && message.sender === 'robot') {
      message.rated = rating;
      // ✅ Usar el messageId REAL que vino del backend
      this.chatbotService.calificar(messageId, rating === 'helpful' ? 5 : 1, rating === 'helpful').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
        next: () => {
          // Mostrar feedback (este sí puede usar Date.now())
          this.chatHistory.push({
            id: Date.now(),
            // Feedback no necesita FK
            sender: 'robot',
            text: rating === 'helpful' ? '¡Gracias por tu feedback! Me alegra haberte ayudado.' : 'Lamento no haber sido útil. ¿Podrías decirme cómo puedo mejorar?',
            timestamp: new Date()
          });
          this.scrollToBottom();
        },
        error: error => {
          console.error('Error al calificar:', error);
          this.chatHistory.push({
            id: Date.now(),
            sender: 'robot',
            text: '❌ No se pudo registrar tu calificación. Intenta de nuevo.',
            timestamp: new Date()
          });
          this.scrollToBottom();
        }
      });
    }
  }
  clearChat() {
    if (confirm('¿Estás seguro de que quieres limpiar el historial del chat?')) {
      this.chatbotService.limpiarHistorial(this.sesionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe();
      this.chatHistory = [];
      this.storageService.limpiarMensajes(this.sesionId);
      this.agregarMensajeBienvenida();
    }
  }
  openCodeGenerator() {
    this.modalCommService.openOTPModal();
    const mensajeCodigo = {
      id: Date.now(),
      sender: 'robot',
      text: '🔐 He abierto el panel del **Código Maestro**. Puedes verlo en la esquina inferior derecha de la pantalla. ¿Necesitas que te explique cómo usarlo?',
      timestamp: new Date()
    };
    this.chatHistory.push(this.procesarConEstrategias(mensajeCodigo));
    this.scrollToBottom();
  }
  contactHumanSupport() {
    const email = 'contac.teamdevelopment@gmail.com';
    const subject = 'Solicitud de Soporte Técnico - SIGPAZ';
    const body = `Hola equipo de soporte técnico de SIGPAZ,

[Describe tu consulta aquí]

---
**Información del Usuario:**
• Nombre: [Tu nombre]
• Correo: [Tu email]

**Detalles del problema:**
• Tipo: [Error técnico / Pregunta funcional / Otro]
• Área afectada: [Dashboard / Denuncias / Conciliaciones / Reportes]

Atentamente,
[Tu nombre]`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    const mensajeSoporte = {
      id: Date.now(),
      sender: 'robot',
      text: '✅ He abierto tu cliente de correo con una plantilla predefinida. Por favor, completa todos los campos para que nuestro equipo pueda ayudarte.',
      timestamp: new Date()
    };
    this.chatHistory.push(this.procesarConEstrategias(mensajeSoporte));
    this.scrollToBottom();
  }
  openHelpCenter() {
    window.open('https://www.sigpaz.com/ayuda', '_blank');
  }
  toggleSpeech() {
    this.isSpeechActive = !this.isSpeechActive;
    if (this.isSpeechActive && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'es-ES';
      recognition.onresult = event => {
        this.userInput = event.results[0][0].transcript;
        this.sendMessage();
      };
      recognition.start();
    }
  }
  toggleChat() {
    this.chatVisible = !this.chatVisible;
    if (this.chatVisible) {
      this.modalCommService.openChatModal();
    } else {
      this.modalCommService.closeChatModal();
    }
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.chatScrollContainer?.nativeElement) {
        this.chatScrollContainer.nativeElement.scrollTop = this.chatScrollContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }
  formatearTexto(texto) {
    if (!texto) return '';
    // Convertir saltos de línea a <br>
    let html = texto.replace(/\n/g, '<br>');
    // Convertir listas numeradas (1. texto) a HTML
    html = html.replace(/(\d+)\.\s+([^\n]+)/g, '<li>$2</li>');
    html = html.replace(/<li>(.*?)<\/li>/g, '<ol><li>$1</li></ol>');
    // Convertir guiones (- texto) a listas no numeradas
    html = html.replace(/-\s+([^\n]+)/g, '<li>$1</li>');
    html = html.replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>');
    // Convertir negritas (**texto**) a <strong>
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return html;
  }
  static ɵfac = function HelpSupportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HelpSupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_chatbot_service__WEBPACK_IMPORTED_MODULE_11__.ChatbotService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_chatbot_session_service__WEBPACK_IMPORTED_MODULE_12__.ChatbotSessionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_chatbot_storage_service__WEBPACK_IMPORTED_MODULE_13__.ChatbotStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_modal_communication_service__WEBPACK_IMPORTED_MODULE_14__.ModalCommunicationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: HelpSupportComponent,
    selectors: [["app-help-support"]],
    viewQuery: function HelpSupportComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.chatContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.chatScrollContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
      }
    },
    decls: 228,
    vars: 19,
    consts: [["chatScrollContainer", ""], ["messageInput", ""], [1, "sigpaz-help-container"], [1, "sigpaz-help-header"], [1, "sigpaz-header-content"], [1, "sigpaz-header-icon"], [1, "sigpaz-speech-bubbles-container"], [1, "sigpaz-speech-bubble", "sigpaz-bubble-1"], [1, "sigpaz-bubble-text"], [1, "sigpaz-speech-bubble", "sigpaz-bubble-2"], [1, "sigpaz-speech-bubble", "sigpaz-bubble-3"], [1, "sigpaz-robot-mouth"], [1, "sigpaz-header-text"], [1, "sigpaz-help-title"], [1, "sigpaz-help-subtitle"], [1, "sigpaz-header-actions"], [1, "sigpaz-minimize-btn", 3, "click"], [1, "sigpaz-main-content"], [1, "sigpaz-left-panel"], [1, "sigpaz-robot-section"], [1, "sigpaz-robot-display"], [1, "sigpaz-robot-speech-bubbles"], [1, "sigpaz-robot-speech-bubble", "sigpaz-robot-bubble-1"], [1, "sigpaz-robot-speech-bubble", "sigpaz-robot-bubble-2"], [1, "sigpaz-robot-speech-bubble", "sigpaz-robot-bubble-3"], [1, "sigpaz-robot-body"], [1, "sigpaz-robot-head"], [1, "sigpaz-robot-antenna", "sigpaz-antenna-left"], [1, "sigpaz-robot-antenna", "sigpaz-antenna-right"], [1, "sigpaz-robot-eyes"], [1, "sigpaz-eye", "sigpaz-left-eye"], [1, "sigpaz-eye", "sigpaz-right-eye"], [1, "sigpaz-robot-torso"], [1, "sigpaz-robot-screen"], [1, "sigpaz-screen-display"], [1, "sigpaz-screen-text"], [1, "sigpaz-screen-status"], [1, "sigpaz-status-dot"], [1, "sigpaz-status-text"], [1, "sigpaz-robot-controls"], [1, "sigpaz-control-button"], [1, "sigpaz-robot-base"], [1, "sigpaz-base-wheel", "sigpaz-left-wheel"], [1, "sigpaz-base-wheel", "sigpaz-right-wheel"], [1, "sigpaz-robot-info"], [1, "sigpaz-robot-name"], [1, "sigpaz-robot-description"], [1, "sigpaz-robot-stats"], [1, "sigpaz-stat-item"], [1, "sigpaz-stat-icon"], [1, "sigpaz-stat-text"], [1, "sigpaz-quick-actions-section"], [1, "sigpaz-section-title"], [1, "sigpaz-title-icon"], [1, "sigpaz-quick-actions-grid"], [1, "sigpaz-quick-action-btn", "sigpaz-code-master-btn", 3, "click"], [1, "sigpaz-action-icon"], [1, "sigpaz-action-text"], [1, "sigpaz-action-badge"], [1, "sigpaz-quick-action-btn", 3, "click"], [1, "sigpaz-contact-section"], [1, "sigpaz-contact-info"], [1, "sigpaz-contact-item"], [1, "sigpaz-contact-icon"], [1, "sigpaz-contact-text"], [1, "sigpaz-contact-support-btn", 3, "click"], [1, "sigpaz-btn-icon"], [1, "sigpaz-right-panel"], [1, "sigpaz-chat-scroll-container"], [1, "sigpaz-chat-scroll-content"], ["class", "sigpaz-chat-welcome", 4, "ngIf"], [1, "sigpaz-chat-history"], ["class", "sigpaz-message-wrapper", 3, "sigpaz-user-message", "sigpaz-robot-message", 4, "ngFor", "ngForOf"], ["class", "sigpaz-typing-indicator", 4, "ngIf"], [1, "sigpaz-input-section"], [1, "sigpaz-input-header"], [1, "sigpaz-input-label"], [1, "sigpaz-label-icon"], [1, "sigpaz-label-text"], [1, "sigpaz-input-actions"], ["title", "Limpiar chat", 1, "sigpaz-icon-btn", 3, "click"], ["title", "Voz", 1, "sigpaz-icon-btn", 3, "click"], [1, "sigpaz-input-container"], [1, "sigpaz-input-wrapper"], ["placeholder", "Escribe tu mensaje aqu\u00ED...", "rows", "2", 1, "sigpaz-chat-input", 3, "ngModelChange", "keydown", "ngModel"], [1, "sigpaz-send-btn", 3, "click", "disabled"], [1, "sigpaz-send-icon"], [1, "sigpaz-send-text"], [1, "sigpaz-input-hints"], [1, "sigpaz-hint-item"], [1, "sigpaz-hint-icon"], [1, "sigpaz-hint-text"], [1, "sigpaz-quick-suggestions"], [1, "sigpaz-suggestions-label"], [1, "sigpaz-suggestions-grid"], [1, "sigpaz-suggestion-btn", 3, "click"], [1, "sigpaz-help-footer"], [1, "sigpaz-footer-content"], [1, "sigpaz-footer-status"], [1, "sigpaz-status-indicator"], [1, "sigpaz-footer-info"], [1, "sigpaz-info-icon"], [1, "sigpaz-info-text"], [1, "sigpaz-footer-actions"], [1, "sigpaz-footer-btn", "sigpaz-secondary", 3, "click"], [1, "sigpaz-btn-text"], [1, "sigpaz-footer-btn", "sigpaz-primary", "sigpaz-code-master-footer", 3, "click"], [1, "sigpaz-footer-btn", "sigpaz-primary", 3, "click"], [1, "sigpaz-chat-welcome"], [1, "sigpaz-welcome-card"], [1, "sigpaz-welcome-header"], [1, "sigpaz-welcome-icon"], [1, "sigpaz-welcome-body"], [1, "sigpaz-welcome-list"], [1, "sigpaz-welcome-tip"], [1, "sigpaz-tip-icon"], [1, "sigpaz-message-wrapper"], [1, "sigpaz-message-content"], [1, "sigpaz-message-avatar"], [1, "sigpaz-avatar-icon"], [1, "sigpaz-message-bubble"], [1, "sigpaz-message-header"], [1, "sigpaz-message-sender"], [1, "sigpaz-message-time"], [1, "sigpaz-message-text", 3, "innerHTML"], ["class", "sigpaz-message-actions", 4, "ngIf"], ["class", "sigpaz-message-rated", 4, "ngIf"], [1, "sigpaz-message-actions"], [1, "sigpaz-action-btn", "sigpaz-helpful", 3, "click"], [1, "sigpaz-action-btn", "sigpaz-not-helpful", 3, "click"], [1, "sigpaz-message-rated"], [1, "sigpaz-rated-icon"], [1, "sigpaz-rated-text"], [1, "sigpaz-typing-indicator"], [1, "sigpaz-avatar-icon", "sigpaz-robot-avatar"], [1, "sigpaz-typing-bubble"], [1, "sigpaz-typing-dots"], [1, "sigpaz-typing-text"]],
    template: function HelpSupportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 9)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 10)(12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 12)(16, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Centro de Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Asistente virtual SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 15)(21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.toggleChat());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "div", 21)(28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 25)(35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "div", 27)(37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "div", 30)(40, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 32)(43, "div", 33)(44, "div", 34)(45, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "div", 40)(53, "div", 40)(54, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "div", 42)(57, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 44)(59, "h4", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "\uD83E\uDD16 SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "Asistente Inteligente");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 47)(64, "div", 48)(65, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "\u26A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "Respuesta r\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 48)(70, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "\uD83D\uDD04");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "24/7 Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 51)(75, "div", 52)(76, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "\u26A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "Acciones R\u00E1pidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div", 54)(81, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_81_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.openCodeGenerator());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "\uD83D\uDD10");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "C\u00F3digo Maestro");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_88_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFC\u00F3mo creo un nuevo reporte?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, "Crear Reporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_93_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFC\u00F3mo exporto datos a Excel?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "\uD83D\uDCCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "Exportar Datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_98_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFC\u00F3mo configuro permisos de usuario?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "\uD83D\uDD27");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, "Permisos");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_103_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFD\u00F3nde veo el historial de actividades?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "\uD83D\uDCDC");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107, "Historial");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_108_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFC\u00F3mo restablezco mi contrase\u00F1a?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "\uD83D\uDD11");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "div", 60)(114, "div", 52)(115, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](116, "\uD83D\uDCDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "Contacto R\u00E1pido");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "div", 61)(120, "div", 62)(121, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "\uD83D\uDCE7");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "contac.teamdevelopment@gmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "div", 62)(126, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "\uD83D\uDCF1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "+58 4246192129");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_130_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.contactHumanSupport());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, "\uD83D\uDC68\u200D\uD83D\uDCBC");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, " Contactar Soporte Humano ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "div", 67)(135, "div", 68)(136, "div", 69, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](138, HelpSupportComponent_div_138_Template, 35, 0, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](140, HelpSupportComponent_div_140_Template, 15, 14, "div", 72)(141, HelpSupportComponent_div_141_Template, 12, 0, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "div", 74)(143, "div", 75)(144, "div", 76)(145, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](146, "\uD83D\uDCAC");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](148, "Escribe tu pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "div", 79)(150, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_150_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.clearChat());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](152, "\uD83D\uDDD1\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_153_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.toggleSpeech());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](155, "\uD83C\uDFA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "div", 82)(157, "div", 83)(158, "textarea", 84, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function HelpSupportComponent_Template_textarea_ngModelChange_158_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.userInput, $event) || (ctx.userInput = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function HelpSupportComponent_Template_textarea_keydown_158_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.handleKeydown($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_160_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.sendMessage());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](162, "\uD83D\uDCE4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](164, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "div", 88)(166, "div", 89)(167, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "\u23CE");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](170, "Enter para enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "div", 89)(172, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, "\u21E7");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "Shift + Enter para salto de l\u00EDnea");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "div", 89)(177, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "\uD83D\uDD10");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180, "Escribe \"c\u00F3digo maestro\" para obtener tu c\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](181, "div", 92)(182, "div", 93)(183, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](184, "\uD83D\uDCA1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](185, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "Preguntas frecuentes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "div", 94)(188, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_188_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFC\u00F3mo obtengo mi c\u00F3digo maestro?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](189, " \uD83D\uDD10 Obtener C\u00F3digo Maestro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](190, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_190_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFC\u00F3mo creo un nuevo reporte?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](191, " \uD83D\uDCCA Crear reporte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](192, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_192_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFC\u00F3mo exporto datos a Excel?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](193, " \uD83D\uDCCE Exportar datos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](194, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_194_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFC\u00F3mo configuro permisos de usuario?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, " \uD83D\uDD27 Permisos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](196, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_196_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFD\u00F3nde veo el historial de actividades?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](197, " \uD83D\uDCDC Historial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](198, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_198_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.askQuickQuestion("\u00BFC\u00F3mo restablezco mi contrase\u00F1a?"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](199, " \uD83D\uDD11 Contrase\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](200, "div", 96)(201, "div", 97)(202, "div", 98)(203, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](204, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](205, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](207, "div", 100)(208, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](209, "\u2139\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](210, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](211, "SIGPAZ v2.0.0 \u2022 Asistente IA \u2022 C\u00F3digo Maestro disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](212, "div", 103)(213, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_213_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.openHelpCenter());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](214, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](215, "\uD83D\uDCDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](216, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](217, "Centro de Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](218, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_218_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.openCodeGenerator());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](220, "\uD83D\uDD10");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](221, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](222, "C\u00F3digo Maestro");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](223, "button", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HelpSupportComponent_Template_button_click_223_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.contactHumanSupport());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](225, "\uD83D\uDC68\u200D\uD83D\uDCBC");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](226, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](227, "Soporte T\u00E9cnico");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("sigpaz-help-collapsed", !ctx.chatVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.floatingTexts[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.floatingTexts[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.floatingTexts[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.chatVisible ? "\u2212" : "+", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("sigpaz-online", ctx.isOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.isOnline ? "Online" : "Offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.chatHistory.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.chatHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isTyping);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("sigpaz-active", ctx.isSpeechActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.userInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.userInput.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("sigpaz-online", ctx.isOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.isOnline ? "Conectado" : "Desconectado");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _core_pipes_linkify_pipe__WEBPACK_IMPORTED_MODULE_7__.LinkifyPipe],
    styles: [".sigpaz-message-text[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  font-size: 14px;\n  color: #333;\n}\n.sigpaz-message-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin: 8px 0;\n}\n.sigpaz-message-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin: 8px 0;\n}\n.sigpaz-message-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.sigpaz-message-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #5b5ff9;\n}\n.sigpaz-message-text[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  display: block;\n  content: \"\";\n  margin: 4px 0;\n}\n\n\n.sigpaz-dark[_ngcontent-%COMP%]   .sigpaz-message-text[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.sigpaz-dark[_ngcontent-%COMP%]   .sigpaz-message-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #818cf8;\n}\n.sigpaz-help-container[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 32px rgba(79, 70, 229, 0.25);\n  color: #ffffff;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  overflow: hidden;\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n  min-width: 1200px;\n}\n.sigpaz-help-container.sigpaz-help-collapsed[_ngcontent-%COMP%] {\n  height: 70px;\n  overflow: hidden;\n}\n.sigpaz-help-container.sigpaz-help-collapsed[_ngcontent-%COMP%]   .sigpaz-help-header[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.sigpaz-help-container.sigpaz-help-collapsed[_ngcontent-%COMP%]   .sigpaz-main-content[_ngcontent-%COMP%], \n.sigpaz-help-container.sigpaz-help-collapsed[_ngcontent-%COMP%]   .sigpaz-help-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n.sigpaz-help-header[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  background: rgba(255, 255, 255, 0.05);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%] {\n  font-size: 100px;\n  background: rgba(255, 255, 255, 0.1);\n  width: 100px;\n  height: 65px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  position: relative;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background: #00ff88;\n  border-radius: 50%;\n  top: 15px;\n  left: 15px;\n  animation: _ngcontent-%COMP%_sigpaz-blinkEyes 4s infinite;\n  box-shadow: 0 0 10px #00ff88;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background: #00ff88;\n  border-radius: 50%;\n  top: 15px;\n  right: 15px;\n  animation: _ngcontent-%COMP%_sigpaz-blinkEyes 4s infinite 0.2s;\n  box-shadow: 0 0 10px #00ff88;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-robot-mouth[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  background: #ff6b6b;\n  border-radius: 3px;\n  bottom: 12px;\n  left: 50%;\n  transform: translateX(-50%);\n  animation: _ngcontent-%COMP%_sigpaz-talkMouth 3s infinite;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-speech-bubbles-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -60px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  height: 50px;\n  overflow: hidden;\n  z-index: 100;\n  pointer-events: none;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-speech-bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  background: white;\n  color: #1f2937;\n  padding: 10px 16px;\n  border-radius: 18px;\n  font-size: 13px;\n  font-weight: 500;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  white-space: nowrap;\n  min-width: 180px;\n  text-align: center;\n  opacity: 0;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-speech-bubble[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 8px 8px 0;\n  border-style: solid;\n  border-color: white transparent transparent;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-speech-bubble.sigpaz-bubble-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sigpaz-slideInOut 12s infinite;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-speech-bubble.sigpaz-bubble-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sigpaz-slideInOut 12s infinite 4s;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-speech-bubble.sigpaz-bubble-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sigpaz-slideInOut 12s infinite 8s;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-speech-bubble[_ngcontent-%COMP%]   .sigpaz-bubble-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  border-right: 2px solid #4f46e5;\n  white-space: nowrap;\n  width: 0;\n  animation: _ngcontent-%COMP%_sigpaz-typing 3s steps(30) infinite;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-speech-bubble[_ngcontent-%COMP%]   .sigpaz-bubble-text[_ngcontent-%COMP%]::after {\n  content: '';\n  animation: _ngcontent-%COMP%_sigpaz-typingText 9s steps(90) infinite;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-text[_ngcontent-%COMP%]   .sigpaz-help-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-text[_ngcontent-%COMP%]   .sigpaz-help-subtitle[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-actions[_ngcontent-%COMP%]   .sigpaz-minimize-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-actions[_ngcontent-%COMP%]   .sigpaz-minimize-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.sigpaz-main-content[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 500px;\n  transition: all 0.3s;\n}\n.sigpaz-left-panel[_ngcontent-%COMP%] {\n  flex: 0 0 350px;\n  background: rgba(0, 0, 0, 0.15);\n  padding: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.sigpaz-robot-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.sigpaz-robot-display[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  position: relative;\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  z-index: 10;\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: white;\n  color: #1f2937;\n  padding: 10px 18px;\n  border-radius: 18px;\n  font-size: 13px;\n  font-weight: 500;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);\n  white-space: nowrap;\n  opacity: 0;\n  min-width: 200px;\n  text-align: center;\n  pointer-events: none;\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 8px 8px 0;\n  border-style: solid;\n  border-color: white transparent transparent;\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble.sigpaz-robot-bubble-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sigpaz-robotBubbleAppear 15s infinite;\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble.sigpaz-robot-bubble-1[_ngcontent-%COMP%]   .sigpaz-bubble-text[_ngcontent-%COMP%]::after {\n  content: '\u00BFNecesitas ayuda con algo?';\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble.sigpaz-robot-bubble-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sigpaz-robotBubbleAppear 15s infinite 5s;\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble.sigpaz-robot-bubble-2[_ngcontent-%COMP%]   .sigpaz-bubble-text[_ngcontent-%COMP%]::after {\n  content: 'Puedo resolver tus dudas';\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble.sigpaz-robot-bubble-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sigpaz-robotBubbleAppear 15s infinite 10s;\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble.sigpaz-robot-bubble-3[_ngcontent-%COMP%]   .sigpaz-bubble-text[_ngcontent-%COMP%]::after {\n  content: '\u00A1Hola! Soy SIGPAZ';\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble[_ngcontent-%COMP%]   .sigpaz-bubble-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  border-right: 2px solid #4f46e5;\n  white-space: nowrap;\n  width: 0;\n  animation: _ngcontent-%COMP%_sigpaz-robotTyping 4s steps(40) infinite;\n}\n.sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubble[_ngcontent-%COMP%]   .sigpaz-bubble-text[_ngcontent-%COMP%]::after {\n  content: '';\n  animation: _ngcontent-%COMP%_sigpaz-robotTypingText 12s steps(120) infinite;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 280px;\n  animation: _ngcontent-%COMP%_sigpaz-floatRobot 6s ease-in-out infinite;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 90px;\n  height: 90px;\n  background: linear-gradient(135deg, #8b5cf6, #6366f1);\n  border-radius: 45px 45px 20px 20px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4);\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-antenna[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 20px;\n  background: linear-gradient(to top, #8b5cf6, #c4b5fd);\n  border-radius: 3px;\n  top: -15px;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-antenna.sigpaz-antenna-left[_ngcontent-%COMP%] {\n  left: 25px;\n  transform: rotate(-15deg);\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-antenna.sigpaz-antenna-left[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #00ff88;\n  border-radius: 50%;\n  top: -5px;\n  left: -2px;\n  animation: _ngcontent-%COMP%_sigpaz-blinkAntenna 2s infinite;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-antenna.sigpaz-antenna-right[_ngcontent-%COMP%] {\n  right: 25px;\n  transform: rotate(15deg);\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-antenna.sigpaz-antenna-right[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #ff6b6b;\n  border-radius: 50%;\n  top: -5px;\n  right: -2px;\n  animation: _ngcontent-%COMP%_sigpaz-blinkAntenna 2s infinite reverse;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-eyes[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 25px;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-eyes[_ngcontent-%COMP%]   .sigpaz-eye[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  background: #00ff88;\n  border-radius: 50%;\n  position: relative;\n  animation: _ngcontent-%COMP%_sigpaz-blinkEyes 4s infinite;\n  box-shadow: 0 0 15px #00ff88;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-eyes[_ngcontent-%COMP%]   .sigpaz-eye[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: white;\n  border-radius: 50%;\n  top: 4px;\n  left: 4px;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-eyes[_ngcontent-%COMP%]   .sigpaz-eye.sigpaz-left-eye[_ngcontent-%COMP%]::after {\n  animation: _ngcontent-%COMP%_sigpaz-movePupilLeft 3s infinite alternate;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-eyes[_ngcontent-%COMP%]   .sigpaz-eye.sigpaz-right-eye[_ngcontent-%COMP%]::after {\n  animation: _ngcontent-%COMP%_sigpaz-movePupilRight 3s infinite alternate;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-head[_ngcontent-%COMP%]   .sigpaz-robot-mouth[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 45px;\n  height: 10px;\n  background: #ff6b6b;\n  border-radius: 5px;\n  animation: _ngcontent-%COMP%_sigpaz-talkMouth 5s infinite;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 140px;\n  height: 140px;\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n  border-radius: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 90px;\n  height: 60px;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-screen[_ngcontent-%COMP%]   .sigpaz-screen-display[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-screen[_ngcontent-%COMP%]   .sigpaz-screen-display[_ngcontent-%COMP%]   .sigpaz-screen-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #00ff88;\n  display: block;\n  margin-bottom: 5px;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-screen[_ngcontent-%COMP%]   .sigpaz-screen-display[_ngcontent-%COMP%]   .sigpaz-screen-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-screen[_ngcontent-%COMP%]   .sigpaz-screen-display[_ngcontent-%COMP%]   .sigpaz-screen-status[_ngcontent-%COMP%]   .sigpaz-status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: #00ff88;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_sigpaz-pulseStatus 2s infinite;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-screen[_ngcontent-%COMP%]   .sigpaz-screen-display[_ngcontent-%COMP%]   .sigpaz-screen-status[_ngcontent-%COMP%]   .sigpaz-status-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 10px;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-controls[_ngcontent-%COMP%]   .sigpaz-control-button[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-controls[_ngcontent-%COMP%]   .sigpaz-control-button[_ngcontent-%COMP%]:nth-child(1) {\n  background: #ff6b6b;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-controls[_ngcontent-%COMP%]   .sigpaz-control-button[_ngcontent-%COMP%]:nth-child(2) {\n  background: #00ff88;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-torso[_ngcontent-%COMP%]   .sigpaz-robot-controls[_ngcontent-%COMP%]   .sigpaz-control-button[_ngcontent-%COMP%]:nth-child(3) {\n  background: #4dabf7;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-base[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 160px;\n  height: 25px;\n  background: linear-gradient(to right, #3730a3, #312e81);\n  border-radius: 12px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 25px;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-base[_ngcontent-%COMP%]   .sigpaz-base-wheel[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: #1e1b4b;\n  border-radius: 50%;\n  margin-top: -14px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  animation: _ngcontent-%COMP%_sigpaz-spinWheel 4s linear infinite;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-base[_ngcontent-%COMP%]   .sigpaz-base-wheel.sigpaz-left-wheel[_ngcontent-%COMP%] {\n  animation-direction: normal;\n}\n.sigpaz-robot-body[_ngcontent-%COMP%]   .sigpaz-robot-base[_ngcontent-%COMP%]   .sigpaz-base-wheel.sigpaz-right-wheel[_ngcontent-%COMP%] {\n  animation-direction: reverse;\n}\n.sigpaz-robot-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sigpaz-robot-info[_ngcontent-%COMP%]   .sigpaz-robot-name[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 22px;\n  font-weight: 800;\n}\n.sigpaz-robot-info[_ngcontent-%COMP%]   .sigpaz-robot-description[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-robot-info[_ngcontent-%COMP%]   .sigpaz-robot-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n}\n.sigpaz-robot-info[_ngcontent-%COMP%]   .sigpaz-robot-stats[_ngcontent-%COMP%]   .sigpaz-stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-robot-info[_ngcontent-%COMP%]   .sigpaz-robot-stats[_ngcontent-%COMP%]   .sigpaz-stat-item[_ngcontent-%COMP%]   .sigpaz-stat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sigpaz-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0 0 15px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ffffff;\n}\n.sigpaz-section-title[_ngcontent-%COMP%]   .sigpaz-title-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.sigpaz-quick-actions-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sigpaz-quick-actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.sigpaz-quick-action-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  padding: 12px;\n  color: #ffffff;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.sigpaz-quick-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-2px);\n  border-color: #00ff88;\n}\n.sigpaz-quick-action-btn[_ngcontent-%COMP%]   .sigpaz-action-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.sigpaz-quick-action-btn[_ngcontent-%COMP%]   .sigpaz-action-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.sigpaz-quick-action-btn.sigpaz-code-master-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(139, 92, 246, 0.2));\n  border: 1px solid rgba(79, 70, 229, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.sigpaz-quick-action-btn.sigpaz-code-master-btn[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.4), transparent);\n  transition: left 0.5s;\n}\n.sigpaz-quick-action-btn.sigpaz-code-master-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.sigpaz-quick-action-btn.sigpaz-code-master-btn[_ngcontent-%COMP%]   .sigpaz-action-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: #ff6b6b;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 12px;\n  animation: _ngcontent-%COMP%_sigpaz-pulse 1s infinite;\n}\n.sigpaz-contact-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sigpaz-contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sigpaz-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sigpaz-contact-item[_ngcontent-%COMP%]   .sigpaz-contact-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.8;\n}\n.sigpaz-contact-item[_ngcontent-%COMP%]   .sigpaz-contact-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-contact-support-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n  padding: 10px;\n  background: rgba(0, 255, 136, 0.2);\n  border: 1px solid rgba(0, 255, 136, 0.3);\n  border-radius: 8px;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.3s;\n  font-size: 13px;\n  font-weight: 500;\n}\n.sigpaz-contact-support-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 255, 136, 0.3);\n  transform: translateY(-2px);\n}\n.sigpaz-contact-support-btn[_ngcontent-%COMP%]   .sigpaz-btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sigpaz-right-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.1);\n  min-width: 0;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n.sigpaz-chat-scroll-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.sigpaz-chat-scroll-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);\n}\n.sigpaz-chat-scroll-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.sigpaz-chat-scroll-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 4px;\n}\n.sigpaz-chat-scroll-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n}\n.sigpaz-chat-scroll-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%]   .sigpaz-welcome-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 25px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  max-width: 700px;\n  margin: 0 auto;\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%]   .sigpaz-welcome-card[_ngcontent-%COMP%]   .sigpaz-welcome-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%]   .sigpaz-welcome-card[_ngcontent-%COMP%]   .sigpaz-welcome-header[_ngcontent-%COMP%]   .sigpaz-welcome-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%]   .sigpaz-welcome-card[_ngcontent-%COMP%]   .sigpaz-welcome-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%]   .sigpaz-welcome-card[_ngcontent-%COMP%]   .sigpaz-welcome-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%]   .sigpaz-welcome-card[_ngcontent-%COMP%]   .sigpaz-welcome-body[_ngcontent-%COMP%]   .sigpaz-welcome-list[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  padding-left: 20px;\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%]   .sigpaz-welcome-card[_ngcontent-%COMP%]   .sigpaz-welcome-body[_ngcontent-%COMP%]   .sigpaz-welcome-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.5;\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%]   .sigpaz-welcome-card[_ngcontent-%COMP%]   .sigpaz-welcome-body[_ngcontent-%COMP%]   .sigpaz-welcome-tip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  background: rgba(0, 255, 136, 0.1);\n  border-radius: 8px;\n  border: 1px solid rgba(0, 255, 136, 0.2);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-chat-welcome[_ngcontent-%COMP%]   .sigpaz-welcome-card[_ngcontent-%COMP%]   .sigpaz-welcome-body[_ngcontent-%COMP%]   .sigpaz-welcome-tip[_ngcontent-%COMP%]   .sigpaz-tip-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sigpaz-chat-history[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-right: 15px;\n  max-width: 700px;\n  margin-left: 90px;\n  width: 100%;\n  flex-shrink: 0;\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.sigpaz-message-wrapper.sigpaz-user-message[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.sigpaz-message-wrapper.sigpaz-user-message[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-avatar[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 0;\n}\n.sigpaz-message-wrapper.sigpaz-user-message[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2);\n  border-color: rgba(99, 102, 241, 0.3);\n  border-top-right-radius: 0;\n}\n.sigpaz-message-wrapper.sigpaz-user-message[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-header[_ngcontent-%COMP%]   .sigpaz-message-sender[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sigpaz-message-wrapper.sigpaz-user-message[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-header[_ngcontent-%COMP%]   .sigpaz-message-time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.sigpaz-message-wrapper.sigpaz-user-message[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.sigpaz-message-wrapper.sigpaz-robot-message[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-avatar[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  flex-shrink: 0;\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-avatar[_ngcontent-%COMP%]   .sigpaz-avatar-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-avatar[_ngcontent-%COMP%]   .sigpaz-avatar-icon.sigpaz-user-avatar[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.3);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 18px;\n  padding: 15px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  max-width: 80%;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-header[_ngcontent-%COMP%]   .sigpaz-message-sender[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-header[_ngcontent-%COMP%]   .sigpaz-message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  line-height: 1.5;\n  font-size: 14px;\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-actions[_ngcontent-%COMP%]   .sigpaz-action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n  font-size: 12px;\n  color: #ffffff;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-actions[_ngcontent-%COMP%]   .sigpaz-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-actions[_ngcontent-%COMP%]   .sigpaz-action-btn.sigpaz-helpful[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 255, 136, 0.2);\n}\n.sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-actions[_ngcontent-%COMP%]   .sigpaz-action-btn.sigpaz-not-helpful[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 107, 107, 0.2);\n}\n.sigpaz-message-rated[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.sigpaz-message-rated[_ngcontent-%COMP%]   .sigpaz-rated-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sigpaz-message-rated[_ngcontent-%COMP%]   .sigpaz-rated-text[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-avatar[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-avatar[_ngcontent-%COMP%]   .sigpaz-avatar-icon.sigpaz-robot-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(0, 255, 136, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  border: 2px solid rgba(0, 255, 136, 0.2);\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-typing-bubble[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 18px;\n  padding: 15px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-typing-bubble[_ngcontent-%COMP%]   .sigpaz-typing-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-typing-bubble[_ngcontent-%COMP%]   .sigpaz-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #00ff88;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_sigpaz-bounceDots 1.4s infinite ease-in-out;\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-typing-bubble[_ngcontent-%COMP%]   .sigpaz-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-typing-bubble[_ngcontent-%COMP%]   .sigpaz-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.16s;\n}\n.sigpaz-typing-indicator[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-typing-bubble[_ngcontent-%COMP%]   .sigpaz-typing-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-input-section[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 25px;\n  flex-shrink: 0;\n}\n.sigpaz-input-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.sigpaz-input-header[_ngcontent-%COMP%]   .sigpaz-input-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sigpaz-input-header[_ngcontent-%COMP%]   .sigpaz-input-label[_ngcontent-%COMP%]   .sigpaz-label-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.sigpaz-input-header[_ngcontent-%COMP%]   .sigpaz-input-label[_ngcontent-%COMP%]   .sigpaz-label-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.sigpaz-input-header[_ngcontent-%COMP%]   .sigpaz-input-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.sigpaz-input-header[_ngcontent-%COMP%]   .sigpaz-input-actions[_ngcontent-%COMP%]   .sigpaz-icon-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n}\n.sigpaz-input-header[_ngcontent-%COMP%]   .sigpaz-input-actions[_ngcontent-%COMP%]   .sigpaz-icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.sigpaz-input-header[_ngcontent-%COMP%]   .sigpaz-input-actions[_ngcontent-%COMP%]   .sigpaz-icon-btn.sigpaz-active[_ngcontent-%COMP%] {\n  background: #00ff88;\n  border-color: #00ff88;\n}\n.sigpaz-input-container[_ngcontent-%COMP%]   .sigpaz-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n.sigpaz-input-container[_ngcontent-%COMP%]   .sigpaz-input-wrapper[_ngcontent-%COMP%]   .sigpaz-chat-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  padding-right: 120px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 2px solid rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: inherit;\n  resize: vertical;\n  min-height: 60px;\n  max-height: 120px;\n  transition: all 0.3s;\n}\n.sigpaz-input-container[_ngcontent-%COMP%]   .sigpaz-input-wrapper[_ngcontent-%COMP%]   .sigpaz-chat-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: rgba(255, 255, 255, 0.1);\n  border-color: #00ff88;\n  box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.1);\n}\n.sigpaz-input-container[_ngcontent-%COMP%]   .sigpaz-input-wrapper[_ngcontent-%COMP%]   .sigpaz-chat-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.sigpaz-input-container[_ngcontent-%COMP%]   .sigpaz-input-wrapper[_ngcontent-%COMP%]   .sigpaz-send-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: linear-gradient(135deg, #00ff88, #00cc6a);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.sigpaz-input-container[_ngcontent-%COMP%]   .sigpaz-input-wrapper[_ngcontent-%COMP%]   .sigpaz-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.4);\n}\n.sigpaz-input-container[_ngcontent-%COMP%]   .sigpaz-input-wrapper[_ngcontent-%COMP%]   .sigpaz-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sigpaz-input-container[_ngcontent-%COMP%]   .sigpaz-input-hints[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-top: 10px;\n}\n.sigpaz-input-container[_ngcontent-%COMP%]   .sigpaz-input-hints[_ngcontent-%COMP%]   .sigpaz-hint-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-quick-suggestions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.sigpaz-quick-suggestions[_ngcontent-%COMP%]   .sigpaz-suggestions-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.sigpaz-quick-suggestions[_ngcontent-%COMP%]   .sigpaz-suggestions-label[_ngcontent-%COMP%]   .sigpaz-label-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.sigpaz-quick-suggestions[_ngcontent-%COMP%]   .sigpaz-suggestions-label[_ngcontent-%COMP%]   .sigpaz-label-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n.sigpaz-quick-suggestions[_ngcontent-%COMP%]   .sigpaz-suggestions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n@media (min-width: 1200px) {\n  .sigpaz-quick-suggestions[_ngcontent-%COMP%]   .sigpaz-suggestions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.sigpaz-quick-suggestions[_ngcontent-%COMP%]   .sigpaz-suggestions-grid[_ngcontent-%COMP%]   .sigpaz-suggestion-btn[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  font-size: 13px;\n  color: #ffffff;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.sigpaz-quick-suggestions[_ngcontent-%COMP%]   .sigpaz-suggestions-grid[_ngcontent-%COMP%]   .sigpaz-suggestion-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-1px);\n}\n.sigpaz-help-footer[_ngcontent-%COMP%] {\n  padding: 15px 30px;\n  background: rgba(0, 0, 0, 0.2);\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-status[_ngcontent-%COMP%]   .sigpaz-status-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-status[_ngcontent-%COMP%]   .sigpaz-status-indicator[_ngcontent-%COMP%]   .sigpaz-status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #ff6b6b;\n  border-radius: 50%;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-status[_ngcontent-%COMP%]   .sigpaz-status-indicator[_ngcontent-%COMP%]   .sigpaz-status-dot.sigpaz-online[_ngcontent-%COMP%] {\n  background: #00ff88;\n  animation: _ngcontent-%COMP%_sigpaz-pulseStatus 2s infinite;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-status[_ngcontent-%COMP%]   .sigpaz-status-indicator[_ngcontent-%COMP%]   .sigpaz-status-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-status[_ngcontent-%COMP%]   .sigpaz-footer-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-status[_ngcontent-%COMP%]   .sigpaz-footer-info[_ngcontent-%COMP%]   .sigpaz-info-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-status[_ngcontent-%COMP%]   .sigpaz-footer-info[_ngcontent-%COMP%]   .sigpaz-info-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%]   .sigpaz-footer-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%]   .sigpaz-footer-btn.sigpaz-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%]   .sigpaz-footer-btn.sigpaz-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%]   .sigpaz-footer-btn.sigpaz-primary[_ngcontent-%COMP%] {\n  background: #00ff88;\n  color: #1e1b4b;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%]   .sigpaz-footer-btn.sigpaz-primary[_ngcontent-%COMP%]:hover {\n  background: #00cc6a;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.4);\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%]   .sigpaz-footer-btn.sigpaz-code-master-footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  position: relative;\n  overflow: hidden;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%]   .sigpaz-footer-btn.sigpaz-code-master-footer[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  transform: translate(-50%, -50%);\n  transition: width 0.6s, height 0.6s;\n}\n.sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%]   .sigpaz-footer-btn.sigpaz-code-master-footer[_ngcontent-%COMP%]:hover::after {\n  width: 300px;\n  height: 300px;\n}\n@keyframes _ngcontent-%COMP%_sigpaz-slideInOut {\n  0%,\n  33.33% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  5%,\n  28.33% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-robotBubbleAppear {\n  0%,\n  33% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(10px);\n  }\n  3%,\n  30% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-typing {\n  0% {\n    width: 0;\n  }\n  50%,\n  100% {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-robotTyping {\n  0% {\n    width: 0;\n  }\n  50%,\n  100% {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-typingText {\n  0% {\n    content: '\u00BFQu\u00E9 m\u00E1s puedo hacer por ti?';\n  }\n  33% {\n    content: '\u00BFQu\u00E9 m\u00E1s puedo hacer por ti?';\n  }\n  34% {\n    content: '\u00A1Estoy aqu\u00ED para ayudarte!';\n  }\n  66% {\n    content: '\u00A1Estoy aqu\u00ED para ayudarte!';\n  }\n  67% {\n    content: '\u00BFEn qu\u00E9 puedo asistirte hoy?';\n  }\n  100% {\n    content: '\u00BFEn qu\u00E9 puedo asistirte hoy?';\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-robotTypingText {\n  0% {\n    content: '\u00BFNecesitas ayuda con algo?';\n  }\n  33% {\n    content: '\u00BFNecesitas ayuda con algo?';\n  }\n  34% {\n    content: 'Puedo resolver tus dudas';\n  }\n  66% {\n    content: 'Puedo resolver tus dudas';\n  }\n  67% {\n    content: '\u00A1Hola! Soy SIGPAZ';\n  }\n  100% {\n    content: '\u00A1Hola! Soy SIGPAZ';\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-floatRobot {\n  0%,\n  100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  25% {\n    transform: translateY(-5px) rotate(1deg);\n  }\n  75% {\n    transform: translateY(3px) rotate(-1deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-blinkAntenna {\n  0%,\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.8);\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-blinkEyes {\n  0%,\n  90%,\n  100% {\n    height: 22px;\n  }\n  95% {\n    height: 5px;\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-movePupilLeft {\n  0% {\n    transform: translateX(0) translateY(0);\n  }\n  100% {\n    transform: translateX(2px) translateY(2px);\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-movePupilRight {\n  0% {\n    transform: translateX(0) translateY(0);\n  }\n  100% {\n    transform: translateX(-2px) translateY(2px);\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-talkMouth {\n  0%,\n  100% {\n    width: 45px;\n    height: 10px;\n  }\n  25% {\n    width: 55px;\n    height: 8px;\n  }\n  75% {\n    width: 35px;\n    height: 12px;\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-pulseStatus {\n  0%,\n  100% {\n    opacity: 1;\n    box-shadow: 0 0 10px #00ff88;\n  }\n  50% {\n    opacity: 0.5;\n    box-shadow: 0 0 5px #00ff88;\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-spinWheel {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-bounceDots {\n  0%,\n  80%,\n  100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-6px);\n  }\n}\n@keyframes _ngcontent-%COMP%_sigpaz-pulse {\n  0%,\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n}\n@media (max-width: 1024px) {\n  .sigpaz-help-container[_ngcontent-%COMP%] {\n    max-width: 98%;\n    border-radius: 12px;\n    max-height: 90vh;\n    min-width: auto;\n  }\n  .sigpaz-main-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: auto;\n    max-height: calc(90vh - 120px);\n    overflow: hidden;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 100%;\n    border-right: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n    padding: 20px;\n    max-height: 300px;\n    overflow-y: auto;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-robot-section[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    text-align: left;\n    padding: 15px;\n    flex-wrap: nowrap;\n    overflow-x: hidden;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-robot-section[_ngcontent-%COMP%]   .sigpaz-robot-display[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    flex-shrink: 0;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-robot-section[_ngcontent-%COMP%]   .sigpaz-robot-info[_ngcontent-%COMP%] {\n    text-align: left;\n    flex: 1;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-robot-section[_ngcontent-%COMP%]   .sigpaz-robot-info[_ngcontent-%COMP%]   .sigpaz-robot-stats[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .sigpaz-right-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 400px;\n    flex: 1;\n    overflow: hidden;\n  }\n  .sigpaz-chat-scroll-content[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .sigpaz-chat-history[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin-left: 0;\n  }\n  .sigpaz-robot-body[_ngcontent-%COMP%] {\n    width: 140px;\n    height: 210px;\n  }\n  .sigpaz-robot-display[_ngcontent-%COMP%]   .sigpaz-robot-speech-bubbles[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%]   .sigpaz-speech-bubble[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .sigpaz-help-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 0;\n    margin: 0;\n    height: 100vh;\n    max-height: 100vh;\n  }\n  .sigpaz-main-content[_ngcontent-%COMP%] {\n    height: calc(100vh - 120px);\n    max-height: calc(100vh - 120px);\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%] {\n    padding: 15px;\n    max-height: 250px;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-robot-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-robot-section[_ngcontent-%COMP%]   .sigpaz-robot-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-robot-section[_ngcontent-%COMP%]   .sigpaz-robot-info[_ngcontent-%COMP%]   .sigpaz-robot-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-quick-actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sigpaz-right-panel[_ngcontent-%COMP%] {\n    min-height: 300px;\n  }\n  .sigpaz-chat-scroll-content[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .sigpaz-chat-history[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  .sigpaz-message-wrapper[_ngcontent-%COMP%]   .sigpaz-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  .sigpaz-input-section[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .sigpaz-chat-input[_ngcontent-%COMP%] {\n    font-size: 13px;\n    min-height: 50px;\n  }\n  .sigpaz-send-btn[_ngcontent-%COMP%] {\n    padding: 8px 15px;\n    font-size: 12px;\n  }\n  .sigpaz-suggestions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  .sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .sigpaz-help-footer[_ngcontent-%COMP%]   .sigpaz-footer-content[_ngcontent-%COMP%]   .sigpaz-footer-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .sigpaz-help-header[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n  .sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-icon[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 50px;\n    font-size: 60px;\n  }\n  .sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-text[_ngcontent-%COMP%]   .sigpaz-help-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .sigpaz-help-header[_ngcontent-%COMP%]   .sigpaz-header-content[_ngcontent-%COMP%]   .sigpaz-header-text[_ngcontent-%COMP%]   .sigpaz-help-subtitle[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%] {\n    max-height: 220px;\n    padding: 12px;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-quick-actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sigpaz-chat-message-content[_ngcontent-%COMP%]   .sigpaz-message-avatar[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 14px;\n  }\n  .sigpaz-chat-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%] {\n    padding: 10px;\n    max-width: 95%;\n  }\n  .sigpaz-chat-message-content[_ngcontent-%COMP%]   .sigpaz-message-bubble[_ngcontent-%COMP%]   .sigpaz-message-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .sigpaz-input-wrapper[_ngcontent-%COMP%]   .sigpaz-chat-input[_ngcontent-%COMP%] {\n    padding: 12px;\n    padding-right: 80px;\n    font-size: 12px;\n    min-height: 45px;\n  }\n  .sigpaz-send-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 11px;\n  }\n  .sigpaz-send-btn[_ngcontent-%COMP%]   .sigpaz-send-icon[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .sigpaz-send-btn[_ngcontent-%COMP%]   .sigpaz-send-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sigpaz-suggestions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sigpaz-footer-btn[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 12px;\n  }\n  .sigpaz-footer-btn[_ngcontent-%COMP%]   .sigpaz-btn-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) and (orientation: landscape) {\n  .sigpaz-help-container[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  .sigpaz-main-content[_ngcontent-%COMP%] {\n    flex-direction: row;\n    height: calc(100vh - 80px);\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%] {\n    flex: 0 0 200px;\n    max-height: calc(100vh - 80px);\n    border-right: 1px solid rgba(255, 255, 255, 0.15);\n    border-bottom: none;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-robot-section[_ngcontent-%COMP%]   .sigpaz-robot-body[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 150px;\n  }\n  .sigpaz-left-panel[_ngcontent-%COMP%]   .sigpaz-quick-actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sigpaz-right-panel[_ngcontent-%COMP%] {\n    height: calc(100vh - 80px);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .sigpaz-robot-body[_ngcontent-%COMP%], \n   .sigpaz-eye[_ngcontent-%COMP%], \n   .sigpaz-robot-antenna[_ngcontent-%COMP%]::after, \n   .sigpaz-robot-mouth[_ngcontent-%COMP%], \n   .sigpaz-status-dot[_ngcontent-%COMP%], \n   .sigpaz-base-wheel[_ngcontent-%COMP%], \n   .sigpaz-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .sigpaz-speech-bubble[_ngcontent-%COMP%], \n   .sigpaz-robot-speech-bubble[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9oZWxwLXN1cHBvcnQvaGVscC1zdXBwb3J0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF0QkY7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUF2QkY7QUEwQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUF4QkY7QUEyQkE7RUFDRSxrQkFBQTtBQXpCRjtBQTRCQTtFQUNFLGNBQUE7QUExQkY7QUE2QkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUEzQkY7QUFDQSxnQkFBZ0I7QUE4QmhCO0VBQ0UsY0FBQTtBQTVCRjtBQStCQTtFQUNFLGNBQUE7QUE3QkY7QUFnQ0E7RUFDRSxxREFBQTtFQUNBLDJDQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsOEVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQTlCRjtBQWdDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQTlCSjtBQTRCRTtFQUtJLG1CQUFBO0FBOUJOO0FBeUJFOztFQVVJLGFBQUE7QUEvQk47QUF3Q0E7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQXRDRjtBQWdDQTtFQVNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF0Q0o7QUEyQkE7RUFjTSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQXRDTjtBQXdDTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtF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Q0EsZUFBQTtFQS9TSjtFQTJTQTtJQVFJLGFBQUE7SUFDQSxjQUFBO0VBaFRKO0VBdVNBO0lBWU0sZUFBQTtFQWhUTjtFQXFUQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQW5URjtFQXNUQTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQXBURjtFQWtUQTtJQUtJLGVBQUE7RUFwVEo7RUErU0E7SUFTSSxhQUFBO0VBclRKO0VBeVRBO0lBQ0UsMEJBQUE7RUF2VEY7RUEwVEE7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUF4VEY7RUFzVEE7SUFLSSxhQUFBO0VBeFRKO0FBQ0Y7QUE2VEE7RUFDRTtJQUNFLGFBQUE7RUEzVEY7RUE4VEE7SUFDRSxtQkFBQTtJQUNBLDBCQUFBO0VBNVRGO0VBK1RBO0lBQ0UsZUFBQTtJQUNBLDhCQUFBO0lBQ0EsaURBQUE7SUFDQSxtQkFBQTtFQTdURjtFQXlUQTtJQVFNLFlBQUE7SUFDQSxhQUFBO0VBOVROO0VBcVRBO0lBY0ksMEJBQUE7RUFoVUo7RUFvVUE7SUFDRSwwQkFBQTtFQWxVRjtBQUNGO0FBc1VBO0VBQ0U7Ozs7Ozs7OztJQVNFLDBCQUFBO0lBQ0EsMkJBQUE7RUFwVUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIRUxQIFNVUFBPUlQgKENIQVRCT1QpIC0gRVNUSUxPUyDDg8KaTklDT1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQVJJQUJMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBwcmltYXJ5LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNGY0NmU1LCAjNjM2NmYxKTtcbkBwcmltYXJ5LWNvbG9yOiAjNGY0NmU1O1xuQHNlY29uZGFyeS1jb2xvcjogIzYzNjZmMTtcbkBhY2NlbnQtY29sb3I6ICMwMGZmODg7XG5AdGV4dC1wcmltYXJ5OiAjZmZmZmZmO1xuQHRleHQtc2Vjb25kYXJ5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5AYmctZGFyazogcmdiYSgwLCAwLCAwLCAwLjIpO1xuQGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbkBjYXJkLWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuQHNoYWRvdzogMCA4cHggMzJweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjI1KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVElMT1MgUFJJTkNJUEFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5zaWdwYXotbWVzc2FnZS10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLnNpZ3Bhei1tZXNzYWdlLXRleHQgb2wge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5zaWdwYXotbWVzc2FnZS10ZXh0IHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uc2lncGF6LW1lc3NhZ2UtdGV4dCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnNpZ3Bhei1tZXNzYWdlLXRleHQgc3Ryb25nIHtcbiAgY29sb3I6ICM1YjVmZjk7XG59XG5cbi5zaWdwYXotbWVzc2FnZS10ZXh0IGJyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbjogNHB4IDA7XG59XG5cbi8qIFRlbWEgb3NjdXJvICovXG4uc2lncGF6LWRhcmsgLnNpZ3Bhei1tZXNzYWdlLXRleHQge1xuICBjb2xvcjogI2UwZTBlMDtcbn1cblxuLnNpZ3Bhei1kYXJrIC5zaWdwYXotbWVzc2FnZS10ZXh0IHN0cm9uZyB7XG4gIGNvbG9yOiAjODE4Y2Y4O1xufVxuXG4uc2lncGF6LWhlbHAtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogQHByaW1hcnktZ3JhZGllbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXItY29sb3I7XG4gIGJveC1zaGFkb3c6IEBzaGFkb3c7XG4gIGNvbG9yOiBAdGV4dC1wcmltYXJ5O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi13aWR0aDogMTIwMHB4O1xuXG4gICYuc2lncGF6LWhlbHAtY29sbGFwc2VkIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5zaWdwYXotaGVscC1oZWFkZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG5cbiAgICAuc2lncGF6LW1haW4tY29udGVudCxcbiAgICAuc2lncGF6LWhlbHAtZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIRUFERVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5zaWdwYXotaGVscC1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLnNpZ3Bhei1oZWFkZXItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcblxuICAgIC5zaWdwYXotaGVhZGVyLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogNjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBAYWNjZW50LWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgYW5pbWF0aW9uOiBzaWdwYXotYmxpbmtFeWVzIDRzIGluZmluaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCBAYWNjZW50LWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IEBhY2NlbnQtY29sb3I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgYW5pbWF0aW9uOiBzaWdwYXotYmxpbmtFeWVzIDRzIGluZmluaXRlIDAuMnM7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IEBhY2NlbnQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5zaWdwYXotcm9ib3QtbW91dGgge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNmI2YjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBib3R0b206IDEycHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBhbmltYXRpb246IHNpZ3Bhei10YWxrTW91dGggM3MgaW5maW5pdGU7XG4gICAgICB9XG5cbiAgICAgIC5zaWdwYXotc3BlZWNoLWJ1YmJsZXMtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC02MHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5zaWdwYXotc3BlZWNoLWJ1YmJsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAtOHB4O1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiA4cHggOHB4IDA7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zaWdwYXotYnViYmxlLTEge1xuICAgICAgICAgIGFuaW1hdGlvbjogc2lncGF6LXNsaWRlSW5PdXQgMTJzIGluZmluaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zaWdwYXotYnViYmxlLTIge1xuICAgICAgICAgIGFuaW1hdGlvbjogc2lncGF6LXNsaWRlSW5PdXQgMTJzIGluZmluaXRlIDRzO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zaWdwYXotYnViYmxlLTMge1xuICAgICAgICAgIGFuaW1hdGlvbjogc2lncGF6LXNsaWRlSW5PdXQgMTJzIGluZmluaXRlIDhzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZ3Bhei1idWJibGUtdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgQHByaW1hcnktY29sb3I7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBhbmltYXRpb246IHNpZ3Bhei10eXBpbmcgM3Mgc3RlcHMoMzApIGluZmluaXRlO1xuXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBhbmltYXRpb246IHNpZ3Bhei10eXBpbmdUZXh0IDlzIHN0ZXBzKDkwKSBpbmZpbml0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2lncGF6LWhlYWRlci10ZXh0IHtcbiAgICAgIC5zaWdwYXotaGVscC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuXG4gICAgICAuc2lncGF6LWhlbHAtc3VidGl0bGUge1xuICAgICAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IEB0ZXh0LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lncGF6LWhlYWRlci1hY3Rpb25zIHtcbiAgICAuc2lncGF6LW1pbmltaXplLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogQHRleHQtcHJpbWFyeTtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5JRE8gUFJJTkNJUEFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4uc2lncGF6LW1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBTkVMIElaUVVJRVJETyAtIFJPQk9UIFkgQUNDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5zaWdwYXotbGVmdC1wYW5lbCB7XG4gIGZsZXg6IDAgMCAzNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgcGFkZGluZzogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xufVxuXG4vLyBTZWNjacODwrNuIGRlbCByb2JvdFxuLnNpZ3Bhei1yb2JvdC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogQGNhcmQtYmc7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuXG4uc2lncGF6LXJvYm90LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5zaWdwYXotcm9ib3Qtc3BlZWNoLWJ1YmJsZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG5cbiAgICAuc2lncGF6LXJvYm90LXNwZWVjaC1idWJibGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjb2xvcjogIzFmMjkzNztcbiAgICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtOHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA4cHggOHB4IDA7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICYuc2lncGF6LXJvYm90LWJ1YmJsZS0xIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzaWdwYXotcm9ib3RCdWJibGVBcHBlYXIgMTVzIGluZmluaXRlO1xuICAgICAgICAuc2lncGF6LWJ1YmJsZS10ZXh0OjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJ8OCwr9OZWNlc2l0YXMgYXl1ZGEgY29uIGFsZ28/JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5zaWdwYXotcm9ib3QtYnViYmxlLTIge1xuICAgICAgICBhbmltYXRpb246IHNpZ3Bhei1yb2JvdEJ1YmJsZUFwcGVhciAxNXMgaW5maW5pdGUgNXM7XG4gICAgICAgIC5zaWdwYXotYnViYmxlLXRleHQ6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnUHVlZG8gcmVzb2x2ZXIgdHVzIGR1ZGFzJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5zaWdwYXotcm9ib3QtYnViYmxlLTMge1xuICAgICAgICBhbmltYXRpb246IHNpZ3Bhei1yb2JvdEJ1YmJsZUFwcGVhciAxNXMgaW5maW5pdGUgMTBzO1xuICAgICAgICAuc2lncGF6LWJ1YmJsZS10ZXh0OjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJ8OCwqFIb2xhISBTb3kgU0lHUEFaJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2lncGF6LWJ1YmJsZS10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBAcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogc2lncGF6LXJvYm90VHlwaW5nIDRzIHN0ZXBzKDQwKSBpbmZpbml0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzaWdwYXotcm9ib3RUeXBpbmdUZXh0IDEycyBzdGVwcygxMjApIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zaWdwYXotcm9ib3QtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICBhbmltYXRpb246IHNpZ3Bhei1mbG9hdFJvYm90IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXG4gIC5zaWdwYXotcm9ib3QtaGVhZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOGI1Y2Y2LCAjNjM2NmYxKTtcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4IDQ1cHggMjBweCAyMHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjQpO1xuXG4gICAgLnNpZ3Bhei1yb2JvdC1hbnRlbm5hIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOGI1Y2Y2LCAjYzRiNWZkKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHRvcDogLTE1cHg7XG5cbiAgICAgICYuc2lncGF6LWFudGVubmEtbGVmdCB7XG4gICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogQGFjY2VudC1jb2xvcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzaWdwYXotYmxpbmtBbnRlbm5hIDJzIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuc2lncGF6LWFudGVubmEtcmlnaHQge1xuICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjZiNmI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICByaWdodDogLTJweDtcbiAgICAgICAgICBhbmltYXRpb246IHNpZ3Bhei1ibGlua0FudGVubmEgMnMgaW5maW5pdGUgcmV2ZXJzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zaWdwYXotcm9ib3QtZXllcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDI1cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAyNXB4O1xuXG4gICAgICAuc2lncGF6LWV5ZSB7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMGZmODg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBhbmltYXRpb246IHNpZ3Bhei1ibGlua0V5ZXMgNHMgaW5maW5pdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMGZmODg7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNpZ3Bhei1sZWZ0LWV5ZTo6YWZ0ZXIge1xuICAgICAgICAgIGFuaW1hdGlvbjogc2lncGF6LW1vdmVQdXBpbExlZnQgM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zaWdwYXotcmlnaHQtZXllOjphZnRlciB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzaWdwYXotbW92ZVB1cGlsUmlnaHQgM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNpZ3Bhei1yb2JvdC1tb3V0aCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDE1cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZjZiNmI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBhbmltYXRpb246IHNpZ3Bhei10YWxrTW91dGggNXMgaW5maW5pdGU7XG4gICAgfVxuICB9XG5cbiAgLnNpZ3Bhei1yb2JvdC10b3JzbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM0ZjQ2ZTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXG4gICAgLnNpZ3Bhei1yb2JvdC1zY3JlZW4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyMHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAuc2lncGF6LXNjcmVlbi1kaXNwbGF5IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5zaWdwYXotc2NyZWVuLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiBAYWNjZW50LWNvbG9yO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWdwYXotc2NyZWVuLXN0YXR1cyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGdhcDogNXB4O1xuXG4gICAgICAgICAgLnNpZ3Bhei1zdGF0dXMtZG90IHtcbiAgICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IEBhY2NlbnQtY29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBhbmltYXRpb246IHNpZ3Bhei1wdWxzZVN0YXR1cyAycyBpbmZpbml0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2lncGF6LXN0YXR1cy10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiBAdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNpZ3Bhei1yb2JvdC1jb250cm9scyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDE1cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMHB4O1xuXG4gICAgICAuc2lncGF6LWNvbnRyb2wtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG5cbiAgICAgICAgJjpudGgtY2hpbGQoMSkgeyBiYWNrZ3JvdW5kOiAjZmY2YjZiOyB9XG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHsgYmFja2dyb3VuZDogIzAwZmY4ODsgfVxuICAgICAgICAmOm50aC1jaGlsZCgzKSB7IGJhY2tncm91bmQ6ICM0ZGFiZjc7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lncGF6LXJvYm90LWJhc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM3MzBhMywgIzMxMmU4MSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG5cbiAgICAuc2lncGF6LWJhc2Utd2hlZWwge1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWUxYjRiO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbWFyZ2luLXRvcDogLTE0cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBhbmltYXRpb246IHNpZ3Bhei1zcGluV2hlZWwgNHMgbGluZWFyIGluZmluaXRlO1xuXG4gICAgICAmLnNpZ3Bhei1sZWZ0LXdoZWVsIHtcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgfVxuXG4gICAgICAmLnNpZ3Bhei1yaWdodC13aGVlbCB7XG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zaWdwYXotcm9ib3QtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuc2lncGF6LXJvYm90LW5hbWUge1xuICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5zaWdwYXotcm9ib3QtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBAdGV4dC1zZWNvbmRhcnk7XG4gIH1cblxuICAuc2lncGF6LXJvYm90LXN0YXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTVweDtcblxuICAgIC5zaWdwYXotc3RhdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogQHRleHQtc2Vjb25kYXJ5O1xuXG4gICAgICAuc2lncGF6LXN0YXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gU2VjY2lvbmVzIGNvbXVuZXNcbi5zaWdwYXotc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogQHRleHQtcHJpbWFyeTtcblxuICAuc2lncGF6LXRpdGxlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuXG4vLyBBY2Npb25lcyByw4PCoXBpZGFzXG4uc2lncGF6LXF1aWNrLWFjdGlvbnMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IEBjYXJkLWJnO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5zaWdwYXotcXVpY2stYWN0aW9ucy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc2lncGF6LXF1aWNrLWFjdGlvbi1idG4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBjb2xvcjogQHRleHQtcHJpbWFyeTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm9yZGVyLWNvbG9yOiBAYWNjZW50LWNvbG9yO1xuICB9XG5cbiAgLnNpZ3Bhei1hY3Rpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLnNpZ3Bhei1hY3Rpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAmLnNpZ3Bhei1jb2RlLW1hc3Rlci1idG4ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNzksIDcwLCAyMjksIDAuMiksIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjIpKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc5LCA3MCwgMjI5LCAwLjQpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogLTEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoNzksIDcwLCAyMjksIDAuNCksIHRyYW5zcGFyZW50KTtcbiAgICAgIHRyYW5zaXRpb246IGxlZnQgMC41cztcbiAgICB9XG5cbiAgICAmOmhvdmVyOjpiZWZvcmUge1xuICAgICAgbGVmdDogMTAwJTtcbiAgICB9XG5cbiAgICAuc2lncGF6LWFjdGlvbi1iYWRnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC04cHg7XG4gICAgICByaWdodDogLThweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZjZiNmI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGFuaW1hdGlvbjogc2lncGF6LXB1bHNlIDFzIGluZmluaXRlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBTZWNjacODwrNuIGRlIGNvbnRhY3RvXG4uc2lncGF6LWNvbnRhY3Qtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IEBjYXJkLWJnO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5zaWdwYXotY29udGFjdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc2lncGF6LWNvbnRhY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuXG4gIC5zaWdwYXotY29udGFjdC1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgLnNpZ3Bhei1jb250YWN0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogQHRleHQtc2Vjb25kYXJ5O1xuICB9XG59XG5cbi5zaWdwYXotY29udGFjdC1zdXBwb3J0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMTM2LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDI1NSwgMTM2LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDEzNiwgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cblxuICAuc2lncGF6LWJ0bi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBTkVMIERFUkVDSE8gLSBDSEFUXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4uc2lncGF6LXJpZ2h0LXBhbmVsIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtaW4td2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy8gQ29udGVuZWRvciBkZWwgY2hhdCBjb24gc2Nyb2xsXG4uc2lncGF6LWNoYXQtc2Nyb2xsLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWdwYXotY2hhdC1zY3JvbGwtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuXG4vLyBNZW5zYWplIGRlIGJpZW52ZW5pZGFcbi5zaWdwYXotY2hhdC13ZWxjb21lIHtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgLnNpZ3Bhei13ZWxjb21lLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IEBjYXJkLWJnO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuc2lncGF6LXdlbGNvbWUtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgLnNpZ3Bhei13ZWxjb21lLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICB9XG5cbiAgICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNpZ3Bhei13ZWxjb21lLWJvZHkge1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgIGNvbG9yOiBAdGV4dC1zZWNvbmRhcnk7XG4gICAgICB9XG5cbiAgICAgIC5zaWdwYXotd2VsY29tZS1saXN0IHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgY29sb3I6IEB0ZXh0LXNlY29uZGFyeTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zaWdwYXotd2VsY29tZS10aXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAxMzYsIDAuMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAyNTUsIDEzNiwgMC4yKTtcbiAgICAgICAgY29sb3I6IEB0ZXh0LXNlY29uZGFyeTtcblxuICAgICAgICAuc2lncGF6LXRpcC1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSGlzdG9yaWFsIGRlbCBjaGF0XG4uc2lncGF6LWNoYXQtaGlzdG9yeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnNpZ3Bhei1tZXNzYWdlLXdyYXBwZXIge1xuICBmbGV4LXNocmluazogMDtcblxuICAmLnNpZ3Bhei11c2VyLW1lc3NhZ2Uge1xuICAgIC5zaWdwYXotbWVzc2FnZS1jb250ZW50IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblxuICAgICAgLnNpZ3Bhei1tZXNzYWdlLWF2YXRhciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5zaWdwYXotbWVzc2FnZS1idWJibGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zKTtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG5cbiAgICAgICAgLnNpZ3Bhei1tZXNzYWdlLWhlYWRlciB7XG4gICAgICAgICAgLnNpZ3Bhei1tZXNzYWdlLXNlbmRlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaWdwYXotbWVzc2FnZS10aW1lIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNpZ3Bhei1tZXNzYWdlLXRleHQge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuc2lncGF6LXJvYm90LW1lc3NhZ2Uge1xuICAgIC5zaWdwYXotbWVzc2FnZS1idWJibGUge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAuc2lncGF6LW1lc3NhZ2UtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgIC5zaWdwYXotbWVzc2FnZS1hdmF0YXIge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgIC5zaWdwYXotYXZhdGFyLWljb24ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXG4gICAgICAgICYuc2lncGF6LXVzZXItYXZhdGFyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoOTksIDEwMiwgMjQxLCAwLjQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNpZ3Bhei1tZXNzYWdlLWJ1YmJsZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBAY2FyZC1iZztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAuc2lncGF6LW1lc3NhZ2UtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgLnNpZ3Bhei1tZXNzYWdlLXNlbmRlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lncGF6LW1lc3NhZ2UtdGltZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiBAdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNpZ3Bhei1tZXNzYWdlLXRleHQge1xuICAgICAgICBjb2xvcjogQHRleHQtcHJpbWFyeTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAuc2lncGF6LW1lc3NhZ2UtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG5cbiAgICAgICAgLnNpZ3Bhei1hY3Rpb24tYnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IEB0ZXh0LXByaW1hcnk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuc2lncGF6LWhlbHBmdWw6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDEzNiwgMC4yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNpZ3Bhei1ub3QtaGVscGZ1bDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zaWdwYXotbWVzc2FnZS1yYXRlZCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcblxuICAuc2lncGF6LXJhdGVkLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5zaWdwYXotcmF0ZWQtdGV4dCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG59XG5cbi8vIEluZGljYWRvciBkZSBcImVzY3JpYmllbmRvXCJcbi5zaWdwYXotdHlwaW5nLWluZGljYXRvciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5zaWdwYXotbWVzc2FnZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc2lncGF6LW1lc3NhZ2UtYXZhdGFyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgLnNpZ3Bhei1hdmF0YXItaWNvbi5zaWdwYXotcm9ib3QtYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMTM2LCAwLjEpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDI1NSwgMTM2LCAwLjIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zaWdwYXotdHlwaW5nLWJ1YmJsZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBAY2FyZC1iZztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG5cbiAgICAgIC5zaWdwYXotdHlwaW5nLWRvdHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDRweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IEBhY2NlbnQtY29sb3I7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGFuaW1hdGlvbjogc2lncGF6LWJvdW5jZURvdHMgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcblxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7IH1cbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMTZzOyB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNpZ3Bhei10eXBpbmctdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IEB0ZXh0LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFQ0NJw4PCk04gREUgSU5QVVRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5zaWdwYXotaW5wdXQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnNpZ3Bhei1pbnB1dC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgLnNpZ3Bhei1pbnB1dC1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcblxuICAgIC5zaWdwYXotbGFiZWwtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLnNpZ3Bhei1sYWJlbC10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbiAgLnNpZ3Bhei1pbnB1dC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcblxuICAgIC5zaWdwYXotaWNvbi1idG4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6IEB0ZXh0LXByaW1hcnk7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIH1cblxuICAgICAgJi5zaWdwYXotYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogQGFjY2VudC1jb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBAYWNjZW50LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2lncGF6LWlucHV0LWNvbnRhaW5lciB7XG4gIC5zaWdwYXotaW5wdXQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAuc2lncGF6LWNoYXQtaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBjb2xvcjogQHRleHQtcHJpbWFyeTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICBib3JkZXItY29sb3I6IEBhY2NlbnQtY29sb3I7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDI1NSwgMTM2LCAwLjEpO1xuICAgICAgfVxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNpZ3Bhei1zZW5kLWJ0biB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAYWNjZW50LWNvbG9yLCAjMDBjYzZhKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAyNTUsIDEzNiwgMC40KTtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lncGF6LWlucHV0LWhpbnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgLnNpZ3Bhei1oaW50LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiBAdGV4dC1zZWNvbmRhcnk7XG4gICAgfVxuICB9XG59XG5cbi8vIFN1Z2VyZW5jaWFzIHLDg8KhcGlkYXNcbi5zaWdwYXotcXVpY2stc3VnZ2VzdGlvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC5zaWdwYXotc3VnZ2VzdGlvbnMtbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICAgLnNpZ3Bhei1sYWJlbC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAuc2lncGF6LWxhYmVsLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICAuc2lncGF6LXN1Z2dlc3Rpb25zLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgIH1cblxuICAgIC5zaWdwYXotc3VnZ2VzdGlvbi1idG4ge1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6IEB0ZXh0LXByaW1hcnk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZPT1RFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLnNpZ3Bhei1oZWxwLWZvb3RlciB7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgQGJvcmRlci1jb2xvcjtcblxuICAuc2lncGF6LWZvb3Rlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnNpZ3Bhei1mb290ZXItc3RhdHVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAyMHB4O1xuXG4gICAgICAuc2lncGF6LXN0YXR1cy1pbmRpY2F0b3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcblxuICAgICAgICAuc2lncGF6LXN0YXR1cy1kb3Qge1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY2YjZiO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAgICYuc2lncGF6LW9ubGluZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBAYWNjZW50LWNvbG9yO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzaWdwYXotcHVsc2VTdGF0dXMgMnMgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNpZ3Bhei1zdGF0dXMtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiBAdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNpZ3Bhei1mb290ZXItaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgIC5zaWdwYXotaW5mby1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2lncGF6LWluZm8tdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiBAdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2lncGF6LWZvb3Rlci1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEwcHg7XG5cbiAgICAgIC5zaWdwYXotZm9vdGVyLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICYuc2lncGF6LXNlY29uZGFyeSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgIGNvbG9yOiBAdGV4dC1wcmltYXJ5O1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5zaWdwYXotcHJpbWFyeSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogQGFjY2VudC1jb2xvcjtcbiAgICAgICAgICBjb2xvcjogIzFlMWI0YjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwY2M2YTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAyNTUsIDEzNiwgMC40KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnNpZ3Bhei1jb2RlLW1hc3Rlci1mb290ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEsICM3NjRiYTIpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzLCBoZWlnaHQgMC42cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBrZXlmcmFtZXMgc2lncGF6LXNsaWRlSW5PdXQge1xuICAwJSwgMzMuMzMlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICA1JSwgMjguMzMlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaWdwYXotcm9ib3RCdWJibGVBcHBlYXIge1xuICAwJSwgMzMlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIDMlLCAzMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaWdwYXotdHlwaW5nIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSwgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaWdwYXotcm9ib3RUeXBpbmcge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNpZ3Bhei10eXBpbmdUZXh0IHtcbiAgMCUge1xuICAgIGNvbnRlbnQ6ICfDgsK/UXXDg8KpIG3Dg8KhcyBwdWVkbyBoYWNlciBwb3IgdGk/JztcbiAgfVxuICAzMyUge1xuICAgIGNvbnRlbnQ6ICfDgsK/UXXDg8KpIG3Dg8KhcyBwdWVkbyBoYWNlciBwb3IgdGk/JztcbiAgfVxuICAzNCUge1xuICAgIGNvbnRlbnQ6ICfDgsKhRXN0b3kgYXF1w4PCrSBwYXJhIGF5dWRhcnRlISc7XG4gIH1cbiAgNjYlIHtcbiAgICBjb250ZW50OiAnw4LCoUVzdG95IGFxdcODwq0gcGFyYSBheXVkYXJ0ZSEnO1xuICB9XG4gIDY3JSB7XG4gICAgY29udGVudDogJ8OCwr9FbiBxdcODwqkgcHVlZG8gYXNpc3RpcnRlIGhveT8nO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbnRlbnQ6ICfDgsK/RW4gcXXDg8KpIHB1ZWRvIGFzaXN0aXJ0ZSBob3k/JztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNpZ3Bhei1yb2JvdFR5cGluZ1RleHQge1xuICAwJSB7XG4gICAgY29udGVudDogJ8OCwr9OZWNlc2l0YXMgYXl1ZGEgY29uIGFsZ28/JztcbiAgfVxuICAzMyUge1xuICAgIGNvbnRlbnQ6ICfDgsK/TmVjZXNpdGFzIGF5dWRhIGNvbiBhbGdvPyc7XG4gIH1cbiAgMzQlIHtcbiAgICBjb250ZW50OiAnUHVlZG8gcmVzb2x2ZXIgdHVzIGR1ZGFzJztcbiAgfVxuICA2NiUge1xuICAgIGNvbnRlbnQ6ICdQdWVkbyByZXNvbHZlciB0dXMgZHVkYXMnO1xuICB9XG4gIDY3JSB7XG4gICAgY29udGVudDogJ8OCwqFIb2xhISBTb3kgU0lHUEFaJztcbiAgfVxuICAxMDAlIHtcbiAgICBjb250ZW50OiAnw4LCoUhvbGEhIFNveSBTSUdQQVonO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2lncGF6LWZsb2F0Um9ib3Qge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoMWRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KSByb3RhdGUoLTFkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2lncGF6LWJsaW5rQW50ZW5uYSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2lncGF6LWJsaW5rRXllcyB7XG4gIDAlLCA5MCUsIDEwMCUge1xuICAgIGhlaWdodDogMjJweDtcbiAgfVxuICA5NSUge1xuICAgIGhlaWdodDogNXB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2lncGF6LW1vdmVQdXBpbExlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgycHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2lncGF6LW1vdmVQdXBpbFJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKDJweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaWdwYXotdGFsa01vdXRoIHtcbiAgMCUsIDEwMCUge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuICAyNSUge1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogOHB4O1xuICB9XG4gIDc1JSB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2lncGF6LXB1bHNlU3RhdHVzIHtcbiAgMCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggQGFjY2VudC1jb2xvcjtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IEBhY2NlbnQtY29sb3I7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaWdwYXotc3BpbldoZWVsIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaWdwYXotYm91bmNlRG90cyB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNpZ3Bhei1wdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFIERFU0lHTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gVGFibGV0ICg3NjhweCAtIDEwMjRweClcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNpZ3Bhei1oZWxwLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5OCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgfVxuXG4gIC5zaWdwYXotbWFpbi1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogY2FsYyg5MHZoIC0gMTIwcHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuc2lncGF6LWxlZnQtcGFuZWwge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGJvcmRlci1jb2xvcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAuc2lncGF6LXJvYm90LXNlY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gICAgICAuc2lncGF6LXJvYm90LWRpc3BsYXkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cblxuICAgICAgLnNpZ3Bhei1yb2JvdC1pbmZvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAuc2lncGF6LXJvYm90LXN0YXRzIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lncGF6LXJpZ2h0LXBhbmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuc2lncGF6LWNoYXQtc2Nyb2xsLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuc2lncGF6LWNoYXQtaGlzdG9yeSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLnNpZ3Bhei1yb2JvdC1ib2R5IHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgfVxuXG4gIC5zaWdwYXotcm9ib3QtZGlzcGxheSAuc2lncGF6LXJvYm90LXNwZWVjaC1idWJibGVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNpZ3Bhei1oZWxwLWhlYWRlciAuc2lncGF6LWhlYWRlci1jb250ZW50IC5zaWdwYXotaGVhZGVyLWljb24gLnNpZ3Bhei1zcGVlY2gtYnViYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8vIE1vYmlsZSAoNDgwcHggLSA3NjhweClcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2lncGF6LWhlbHAtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC5zaWdwYXotbWFpbi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbiAgfVxuXG4gIC5zaWdwYXotbGVmdC1wYW5lbCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcblxuICAgIC5zaWdwYXotcm9ib3Qtc2VjdGlvbiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAuc2lncGF6LXJvYm90LWluZm8ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnNpZ3Bhei1yb2JvdC1zdGF0cyB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2lncGF6LXF1aWNrLWFjdGlvbnMtZ3JpZCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIH1cbiAgfVxuXG4gIC5zaWdwYXotcmlnaHQtcGFuZWwge1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLnNpZ3Bhei1jaGF0LXNjcm9sbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgLnNpZ3Bhei1jaGF0LWhpc3Rvcnkge1xuICAgIGdhcDogMTVweDtcbiAgfVxuXG4gIC5zaWdwYXotbWVzc2FnZS13cmFwcGVyIC5zaWdwYXotbWVzc2FnZS1jb250ZW50IC5zaWdwYXotbWVzc2FnZS1idWJibGUge1xuICAgIG1heC13aWR0aDogOTAlO1xuICB9XG5cbiAgLnNpZ3Bhei1pbnB1dC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLnNpZ3Bhei1jaGF0LWlucHV0IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgfVxuXG4gIC5zaWdwYXotc2VuZC1idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5zaWdwYXotc3VnZ2VzdGlvbnMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5zaWdwYXotaGVscC1mb290ZXIge1xuICAgIC5zaWdwYXotZm9vdGVyLWNvbnRlbnQge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTVweDtcblxuICAgICAgLnNpZ3Bhei1mb290ZXItYWN0aW9ucyB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1vYmlsZSBwZXF1ZcODwrFvcyAobWF4IDQ4MHB4KVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zaWdwYXotaGVscC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcblxuICAgIC5zaWdwYXotaGVhZGVyLWNvbnRlbnQge1xuICAgICAgLnNpZ3Bhei1oZWFkZXItaWNvbiB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIH1cblxuICAgICAgLnNpZ3Bhei1oZWFkZXItdGV4dCB7XG4gICAgICAgIC5zaWdwYXotaGVscC10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZ3Bhei1oZWxwLXN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lncGF6LWxlZnQtcGFuZWwge1xuICAgIG1heC1oZWlnaHQ6IDIyMHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG5cbiAgICAuc2lncGF6LXF1aWNrLWFjdGlvbnMtZ3JpZCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gIH1cblxuICAuc2lncGF6LWNoYXQtbWVzc2FnZS1jb250ZW50IHtcbiAgICAuc2lncGF6LW1lc3NhZ2UtYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5zaWdwYXotbWVzc2FnZS1idWJibGUge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIG1heC13aWR0aDogOTUlO1xuXG4gICAgICAuc2lncGF6LW1lc3NhZ2UtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lncGF6LWlucHV0LXdyYXBwZXIgLnNpZ3Bhei1jaGF0LWlucHV0IHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIH1cblxuICAuc2lncGF6LXNlbmQtYnRuIHtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDExcHg7XG5cbiAgICAuc2lncGF6LXNlbmQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLnNpZ3Bhei1zZW5kLXRleHQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuc2lncGF6LXN1Z2dlc3Rpb25zLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnNpZ3Bhei1mb290ZXItYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAuc2lncGF6LWJ0bi10ZXh0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIE9yaWVudGFjacODwrNuIExhbmRzY2FwZSBlbiBtw4PCs3ZpbGVzXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuc2lncGF6LWhlbHAtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLnNpZ3Bhei1tYWluLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG4gIH1cblxuICAuc2lncGF6LWxlZnQtcGFuZWwge1xuICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgQGJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuXG4gICAgLnNpZ3Bhei1yb2JvdC1zZWN0aW9uIHtcbiAgICAgIC5zaWdwYXotcm9ib3QtYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2lncGF6LXF1aWNrLWFjdGlvbnMtZ3JpZCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gIH1cblxuICAuc2lncGF6LXJpZ2h0LXBhbmVsIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbiAgfVxufVxuXG4vLyBQcmVmZXJzIHJlZHVjZWQgbW90aW9uXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuc2lncGF6LXJvYm90LWJvZHksXG4gIC5zaWdwYXotZXllLFxuICAuc2lncGF6LXJvYm90LWFudGVubmE6OmFmdGVyLFxuICAuc2lncGF6LXJvYm90LW1vdXRoLFxuICAuc2lncGF6LXN0YXR1cy1kb3QsXG4gIC5zaWdwYXotYmFzZS13aGVlbCxcbiAgLnNpZ3Bhei10eXBpbmctZG90cyBzcGFuLFxuICAuc2lncGF6LXNwZWVjaC1idWJibGUsXG4gIC5zaWdwYXotcm9ib3Qtc3BlZWNoLWJ1YmJsZSB7XG4gICAgYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 17856:
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);







function FooterComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Rol actual: " + ctx_r0.currentUserRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Rol: ", ctx_r0.currentUserRole, " ");
  }
}
function FooterComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Autenticado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FooterComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " 2FA Activo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class FooterComponent {
  appVersion = '1.0.0';
  isDarkTheme = false;
  isSidebarCollapsed = false;
  linkClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  socialClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  languageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  toggleTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  currentYear;
  currentLanguage = 'es';
  email = '';
  isScrolled = false;
  scrollTimeout;
  buildNumber = '2024.001';
  lastUpdateDate = new Date().toLocaleDateString();
  isAuthenticated = false;
  currentUserRole = '';
  hasMFA = false;
  sessionId = '';
  userPermissions = [];
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.loadSavedLanguage();
  }
  ngOnInit() {
    this.checkScroll();
    this.setupScrollListener();
    this.loadAuthInfo();
  }
  loadAuthInfo() {
    // Cargar información de autenticación desde el servicio
    // Esto debería venir de un servicio de autenticación
    const authData = localStorage.getItem('auth_data');
    if (authData) {
      try {
        const data = JSON.parse(authData);
        this.isAuthenticated = true;
        this.currentUserRole = data.role || 'usuario';
        this.hasMFA = data.mfaEnabled || false;
        this.sessionId = data.sessionId || this.generateSessionId();
        this.userPermissions = data.permissions || [];
      } catch (e) {
        console.error('Error loading auth data', e);
      }
    }
  }
  generateSessionId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  hasAccess(module) {
    // Verificar si el usuario tiene acceso al módulo
    // Esto debería basarse en los permisos reales del usuario
    return this.isAuthenticated && this.userPermissions.includes(module);
  }
  openPrivacyPolicy(event) {
    event.preventDefault();
    console.log('Opening privacy policy');
    // Abrir modal o navegar a la página de privacidad
  }
  openTermsOfService(event) {
    event.preventDefault();
    console.log('Opening terms of service');
  }
  openLegalNotice(event) {
    event.preventDefault();
    console.log('Opening legal notice');
  }
  openCookiesPolicy(event) {
    event.preventDefault();
    console.log('Opening cookies policy');
  }
  openAccessibility(event) {
    event.preventDefault();
    console.log('Opening accessibility statement');
  }
  ngOnChanges(changes) {
    if (changes['isSidebarCollapsed']) {
      console.log('Sidebar collapsed state changed:', this.isSidebarCollapsed);
      this.adjustFooterLayout();
    }
  }
  get sidebarCollapsedClass() {
    return this.isSidebarCollapsed;
  }
  checkScroll() {
    this.isScrolled = window.scrollY > 300;
  }
  setupScrollListener() {
    window.addEventListener('scroll', () => {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      this.scrollTimeout = setTimeout(() => {
        // Throttle scroll events if needed
      }, 100);
    });
  }
  adjustFooterLayout() {
    const footer = document.querySelector('.footer-modern');
    if (footer) {
      if (this.isSidebarCollapsed) {
        footer.classList.add('collapsed-layout');
      } else {
        footer.classList.remove('collapsed-layout');
      }
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const button = document.querySelector('.back-to-top');
    if (button) {
      button.classList.add('bounce');
      setTimeout(() => {
        button.classList.remove('bounce');
      }, 300);
    }
  }
  scrollToHome() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.onLinkClick('home');
  }
  scrollToBalanza() {
    const element = document.getElementById('balanza');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    this.onLinkClick('balanza');
  }
  onLinkClick(link) {
    this.linkClicked.emit(link);
    console.log(`Navigation link clicked: ${link}`);
    this.trackAnalytics('navigation', link);
  }
  onSocialClick(platform) {
    this.socialClicked.emit(platform);
    console.log(`Social media clicked: ${platform}`);
    const socialUrls = {
      facebook: 'https://facebook.com/sigpaz',
      twitter: 'https://twitter.com/sigpaz',
      instagram: 'https://instagram.com/sigpaz',
      linkedin: 'https://linkedin.com/company/sigpaz',
      youtube: 'https://youtube.com/sigpaz'
    };
    if (socialUrls[platform]) {
      window.open(socialUrls[platform], '_blank', 'noopener,noreferrer');
    }
    this.trackAnalytics('social', platform);
  }
  onLanguageChange(event) {
    const select = event.target;
    const language = select.value;
    this.currentLanguage = language;
    this.languageChanged.emit(language);
    console.log(`Language changed to: ${language}`);
    localStorage.setItem('preferred_language', language);
    this.changeAppLanguage(language);
  }
  loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang && ['es', 'en', 'fr', 'pt'].includes(savedLang)) {
      this.currentLanguage = savedLang;
    }
  }
  changeAppLanguage(language) {
    console.log(`Changing application language to: ${language}`);
  }
  subscribeNewsletter() {
    if (this.email && this.validateEmail(this.email)) {
      console.log(`Newsletter subscription: ${this.email}`);
      this.sendNewsletterSubscription(this.email);
      this.showNotification('¡Gracias por suscribirte al boletín de SIGPAZ!', 'success');
      this.email = '';
      this.trackAnalytics('newsletter', 'subscribe');
    } else {
      this.showNotification('Por favor, introduce un email válido.', 'error');
    }
  }
  sendNewsletterSubscription(email) {
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // Implement API call here
  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  showNotification(message, type) {
    alert(message);
  }
  trackAnalytics(category, action) {
    console.log(`Analytics - Category: ${category}, Action: ${action}`);
  }
  cleanup() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
  static ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FooterComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    hostVars: 2,
    hostBindings: function FooterComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function FooterComponent_scroll_HostBindingHandler() {
          return ctx.checkScroll();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"])("beforeunload", function FooterComponent_beforeunload_HostBindingHandler() {
          return ctx.cleanup();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sidebar-collapsed", ctx.sidebarCollapsedClass);
      }
    },
    inputs: {
      appVersion: "appVersion",
      isDarkTheme: "isDarkTheme",
      isSidebarCollapsed: "isSidebarCollapsed"
    },
    outputs: {
      linkClicked: "linkClicked",
      socialClicked: "socialClicked",
      languageChanged: "languageChanged",
      toggleTheme: "toggleTheme"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 60,
    vars: 8,
    consts: [[1, "footer-modern"], [1, "container"], [1, "footer-content"], [1, "footer-brand"], [1, "brand-icon"], [1, "pi", "pi-gavel"], [1, "logo-text"], ["src", "/images/logo_sigpaz.png", "alt", "Justicia 3D Logo", 1, "logo-image"], [1, "footer-links"], [1, "links-group"], [1, "contact-row"], ["href", "mailto:info@justiciapaz.gob", 1, "contact-link"], [1, "contact-separator"], ["href", "mailto:contacto@justiciapaz.gob", 1, "contact-link", "contacte-link"], ["href", "tel:800-JUSTICIA", 1, "contact-link"], ["href", "tel:800-CONTACTO", 1, "contact-link", "contacte-link"], [1, "social-icons"], ["href", "#", "target", "_blank"], [1, "pi", "pi-facebook"], [1, "pi", "pi-twitter"], [1, "pi", "pi-instagram"], [1, "pi", "pi-linkedin"], [1, "footer-bottom"], [1, "security-badges"], [1, "badge-group"], ["title", "Conexi\u00F3n segura SSL/TLS", 1, "cert-badge", "ssl"], [1, "pi", "pi-lock"], ["title", "Cumplimiento GDPR", 1, "cert-badge", "gdpr"], [1, "pi", "pi-shield"], ["title", "Certificaci\u00F3n ISO 27001", 1, "cert-badge", "iso"], [1, "pi", "pi-check-circle"], ["title", "Accesibilidad WCAG 2.1 AA", 1, "cert-badge", "wcag"], [1, "pi", "pi-users"], ["class", "cert-badge roles", 3, "title", 4, "ngIf"], ["class", "cert-badge auth", "title", "Autenticaci\u00F3n activa", 4, "ngIf"], ["class", "cert-badge mfa", "title", "Autenticaci\u00F3n de dos factores", 4, "ngIf"], ["aria-label", "Volver arriba", 1, "back-to-top", 3, "click"], [1, "cert-badge", "roles", 3, "title"], [1, "pi", "pi-id-card"], ["title", "Autenticaci\u00F3n activa", 1, "cert-badge", "auth"], [1, "pi", "pi-check"], ["title", "Autenticaci\u00F3n de dos factores", 1, "cert-badge", "mfa"], [1, "pi", "pi-mobile"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Sistema Integral de Gesti\u00F3n para la Paz");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "info@justiciapaz.gob");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "contacte");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 10)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "800-JUSTICIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "contacte");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 16)(29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 22)(38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 23)(41, "div", 24)(42, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " SSL Seguro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " GDPR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " ISO 27001 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " WCAG 2.1 AA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, FooterComponent_span_55_Template, 3, 2, "span", 33)(56, FooterComponent_span_56_Template, 3, 0, "span", 34)(57, FooterComponent_span_57_Template, 3, 0, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_58_listener() {
          return ctx.scrollToTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, " \u2191 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " SIGPAZ. Todos los derechos reservados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentUserRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasMFA);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("visible", ctx.isScrolled);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
    styles: [".footer-modern[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-top: 2px solid var(--border-color);\n  padding: 40px 0 20px;\n  margin-top: 40px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 5px;\n}\n.footer-modern[_ngcontent-%COMP%]:not(.sidebar-collapsed) {\n  width: calc(100% - 280px) !important;\n  margin-left: 280px !important;\n}\n.footer-modern.sidebar-collapsed[_ngcontent-%COMP%] {\n  width: calc(100% - 70px) !important;\n  margin-left: 70px !important;\n}\n.footer-modern[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 40px;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 40px;\n  margin-bottom: 30px;\n}\n@media (max-width: 768px) {\n  .footer-modern[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 30px;\n    text-align: center;\n  }\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  background: linear-gradient(135deg, var(--primary), var(--primary-light));\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.5px;\n  transition: all 0.3s ease;\n  margin-bottom: 10px;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-left: -15px;\n  width: 170px;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.5;\n  font-size: 0.8rem;\n  max-width: 280px;\n}\n@media (max-width: 768px) {\n  .footer-modern[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  flex: 2;\n  display: flex;\n  justify-content: flex-end;\n  gap: 60px;\n}\n@media (max-width: 768px) {\n  .footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 25px;\n    text-align: center;\n  }\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.85rem;\n  margin-bottom: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-muted);\n  text-decoration: none;\n  margin-bottom: 8px;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  transform: translateX(3px);\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .contact-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .contact-row[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  display: inline-flex;\n  align-items: center;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .contact-row[_ngcontent-%COMP%]   .contact-separator[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  opacity: 0.4;\n  font-size: 0.7rem;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .contact-row[_ngcontent-%COMP%]   .contacte-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  position: relative;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .contact-row[_ngcontent-%COMP%]   .contacte-link[_ngcontent-%COMP%]::before {\n  content: '\u2192';\n  margin-right: 0.2rem;\n  opacity: 0;\n  transition: all 0.2s ease;\n  display: inline-block;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .contact-row[_ngcontent-%COMP%]   .contacte-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(2px);\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .contact-row[_ngcontent-%COMP%]   .contacte-link[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  margin-right: 0.3rem;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n}\n@media (max-width: 768px) {\n  .footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.03);\n  transition: all 0.2s;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  transform: translateY(-2px);\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .links-group[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding-top: 20px;\n  border-top: 2px solid var(--border-color);\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  margin: 0;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-decoration: none;\n  font-size: 0.7rem;\n  transition: color 0.2s;\n}\n.footer-modern[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 45px;\n  height: 45px;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  font-size: 1.3rem;\n  cursor: pointer;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(20px);\n  transition: all 0.3s ease;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n}\n.back-to-top.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.back-to-top.bounce[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce 0.3s ease;\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  background: var(--primary-hover);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);\n}\n@media (max-width: 768px) {\n  .back-to-top[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n    width: 40px;\n    height: 40px;\n    font-size: 1.1rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@media (max-width: 1024px) {\n  .footer-modern[_ngcontent-%COMP%]:not(.sidebar-collapsed) {\n    width: calc(100% - 250px) !important;\n    margin-left: 250px !important;\n  }\n}\n@media (max-width: 768px) {\n  .footer-modern[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-left: 0 !important;\n    padding: 30px 0 15px;\n    margin-top: 30px;\n  }\n  .footer-modern[_ngcontent-%COMP%]:not(.sidebar-collapsed) {\n    width: 100% !important;\n    margin-left: 0 !important;\n  }\n  .footer-modern[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .footer-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .footer-links-bottom[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .footer-links[_ngcontent-%COMP%] {\n    gap: 20px !important;\n  }\n}\n@supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {\n  .footer-modern[_ngcontent-%COMP%] {\n    -webkit-backdrop-filter: blur(0px);\n            backdrop-filter: blur(0px);\n  }\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  flex-direction: column !important;\n  gap: 20px !important;\n}\n.footer-bottom[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.footer-bottom[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.footer-bottom[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   .version-info[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  opacity: 0.7;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-decoration: none;\n  font-size: 0.7rem;\n  transition: color 0.2s;\n  position: relative;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: '|';\n  position: absolute;\n  right: -12px;\n  opacity: 0.3;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .badge-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 0.7rem;\n  font-weight: 500;\n  cursor: help;\n  transition: all 0.2s ease;\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-muted);\n  border: 1px solid transparent;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.1);\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge.ssl[_ngcontent-%COMP%]:hover {\n  border-color: #10b981;\n  color: #10b981;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge.gdpr[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n  color: #3b82f6;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge.iso[_ngcontent-%COMP%]:hover {\n  border-color: #8b5cf6;\n  color: #8b5cf6;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge.wcag[_ngcontent-%COMP%]:hover {\n  border-color: #f59e0b;\n  color: #f59e0b;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge.roles[_ngcontent-%COMP%]:hover {\n  border-color: #ec4899;\n  color: #ec4899;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge.auth[_ngcontent-%COMP%]:hover {\n  border-color: #10b981;\n  color: #10b981;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge.mfa[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge.session[_ngcontent-%COMP%]:hover {\n  border-color: #06b6d4;\n  color: #06b6d4;\n}\n.footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge.permissions[_ngcontent-%COMP%]:hover {\n  border-color: #14b8a6;\n  color: #14b8a6;\n}\n.footer-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 20px 0;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);\n}\n@media (max-width: 768px) {\n  .footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .badge-group[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .cert-badge[_ngcontent-%COMP%] {\n    padding: 4px 10px;\n    font-size: 0.65rem;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child)::after {\n    display: none;\n  }\n  .footer-bottom[_ngcontent-%COMP%]   .footer-links-bottom[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0FBSEY7QUFNRTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7QUFKSjtBQVFFO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtBQU5KO0FBWEE7RUFxQkksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVBKO0FBaEJBO0VBMkJJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQVJKO0FBVUk7RUFBQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VBUEo7QUFDRjtBQTdCQTtFQXdDSSxPQUFBO0FBUko7QUFoQ0E7RUE0Q1EsZUFBQTtFQUNBLHlFQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVRSO0FBekNBO0VBdURNLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBWE47QUFuREE7RUFpRVEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVhSO0FBeERBO0VBd0VNLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBYk47QUFlTTtFQUFBO0lBQ0UsZUFBQTtFQVpOO0FBQ0Y7QUFuRUE7RUFvRkksT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFkSjtBQWdCSTtFQUFBO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUFiSjtBQUNGO0FBaEZBO0VBaUdRLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7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R1Y7QUErR0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHNGQUFBO0FBN0dGO0FBaUhBO0VBQ0U7SUFHTSxRQUFBO0VBakhOO0VBOEdBO0lBT00saUJBQUE7SUFDQSxrQkFBQTtFQWxITjtFQTBHQTtJQWFJLGFBQUE7RUFwSEo7RUF1R0E7SUFpQkksU0FBQTtFQXJISjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZPT1RFUiBNT0RFUk4gLSBDT04gU0lERUJBUiBDT0xMQVBTRSBZIEJBQ0sgVE8gVE9QXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4uZm9vdGVyLW1vZGVybiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItdG9wOjJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBwYWRkaW5nOiA0MHB4IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIC8vIEVzdGFkbyBjb24gc2lkZWJhciBleHBhbmRpZG9cbiAgJjpub3QoLnNpZGViYXItY29sbGFwc2VkKSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyODBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gRXN0YWRvIGNvbiBzaWRlYmFyIGNvbGFwc2Fkb1xuICAmLnNpZGViYXItY29sbGFwc2VkIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICB9XG5cbiAgLmZvb3Rlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMzBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZm9vdGVyLWJyYW5kIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgLmJyYW5kLWljb24ge1xuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeSksIHZhcigtLXByaW1hcnktbGlnaHQpKTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxvZ28tdGV4dCB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIG1heC13aWR0aDogMjgwcHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvb3Rlci1saW5rcyB7XG4gICAgZmxleDogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiA2MHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAyNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5saW5rcy1ncm91cCB7XG4gICAgICBoNCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBFc3RpbG9zIHBhcmEgY29udGFjdG8geSBjb250YWN0ZSBsYWRvIGEgbGFkb1xuICAgICAgLmNvbnRhY3Qtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5jb250YWN0LWxpbmsge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LXNlcGFyYXRvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0ZS1saW5rIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnw6LChsKSJztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9vdGVyLWJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxpbmtzLWJvdHRvbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAyMHB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9Uw4PCk04gQkFDSyBUTyBUT1Bcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAycmVtO1xuICByaWdodDogMnJlbTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cbiAgJi52aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgJi5ib3VuY2Uge1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDAuM3MgZWFzZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGJvdHRvbTogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gIDAlLFxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5mb290ZXItbW9kZXJuOm5vdCguc2lkZWJhci1jb2xsYXBzZWQpIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXItbW9kZXJuIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMzBweCAwIDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICY6bm90KC5zaWRlYmFyLWNvbGxhcHNlZCkge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZvb3Rlci1ib3R0b20ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZvb3Rlci1saW5rcy1ib3R0b20ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZm9vdGVyLWxpbmtzIHtcbiAgICBnYXA6IDIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU09QT1JURSBQQVJBIE5BVkVHQURPUkVTIEFOVElHVU9TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5Ac3VwcG9ydHMgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSkge1xuICAuZm9vdGVyLW1vZGVybiB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCk7XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTRUNVUklUWSBCQURHRVMgWSBDRVJUSUZJQ0FDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5mb290ZXItYm90dG9tIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICBnYXA6IDIwcHggIWltcG9ydGFudDtcblxuICAuY29weXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxuXG4gICAgLnZlcnNpb24taW5mbyB7XG4gICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICB9XG5cbiAgLmZvb3Rlci1saW5rcy1ib3R0b20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIGEge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuXG4gICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICd8JztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTEycHg7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VjdXJpdHktYmFkZ2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuYmFkZ2UtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5jZXJ0LWJhZGdlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY3Vyc29yOiBoZWxwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgfVxuXG4gICAgICAmLnNzbCB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzEwYjk4MTtcbiAgICAgICAgICBjb2xvcjogIzEwYjk4MTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmdkcHIge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMzYjgyZjY7XG4gICAgICAgICAgY29sb3I6ICMzYjgyZjY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5pc28ge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM4YjVjZjY7XG4gICAgICAgICAgY29sb3I6ICM4YjVjZjY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi53Y2FnIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjU5ZTBiO1xuICAgICAgICAgIGNvbG9yOiAjZjU5ZTBiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYucm9sZXMge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNlYzQ4OTk7XG4gICAgICAgICAgY29sb3I6ICNlYzQ4OTk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5hdXRoIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTBiOTgxO1xuICAgICAgICAgIGNvbG9yOiAjMTBiOTgxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYubWZhIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0O1xuICAgICAgICAgIGNvbG9yOiAjZWY0NDQ0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuc2Vzc2lvbiB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2YjZkNDtcbiAgICAgICAgICBjb2xvcjogIzA2YjZkNDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnBlcm1pc3Npb25zIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTRiOGE2O1xuICAgICAgICAgIGNvbG9yOiAjMTRiOGE2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5mb290ZXItZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCB0cmFuc3BhcmVudCk7XG59XG5cbi8vIFJlc3BvbnNpdmUgcGFyYSBiYWRnZXNcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWJvdHRvbSB7XG4gICAgLnNlY3VyaXR5LWJhZGdlcyB7XG4gICAgICAuYmFkZ2UtZ3JvdXAge1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgIH1cblxuICAgICAgLmNlcnQtYmFkZ2Uge1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5mb290ZXItbGlua3MtYm90dG9tIGE6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLWxpbmtzLWJvdHRvbSB7XG4gICAgICBnYXA6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 20590:
/*!**********************************************************!*\
  !*** ./src/app/core/services/chatbot-session.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatbotSessionService: () => (/* binding */ ChatbotSessionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class ChatbotSessionService {
  SESSION_KEY = 'chatbot_sesion_id';
  obtenerSesionId() {
    let sesionId = sessionStorage.getItem(this.SESSION_KEY);
    if (!sesionId) {
      sesionId = this.generarSesionId();
      sessionStorage.setItem(this.SESSION_KEY, sesionId);
    }
    return sesionId;
  }
  generarSesionId() {
    return `chat_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  }
  limpiarSesion() {
    sessionStorage.removeItem(this.SESSION_KEY);
  }
  static ɵfac = function ChatbotSessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ChatbotSessionService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ChatbotSessionService,
    factory: ChatbotSessionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28571:
/*!**********************************************************!*\
  !*** ./src/app/core/services/chatbot-storage.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatbotStorageService: () => (/* binding */ ChatbotStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class ChatbotStorageService {
  STORAGE_PREFIX = 'chatbot_';
  guardarMensajes(sesionId, mensajes) {
    // Convertir Date a string para almacenar
    const mensajesParaGuardar = mensajes.slice(-50).map(msg => ({
      ...msg,
      timestamp: msg.timestamp.toISOString()
    }));
    localStorage.setItem(`${this.STORAGE_PREFIX}${sesionId}`, JSON.stringify(mensajesParaGuardar));
  }
  cargarMensajes(sesionId) {
    const data = localStorage.getItem(`${this.STORAGE_PREFIX}${sesionId}`);
    if (data) {
      const parsed = JSON.parse(data);
      // Convertir string de vuelta a Date
      return parsed.map(msg => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
    }
    return null;
  }
  limpiarMensajes(sesionId) {
    localStorage.removeItem(`${this.STORAGE_PREFIX}${sesionId}`);
  }
  static ɵfac = function ChatbotStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ChatbotStorageService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ChatbotStorageService,
    factory: ChatbotStorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 42012:
/*!********************************************!*\
  !*** ./src/app/core/pipes/linkify.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkifyPipe: () => (/* binding */ LinkifyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class LinkifyPipe {
  transform(text) {
    if (!text) return text;
    // URL regex
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, url => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #00ff88; text-decoration: underline;">${url}</a>`;
    });
  }
  static ɵfac = function LinkifyPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LinkifyPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "linkify",
    type: LinkifyPipe,
    pure: true
  });
}

/***/ }),

/***/ 72263:
/*!**************************************************!*\
  !*** ./src/app/core/services/chatbot.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatbotService: () => (/* binding */ ChatbotService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 50698);





class ChatbotService {
  http;
  API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl + '/chatbot';
  constructor(http) {
    this.http = http;
  }
  obtenerHistorial(sesionId) {
    return this.http.get(`${this.API_URL}/historial?sesion_id=${sesionId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resp => {
      if (resp.data && resp.data.length > 0) {
        return resp.data.map(msg => {
          // Determinar el sender de forma segura
          let sender = 'robot';
          if (msg.remitente === 'usuario') {
            sender = 'user';
          } else if (msg.remitente === 'asistente' || msg.remitente === 'robot') {
            sender = 'robot';
          }
          return {
            id: msg.id,
            sender: sender,
            text: msg.contenido,
            timestamp: new Date(msg.fechaCompleta || msg.fecha)
          };
        });
      }
      return [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([])));
  }
  calificar(mensajeId, puntuacion, fueUtil) {
    return this.http.post(`${this.API_URL}/calificar`, {
      mensaje_id: mensajeId,
      puntuacion,
      fue_util: fueUtil
    });
  }
  limpiarHistorial(sesionId) {
    return this.http.delete(`${this.API_URL}/historial?sesion_id=${sesionId}`);
  }
  enviarMensaje(mensaje, sesionId) {
    return this.http.post(`${this.API_URL}/mensaje`, {
      mensaje,
      sesion_id: sesionId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resp => {
      if (resp.data && resp.data.respuesta) {
        // Agregar flag para indicar que el texto tiene formato
        resp.data.html = this.textoAHTML(resp.data.respuesta);
      }
      return resp;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error al enviar mensaje:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
        success: false,
        data: {
          respuesta: 'Lo siento, ocurrió un error. Por favor, intenta de nuevo.',
          fuente: 'error'
        }
      });
    }));
  }
  textoAHTML(texto) {
    let html = texto.replace(/\n/g, '<br>');
    html = html.replace(/(\d+)\.\s+([^\n]+)/g, '<li>$2</li>');
    html = html.replace(/<li>(.*?)<\/li>/g, '<ol><li>$1</li></ol>');
    html = html.replace(/-\s+([^\n]+)/g, '<li>$1</li>');
    html = html.replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return html;
  }
  static ɵfac = function ChatbotService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ChatbotService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ChatbotService,
    factory: ChatbotService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 96867:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/help-support/strategies/message-processor.strategy.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssistantMessageProcessor: () => (/* binding */ AssistantMessageProcessor),
/* harmony export */   SystemMessageProcessor: () => (/* binding */ SystemMessageProcessor),
/* harmony export */   UserMessageProcessor: () => (/* binding */ UserMessageProcessor)
/* harmony export */ });
// Estrategia para mensajes de usuario
class UserMessageProcessor {
  procesarMensaje(mensaje) {
    return {
      ...mensaje,
      text: this.sanitizarTexto(mensaje.text)
    };
  }
  puedeProcesar(mensaje) {
    return mensaje.sender === 'user';
  }
  sanitizarTexto(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}
// Estrategia para mensajes del asistente
class AssistantMessageProcessor {
  procesarMensaje(mensaje) {
    return {
      ...mensaje,
      text: mensaje.text
    };
  }
  puedeProcesar(mensaje) {
    return mensaje.sender === 'robot';
  }
  formatearRespuesta(texto) {
    if (texto.includes('código maestro') || texto.includes('codigo maestro')) {
      texto = '🔐 ' + texto;
    }
    if (texto.includes('error') || texto.includes('problema')) {
      texto = '⚠️ ' + texto;
    }
    if (texto.includes('éxito') || texto.includes('correctamente')) {
      texto = '✅ ' + texto;
    }
    if (texto.includes('bienvenido') || texto.includes('hola')) {
      texto = '🤖 ' + texto;
    }
    return texto;
  }
}
// Estrategia para mensajes de sistema
class SystemMessageProcessor {
  procesarMensaje(mensaje) {
    return {
      ...mensaje,
      text: `<span class="sigpaz-system-message">ℹ️ ${mensaje.text}</span>`
    };
  }
  puedeProcesar(mensaje) {
    return mensaje.sender === 'system';
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621.js.map