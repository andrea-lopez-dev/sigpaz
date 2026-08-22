# ⚖️ SIGPAZ - Sistema de Información para la Gestión de Casos y Control de Asistencia

<p align="center">
  <img src="docs/media/logo-sigpaz.png" alt="Logo SIGPAZ" width="180" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin-bottom: 20px;">
</p>

<p align="center">
  <em>Transformando la justicia de paz comunal a través de la tecnología y la transparencia.</em>
</p>

<div align="center">

[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com/)
[![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?style=flat-square&logo=php&logoColor=white)](https://www.php.net/)
[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=flat-square&logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![JWT](https://img.shields.io/badge/Auth-JWT%20%2B%20Sanctum-000000?style=flat-square)](https://laravel.com/docs/11.x/sanctum)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

</div>

<p align="center">
  <img src="docs/media/sigpaz-demo.gif" 
       alt="Demostración del sistema SIGPAZ" 
       width="900" 
       style="border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
</p>

---

## 📑 Índice

- [📖 Descripción General](#-descripción-general)
- [🚀 Stack Tecnológico](#-stack-tecnológico)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Características Clave](#️-características-clave)
- [🗄️ Arquitectura y Patrones](#️-arquitectura-y-patrones)
- [📄 Visualización de Diagramas](#-visualización-de-diagramas)
- [📚 Documentación y Manuales](#-documentación-y-manuales)
- [🛠️ Instalación y Configuración](#️-instalación-y-configuración)
- [🧪 Pruebas](#-pruebas)
- [🎯 Impacto Social](#-impacto-social)
- [📜 Licencia](#-licencia)

---

## 📖 Descripción General

**SIGPAZ** es un Sistema de Información web diseñado e implementado para modernizar y optimizar los procesos de gestión de casos y control de asistencia del personal en el **Módulo de Justicia de Paz Comunal "Circuito: Fuerza Revolucionaria"**, ubicado en Maracaibo, Estado Zulia, Venezuela.

Este sistema surge como respuesta a las limitaciones de la gestión manual basada en libros físicos y canales informales de comunicación (WhatsApp/Gmail), ofreciendo una plataforma centralizada, segura y escalable que automatiza tareas críticas como el registro de denuncias, conciliaciones, medidas cautelares, notificaciones, préstamos de expedientes, control de asistencia y la generación de reportes institucionales.

---

## 🚀 Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| **Backend** | Laravel 12 (PHP 8.2) – API REST |
| **Frontend** | Angular 21 (TypeScript, RxJS, SCSS) – SPA |
| **Base de Datos** | PostgreSQL 12+ (con extensiones `pgcrypto` y `pgvector`) |
| **Seguridad** | JWT (Sanctum), RBAC, MFA con OTP, Cifrado AES-256 (`pgcrypto`) |
| **Arquitectura** | MVC + Service Layer + Repository Pattern (Backend) / MVVM con Signals (Frontend) |
| **Patrones GoF** | Singleton, Factory Method, Adapter, Observer, Repository, Service Layer |
| **Metodología** | Feature Driven Development (FDD) |

---

## 📂 Estructura del Proyecto

```text
/
├── app/
│   ├── Http/
│   │   ├── Controllers/Api/      # Controladores REST
│   │   └── Middleware/            # Middleware personalizado
│   ├── Models/                    # Modelos Eloquent
│   ├── Repositories/              # Capa de abstracción de datos
│   ├── Services/                  # Lógica de negocio
│   ├── Contracts/                 # Interfaces para los servicios
│   ├── Enums/                     # Enumeraciones
│   └── Exceptions/                # Manejo personalizado de excepciones
├── database/
│   ├── migrations/                # Migraciones para las 53 tablas
│   ├── seeders/                   # Datos de prueba y catálogos iniciales
│   └── scripts/                   # Script SQL con la estructura de la BD
├── public/                        # Frontend de Angular compilado
├── routes/                        # Definición de rutas de la API
├── tests/                         # PHPUnit (Pruebas unitarias y de integración)
├── resources/views/emails/        # Plantillas para notificaciones por correo
├── bootstrap/                     # Configuración de la aplicación
├── docs/
│   ├── diagrams/
│   │   ├── DIAGRAMA_DE_CASOS_DE_USO.html
│   │   ├── DIAGRAMA_DE_CLASES_COMPLETO.html
│   │   ├── ESQUEMA_DE_LA_BD_ORDENADO.html
│   │   ├── MODELO_ER_ORDENADO.html
│   │   └── diagramas.pdf
│   ├── manuals/
│   │   ├── MANUAL_DE_USUARIO_FINAL.pdf
│   │   └── MANUAL_TECNICO_FINAL.pdf
│   └── media/
│       ├── TRIPTICOS.pdf
│       ├── logo-sigpaz.png
│       └── sigpaz-demo.gif
├── .gitignore                     # Archivos ignorados por Git
├── artisan                        # CLI de Laravel
├── composer.json                  # Dependencias de PHP
├── composer.lock                  # Bloqueo de versiones
├── phpunit.xml                    # Configuración de pruebas unitarias
├── vite.config.js                 # Configuración de Vite (Frontend)
├── LICENSE                        # Licencia del proyecto
└── README.md                      # Documentación del proyecto
```

## ⚙️ Características Clave

### 🔐 Seguridad y Autenticación

*   **Autenticación JWT:** Comunicación segura y sin estado (stateless) entre el frontend y el backend.
*   **Autenticación Multifactor (MFA):** Verificación secundaria mediante preguntas de seguridad rotativas con máx. 3 intentos.
*   **Control de Acceso Basado en Roles (RBAC):** Permisos específicos para Jueces de Paz, Secretarios y Alguaciles.
*   **Cifrado AES-256:** Protección de datos personales en reposo mediante la extensión `pgcrypto` de PostgreSQL.
*   **Cifrado en Tránsito:** Uso de TLS 1.3 para todas las comunicaciones.
*   **Auditoría de Eventos:** Registro de cada acción (crear, leer, actualizar, eliminar) mediante Observers y Triggers.

### 🛠️ Módulos Funcionales

**Gestión de Casos:**

*   Registro de denuncias con validación automática de duplicidad y generación de número de expediente único.
*   Digitalización de evidencias y cadena de custodia.
*   Programación de audiencias y generación automática de actas en PDF.
*   Sistema de votación para fallos en equidad (máx. 6 votos con cálculo automático).
*   Escalamiento automático al Sistema Judicial en casos fuera de competencia.

**Gestión de Medidas y Sentencias:**

*   Registro digital de medidas cautelares con seguimiento de vencimiento.
*   Generación automática de sentencias con firma digital del Juez.

**Administración del Personal:**

*   Marcación digital de entrada y salida (registro en tiempo real).
*   Cálculo automático de horas trabajadas y detección de llegadas tardías.
*   Gestión de inasistencias y justificaciones con carga de documentos.

**Gestión de Préstamos:**

*   Control digital de préstamos de expedientes con alertas automáticas a las 72 horas.

**Reportes y Dashboard:**

*   Dashboard con estadísticas en tiempo real y gráficos interactivos.
*   Exportación de reportes en múltiples formatos (PDF, XLSX, CSV).

**Asistencia Virtual (Chatbot):**

*   Chatbot con búsqueda semántica mediante `pgvector` para soporte técnico y generación de códigos OTP maestros.

---

## 🗄️ Arquitectura y Patrones

El sistema ha sido construido siguiendo los principios de ingeniería de software más reconocidos internacionalmente, garantizando un código limpio, desacoplado, testeable y escalable.

### Principios SOLID Aplicados

*   **S** - Responsabilidad Única (SRP)
*   **O** - Abierto/Cerrado (OCP)
*   **L** - Sustitución de Liskov (LSP)
*   **I** - Segregación de Interfaces (ISP)
*   **D** - Inversión de Dependencias (DIP)

### Patrones de Diseño GoF

*   **Singleton:** Servicios de autenticación en Angular.
*   **Factory Method:** Creación de estrategias de backup.
*   **Adapter:** Integración con múltiples proveedores de nube (Backblaze, MEGA, OneDrive).
*   **Observer:** Sistema de auditoría y notificaciones.
*   **Repository & Service Layer:** Abstracción del acceso a datos y lógica de negocio.

### Arquitectura del Sistema

*   **Backend:** Laravel 12 (MVC + Service Layer).
*   **Frontend:** Angular 21 (MVVM con Signals y RxJS).
*   **Base de Datos:** PostgreSQL 12+ con 53 tablas, 115 índices y 25 triggers para garantizar la integridad referencial y la automatización de procesos.

---

## 📄 Visualización de Diagramas

Puedes visualizar todos los diagramas del sistema directamente en tu navegador sin necesidad de descargarlos:

*   📄 [Visualizar todos los diagramas del sistema en PDF](https://docs.google.com/viewer?url=https://raw.githubusercontent.com/andrea-lopez-dev/sigpaz/main/docs/diagrams/diagramas.pdf&embedded=true)

### Visualización Interactiva

Explora las versiones interactivas de los diagramas a través de esta web en GitHub Pages:

🌐 **Visita la web de documentación:** [https://andrea-lopez-dev.github.io/](https://andrea-lopez-dev.github.io/)

> 🖱️ **Nota:** Puedes interactuar con los diagramas directamente desde tu navegador.

---

## 📚 Documentación y Manuales

Puedes consultar los manuales del sistema en la carpeta `docs/manuals/`:

*   📄 [Manual de Usuario](docs/manuals/MANUAL%20DE%20USUARIO%20FINAL.pdf)
*   📄 [Manual Técnico](docs/manuals/MANUAL%20TECNCO%20FINAL.pdf)
*   📄 [Tríptico Informativo](docs/media/TRIPTICOS.pdf)

---

## 🛠️ Instalación y Configuración

### Requisitos Previos

<table align="center">
  <thead>
    <tr>
      <th>Requisito</th>
      <th>Versión</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>PHP</strong></td>
      <td>8.2 o superior</td>
    </tr>
    <tr>
      <td><strong>Composer</strong></td>
      <td>2.x</td>
    </tr>
    <tr>
      <td><strong>Node.js</strong></td>
      <td>20.x o superior</td>
    </tr>
    <tr>
      <td><strong>PostgreSQL</strong></td>
      <td>12.0 o superior</td>
    </tr>
    <tr>
      <td><strong>Servidor Web</strong></td>
      <td>Apache / Nginx</td>
    </tr>
  </tbody>
</table>

### Pasos de Instalación

**1. Clonar el repositorio**

```bash
git clone https://github.com/<tu-usuario>/sigpaz.git
cd sigpaz
```

**2. Instalar dependencias del Backend**

```bash
composer install
```

**3. Configurar el entorno**

```bash
cp .env.example .env
php artisan key:generate
```

**4. Configurar la base de datos PostgreSQL**

Edita el archivo .env con las credenciales de PostgreSQL:

```bash
ini
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=sigpaz
DB_USERNAME=root
DB_PASSWORD=
```

**5. Ejecutar migraciones y seeders**

```bash
php artisan migrate --seed
```

**6. Instalar dependencias del Frontend**

```bash
npm install
npm run build
```

**7. Ejecutar el servidor de desarrollo**

```bash
php artisan serve
```

## 🧪 Pruebas

*  El sistema fue sometido a un riguroso proceso de validación:

*  Pruebas Unitarias: 100 pruebas (96% de éxito inicial).

*  Pruebas de Integración: 50 pruebas (92% de éxito inicial).

*  Pruebas de Sistema: Flujos End-to-End.

*  Pruebas de Aceptación: Validación con los usuarios finales.


**Ejecutar la suite de pruebas:**

```bash
php artisan test
```

## 🎯 Impacto Social

*  La implementación del sistema SIGPAZ ha producido una transformación sustancial en la dinámica operativa de la institución:

*  Reducción drástica de los tiempos de espera para la recepción de denuncias.

*  Trazabilidad digital completa de cada caso, garantizando la transparencia y el no repudio.

*  Protección de datos sensibles de grupos vulnerables (niños, niñas, adultos mayores, víctimas de violencia).

*  Posicionamiento institucional como una instancia moderna, eficiente y ambientalmente responsable (menor uso de papel).

*  Fortalecimiento del Poder Popular al dotar a la comunidad de una herramienta tecnológica de vanguardia.

## 📜 Licencia
📄 Ver archivo LICENSE para más detalles.
