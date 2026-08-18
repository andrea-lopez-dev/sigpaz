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

<p align="center">
  <table>
    <tr>
      <td align="center">
        <strong>Casos de Uso</strong><br>
        <img src="docs/diagrams/img/casos_uso.jpg?v=1" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/DIAGRAMA%20DE%20CASOS%20DE%20USO%20COMPLETO.html" target="_blank">📄 Ver HTML interactivo</a>
      </td>
      <td align="center">
        <strong>Diagrama C4</strong><br>
        <img src="docs/diagrams/img/diagrama_c4.jpg?v=1" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/DIAGRAMA%20C4.JPG" target="_blank">📄 Ver imagen original</a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <strong>Clases UML</strong><br>
        <img src="docs/diagrams/img/diagrama_clases.jpg?v=1" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/DIAGRAMA%20DE%20CLASES%20COMPLETO.html" target="_blank">📄 Ver HTML interactivo</a>
      </td>
      <td align="center">
        <strong>Esquema BD</strong><br>
        <img src="docs/diagrams/img/esquema_bd.jpg?v=1" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/ESQUEMA%20DE%20LA%20BD%20ORDENADO.html" target="_blank">📄 Ver HTML interactivo</a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <strong>Modelo ER</strong><br>
        <img src="docs/diagrams/img/modelo_er.jpg?v=1" width="300" style="border-radius: 8px; border: 1px solid #ddd;"><br>
        <a href="docs/diagrams/MODELO%20ER%20ORDENADO.html" target="_blank">📄 Ver HTML interactivo</a>
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
