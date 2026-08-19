# SIGPAZ - Sistema Full-Stack (Laravel + Angular)

<p align="center">
  <img src="docs/media/sigpaz-demo.gif" 
       alt="Demostración del sistema SIGPAZ" 
       width="700" 
       style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
</p>

## Stack Tecnológico

- **Backend:** Laravel 12 (PHP 8.2) – API REST
- **Frontend:** Angular 21 (TypeScript, RxJS, SCSS) – SPA
- **Base de Datos:** PostgreSQL 12+ (con extensiones pgcrypto y pgvector)
- **Seguridad:** JWT (Sanctum), RBAC, MFA con OTP, Cifrado AES-256 (pgcrypto)
- **Arquitectura:** MVC + Service Layer + Repository Pattern (Backend) / MVVM con Signals (Frontend)
- **Patrones GoF:** Singleton, Factory Method, Adapter, Observer, Repository, Service Layer

## Estructura del Proyecto

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
└── bootstrap/                     # Configuración de la aplicación
```

## Documentación y Manuales

Puedes consultar los manuales del sistema en la carpeta `docs/manuals/`:

- [📄 Manual de Usuario](docs/manuals/MANUAL%20DE%20USUARIO%20FINAL.pdf)
- [📄 Manual Técnico](docs/manuals/MANUAL%20TECNCO%20FINAL.pdf)


## Instalación y Configuración

Clonar el repositorio

```bash
git clone https://github.com/<tu-usuario>/sigpaz.git
```


```bash
cd sigpaz
```



Instalar dependencias

```bash
composer install
```


```bash
cp .env.example .env
```


```bash
php artisan key:generate
```


Configurar la base de datos PostgreSQL y ejecutar migraciones


```bash
php artisan migrate --seed
```


Ejecutar el servidor de desarrollo


```bash
php artisan serve
```

## Diagramas del Sistema

Puedes visualizar todos los diagramas del sistema directamente en tu navegador sin necesidad de descargarlos:

📄 [Visualizar diagramas.pdf](https://docs.google.com/viewer?url=https://raw.githubusercontent.com/andrea-lopez-dev/sigpaz/main/docs/diagrams/diagramas.pdf&embedded=true)

Para explorar las versiones interactivas de cada diagrama, haz clic en los siguientes enlaces:

- 🔗 [Clases UML (HTML interactivo)](//docs/diagrams/DIAGRAMA_DE_CASOS_DE_USO.html)
- 🔗 [Clases UML (HTML interactivo)](//docs/diagrams/DIAGRAMA_DE_CLASES_COMPLETO.html)
- 🔗 [Esquema de Base de Datos (HTML interactivo)](//docs/diagrams/ESQUEMA_DE_LA_BD_ORDENADO.html)
- 🔗 [Modelo ER (HTML interactivo)](//docs/diagrams/MODELO_ER_ORDENADO.html)
- 
> 🖱️ **Nota:** Los archivos HTML de los diagramas son **interactivos**. Puedes hacer zoom, arrastrar los elementos y hacer clic en los enlaces directamente desde tu navegador.


## Características Clave

- **Autenticación:** JWT con autenticación multifactor (MFA) mediante preguntas de seguridad rotativas.

- **Autorización:** RBAC (Control de acceso basado en roles) para Jueces, Secretarios y Alguaciles.

- **Cifrado:** AES-256 para datos personales sensibles usando la extensión pgcrypto.

- **Auditoría:** Registro de eventos mediante Observers y Triggers de base de datos.

- **Backups:** Módulo de respaldo automático con integración a la nube (Patrón Adapter).
  
- **Frontend:** Aplicación Web Modular con Angular, temas dinámicos (Claro, Oscuro, Neón).


## Pruebas
Ejecutar la suite de pruebas unitarias y de integración:

```bash
php artisan test
```

## Licencia
MIT License. [Ver archivo LICENSE](/LICENSE)
