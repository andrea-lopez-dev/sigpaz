# SIGPAZ - Sistema Full-Stack (Laravel + Angular)

<p align="center">
  <iframe width="700" height="394" 
          src="https://www.youtube.com/embed/Hh4Oe8qJCuA" 
          title="Demostración del sistema SIGPAZ" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</p>

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

<p align="center">
  <table>
    <tr>
      <td align="center">
        <strong>C4 - Contexto</strong><br>
        <img src="docs/diagrams/DIAGRAMA%20C4.JPG" width="300" style="border-radius: 8px; border: 1px solid #ddd;">
      </td>
      <td align="center">
        <strong>UML - Clases</strong><br>
        <img src="docs/diagrams/diagrama_clases.png" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/DIAGRAMA%20DE%20CLASES%20COMPLETO.html" target="_blank">📄 Ver HTML original</a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <strong>MER - Modelo ER</strong><br>
        <img src="docs/diagrams/modelo_er.png" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/MODELO%20ER%20ORDENADO.html" target="_blank">📄 Ver HTML original</a>
      </td>
      <td align="center">
        <strong>MER - Esquema BD</strong><br>
        <img src="docs/diagrams/esquema_bd.png" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/ESQUEMA%20DE%20LA%20BD%20ORDENADO.html" target="_blank">📄 Ver HTML original</a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <strong>UML - Actividades</strong><br>
        <img src="docs/diagrams/actividades.png" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/DIAGRAMA%20DE%20ACTIVIDADES%20ORDEN...html" target="_blank">📄 Ver HTML original</a>
      </td>
      <td align="center">
        <strong>Casos de Uso</strong><br>
        <img src="docs/diagrams/casos_uso.png" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/DIAGRAMAS%20DE%20CASOS%20D%20EUSO%20OR...html" target="_blank">📄 Ver HTML original</a>
      </td>
    </tr>
  </table>
</p>

> 🖱️ **Nota:** Los archivos HTML originales de los diagramas son **interactivos**. Si los descargas y los abres en tu navegador, podrás hacer zoom, arrastrar los elementos, hacer clic en enlaces y explorar los diagramas con todas sus funcionalidades originales de Astah. Puedes encontrarlos en la carpeta `docs/diagrams/` del repositorio.


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
