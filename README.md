# SIGPAZ Backend - API RESTful con Laravel 12

API del sistema SIGPAZ para la gestión de casos y control de asistencia del personal en el Módulo de Justicia de Paz Comunal "Circuito: Fuerza Revolucionaria".

## Stack Tecnológico

Framework: Laravel 12 (PHP 8.2)
Base de Datos: PostgreSQL 12+ (con extensiones pgcrypto y pgvector)
Seguridad: JWT (Sanctum), RBAC, MFA con OTP, Cifrado AES-256 (pgcrypto)
Arquitectura: MVC + Service Layer + Repository Pattern
Patrones GoF: Singleton, Factory Method, Adapter, Observer, Repository, Service Layer

## Estructura del Proyecto

```text
/
├── app/
│   ├── Http/
│   │   ├── Controllers/Api/      # Controladores REST (Auditoria, Backup, Cargo, Denuncia, etc.)
│   │   └── Middleware/            # Middleware personalizado
│   ├── Models/                    # Modelos Eloquent (Alertas, Denuncia, Persona, Usuario, etc.)
│   ├── Repositories/              # Capa de abstracción de datos (BaseRepository, DenunciaRepository)
│   ├── Services/                  # Lógica de negocio (DenunciaService, BackupService, ChatbotService)
│   ├── Contracts/                 # Interfaces para los servicios
│   ├── Enums/                     # Enumeraciones (EstadoDenuncia, TipoConflicto)
│   └── Exceptions/                # Manejo personalizado de excepciones
├── database/
│   ├── migrations/                # Migraciones para las 53 tablas
│   └── seeders/                   # Datos de prueba y catálogos iniciales
├── tests/                         # PHPUnit (Pruebas unitarias y de integración)
├── resources/views/emails/        # Plantillas para notificaciones por correo
└── bootstrap/                     # Configuración de la aplicación (Laravel 11)
```

## Instalación y Configuración

Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/sigpaz-backend.git
```


```bash
cd sigpaz-backend
```



Instalar dependencias y configurar entorno

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


## Pruebas
Ejecutar la suite de pruebas unitarias y de integración:

```bash
php artisan test
```

## Licencia
MIT License. [Ver archivo LICENSE](/LICENSE)
