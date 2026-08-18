# SIGPAZ - Sistema Full-Stack (Laravel + Angular)

Sistema full-stack para la gestión de casos y control de asistencia del personal en el Módulo de Justicia de Paz Comunal "Circuito: Fuerza Revolucionaria".

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
