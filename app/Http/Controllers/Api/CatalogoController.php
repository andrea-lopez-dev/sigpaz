<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoDocumento;
use App\Models\Genero;
use App\Models\EstadoCivil;
use App\Models\TipoVinculo;
use App\Models\Cargo;
use App\Models\TipoConflicto;
use App\Models\EstadoDenuncia;
use App\Models\Institucion;
use App\Models\TipoMedida;
use App\Models\EstadoAsistencia;
use App\Models\TipoNotificacion;
use App\Models\Usuario;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class CatalogoController extends Controller
{
    /**
     * Verificar permisos del usuario según los roles especificados
     */
   private function verificarPermisos(Usuario $usuario): array
{
    try {
        if (!$usuario || !$usuario->activo) {
            return ['puede_ver' => false, 'puede_modificar' => false, 'permisos' => []];
        }

        // Si el usuario no tiene rol, no puede ver catálogos
        if (!$usuario->rol) {
            return ['puede_ver' => false, 'puede_modificar' => false, 'permisos' => []];
        }

        $usuario->load('rol.permisos');

        // Obtener permisos
        $permisos = $usuario->rol->permisos->pluck('permiso_id')->toArray();

        Log::info('Permisos del usuario:', [
            'usuario_id' => $usuario->usuario_id,
            'rol' => $usuario->rol->nombre,
            'permisos' => $permisos
        ]);

        // Todos los usuarios con permisos 1, 2 o 3 pueden VER catálogos
        $puedeVer = count(array_intersect([1, 2, 3], $permisos)) > 0;

        // Solo ADMINISTRADOR DEL SISTEMA puede MODIFICAR (permiso 1)
        $puedeModificar = in_array(1, $permisos);

        return [
            'puede_ver' => $puedeVer,
            'puede_modificar' => $puedeModificar,
            'permisos' => $permisos
        ];

    } catch (\Exception $e) {
        Log::error('Error en verificarPermisos:', ['error' => $e->getMessage()]);
        return ['puede_ver' => false, 'puede_modificar' => false, 'permisos' => []];
    }
}

    /**
     * Verificar si el usuario puede ver catálogos
     */
    private function puedeVerCatalogos(Usuario $usuario): bool
    {
        $permisos = $this->verificarPermisos($usuario);
        return $permisos['puede_ver'];
    }

    /**
     * Verificar si el usuario puede modificar catálogos
     */
    private function puedeModificarCatalogos(Usuario $usuario): bool
    {
        $permisos = $this->verificarPermisos($usuario);
        return $permisos['puede_modificar'];
    }

    // ========== MÉTODOS PARA ADMINISTRACIÓN (Todos los registros) ==========

    public function tiposDocumento(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $tipos = TipoDocumento::orderBy('activo', 'desc')
                                  ->orderBy('nombre')
                                  ->get()
                                  ->map(function($tipo) use ($usuario) {
                                      return [
                                          'id' => $tipo->tipo_documento_id,
                                          'tipo_documento_id' => $tipo->tipo_documento_id,
                                          'nombre' => $tipo->nombre,
                                          'descripcion' => $tipo->descripcion,
                                          'activo' => $tipo->activo,
                                          'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                      ];
                                  });

            return response()->json([
                'success' => true,
                'data' => $tipos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de documento',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function sexos(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $sexos = Genero::orderBy('activo', 'desc')
                         ->orderBy('nombre')
                         ->get()
                         ->map(function($sexo) use ($usuario) {
                             return [
                                 'id' => $sexo->genero_id,
                                 'genero_id' => $sexo->genero_id,
                                 'nombre' => $sexo->nombre,
                                 'activo' => $sexo->activo,
                                 'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                             ];
                         });

            return response()->json([
                'success' => true,
                'data' => $sexos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener sexos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function estadosCiviles(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $estados = EstadoCivil::orderBy('activo', 'desc')
                                  ->orderBy('nombre')
                                  ->get()
                                  ->map(function($estado) use ($usuario) {
                                      return [
                                          'id' => $estado->estado_civil_id,
                                          'estado_civil_id' => $estado->estado_civil_id,
                                          'nombre' => $estado->nombre,
                                          'activo' => $estado->activo,
                                          'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                      ];
                                  });

            return response()->json([
                'success' => true,
                'data' => $estados
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estados civiles',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function tiposVinculo(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $tipos = TipoVinculo::orderBy('activo', 'desc')
                                ->orderBy('nombre')
                                ->get()
                                ->map(function($tipo) use ($usuario) {
                                    return [
                                        'id' => $tipo->tipo_vinculo_id,
                                        'tipo_vinculo_id' => $tipo->tipo_vinculo_id,
                                        'nombre' => $tipo->nombre,
                                        'descripcion' => $tipo->descripcion,
                                        'activo' => $tipo->activo,
                                        'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                    ];
                                });

            return response()->json([
                'success' => true,
                'data' => $tipos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de vínculo',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function cargos(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $cargos = Cargo::orderBy('activo', 'desc')
                           ->orderBy('nombre')
                           ->get()
                           ->map(function($cargo) use ($usuario) {
                               return [
                                   'id' => $cargo->cargo_id,
                                   'cargo_id' => $cargo->cargo_id,
                                   'nombre' => $cargo->nombre_cargo,
                                   'descripcion' => $cargo->descripcion,
                                   'activo' => $cargo->activo,
                                   'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                               ];
                           });

            return response()->json([
                'success' => true,
                'data' => $cargos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener cargos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function tiposConflicto(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $tipos = TipoConflicto::orderBy('activo', 'desc')
                                  ->orderBy('nombre')
                                  ->get()
                                  ->map(function($tipo) use ($usuario) {
                                      return [
                                          'id' => $tipo->tipo_conflicto_id,
                                          'tipo_conflicto_id' => $tipo->tipo_conflicto_id,
                                          'nombre' => $tipo->nombre,
                                          'descripcion' => $tipo->descripcion,
                                          'activo' => $tipo->activo,
                                          'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                      ];
                                  });

            return response()->json([
                'success' => true,
                'data' => $tipos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de conflicto',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function estadosDenuncia(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $estados = EstadoDenuncia::orderBy('activo', 'desc')
                                     ->orderBy('nombre')
                                     ->get()
                                     ->map(function($estado) use ($usuario) {
                                         return [
                                             'id' => $estado->estado_denuncia_id,
                                             'estado_denuncia_id' => $estado->estado_denuncia_id,
                                             'nombre' => $estado->nombre,
                                             'activo' => $estado->activo,
                                             'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                         ];
                                     });

            return response()->json([
                'success' => true,
                'data' => $estados
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estados de denuncia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function instituciones(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $instituciones = Institucion::orderBy('activo', 'desc')
                                        ->orderBy('nombre')
                                        ->get()
                                        ->map(function($institucion) use ($usuario) {
                                            return [
                                                'id' => $institucion->institucion_id,
                                                'institucion_id' => $institucion->institucion_id,
                                                'nombre' => $institucion->nombre,
                                                'descripcion' => $institucion->descripcion,
                                                'activo' => $institucion->activo,
                                                'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                            ];
                                        });

            return response()->json([
                'success' => true,
                'data' => $instituciones
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener instituciones',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function tiposMedida(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $tipos = TipoMedida::orderBy('activo', 'desc')
                               ->orderBy('nombre')
                               ->get()
                               ->map(function($tipo) use ($usuario) {
                                   return [
                                       'id' => $tipo->tipo_medida_id,
                                       'tipo_medida_id' => $tipo->tipo_medida_id,
                                       'nombre' => $tipo->nombre,
                                       'descripcion' => $tipo->descripcion,
                                       'activo' => $tipo->activo,
                                       'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                   ];
                               });

            return response()->json([
                'success' => true,
                'data' => $tipos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de medida',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function estadosAsistencia(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $estados = EstadoAsistencia::orderBy('activo', 'desc')
                                       ->orderBy('nombre')
                                       ->get()
                                       ->map(function($estado) use ($usuario) {
                                           return [
                                               'id' => $estado->estado_asistencia_id,
                                               'estado_asistencia_id' => $estado->estado_asistencia_id,
                                               'nombre' => $estado->nombre,
                                               'activo' => $estado->activo,
                                               'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                           ];
                                       });

            return response()->json([
                'success' => true,
                'data' => $estados
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estados de asistencia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function tiposNotificacion(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $tipos = TipoNotificacion::orderBy('activo', 'desc')
                                     ->orderBy('nombre')
                                     ->get()
                                     ->map(function($tipo) use ($usuario) {
                                         return [
                                             'id' => $tipo->tipo_notificacion_id,
                                             'tipo_notificacion_id' => $tipo->tipo_notificacion_id,
                                             'nombre' => $tipo->nombre,
                                             'descripcion' => $tipo->descripcion,
                                             'activo' => $tipo->activo,
                                             'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                         ];
                                     });

            return response()->json([
                'success' => true,
                'data' => $tipos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de notificación',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // ========== MÉTODOS PARA FORMULARIOS (Solo activos) ==========

    public function tiposDocumentoActivos(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $tipos = TipoDocumento::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $tipos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de documento activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function sexosActivos(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $sexos = Genero::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $sexos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener sexos activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function estadosCivilesActivos(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $estados = EstadoCivil::activos()
                                  ->orderBy('nombre')
                                  ->get()
                                  ->map(function($estado) use ($usuario) {
                                      return [
                                          'id' => $estado->estado_civil_id,
                                          'estado_civil_id' => $estado->estado_civil_id,
                                          'nombre' => $estado->nombre,
                                          'activo' => $estado->activo,
                                          'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                                      ];
                                  });

            return response()->json([
                'success' => true,
                'data' => $estados
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estados civiles',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function tiposVinculoActivos(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $tipos = TipoVinculo::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $tipos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de vínculo',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // ========== MÉTODOS ADICIONALES ==========

    public function cargosActivos(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            $cargos = Cargo::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $cargos
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener cargos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function catalogosPermitidos(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            if (!$usuario) {
                return response()->json([
                    'success' => false,
                    'message' => 'Usuario no autenticado'
                ], 401);
            }

            $permisosInfo = $this->verificarPermisos($usuario);

            if (!$permisosInfo['puede_ver']) {
                return response()->json([
                    'success' => true,
                    'data' => [
                        'catalogos' => [],
                        'puede_modificar' => false,
                        'mensaje' => 'No tiene permisos para ver catálogos'
                    ]
                ]);
            }

            $todosCatalogos = [
                'EstadoDenuncia',
                'TipoVinculo',
                'EstadoAsistencia',
                'TipoDocumento',
                'EstadoCivil',
                'Genero',
                'Institucion',
                'Cargo',
                'TipoConflicto',
                'TipoNotificacion',
                'TipoMedida'
            ];

            $catalogosInfo = [];
            foreach ($todosCatalogos as $catalogo) {
                $catalogosInfo[] = [
                    'nombre' => $catalogo,
                    'endpoint' => $this->getEndpointCatalogo($catalogo),
                    'endpoint_activos' => $this->getEndpointCatalogoActivos($catalogo)
                ];
            }

            return response()->json([
                'success' => true,
                'data' => [
                    'catalogos' => $catalogosInfo,
                    'puede_modificar' => $permisosInfo['puede_modificar'],
                    'permisos_usuario' => $permisosInfo['permisos']
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener catálogos permitidos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    private function getEndpointCatalogo(string $catalogo): string
    {
        $endpoints = [
            'EstadoDenuncia' => 'estados-denuncia',
            'TipoVinculo' => 'tipos-vinculo',
            'EstadoAsistencia' => 'estados-asistencia',
            'TipoDocumento' => 'tipos-documento',
            'EstadoCivil' => 'estados-civiles',
            'Genero' => 'sexos',
            'Institucion' => 'instituciones',
            'Cargo' => 'cargos',
            'TipoConflicto' => 'tipos-conflicto',
            'TipoNotificacion' => 'tipos-notificacion',
            'TipoMedida' => 'tipos-medida'
        ];

        return $endpoints[$catalogo] ?? strtolower($catalogo);
    }

    private function getEndpointCatalogoActivos(string $catalogo): string
    {
        $endpoints = [
            'EstadoDenuncia' => 'estados-denuncia/activos',
            'TipoVinculo' => 'tipos-vinculo/activos',
            'EstadoAsistencia' => 'estados-asistencia/activos',
            'TipoDocumento' => 'tipos-documento/activos',
            'EstadoCivil' => 'estados-civiles/activos',
            'Genero' => 'sexos/activos',
            'Institucion' => 'instituciones/activas',
            'Cargo' => 'cargos/activos',
            'TipoConflicto' => 'tipos-conflicto/activos',
            'TipoNotificacion' => 'tipos-notificacion/activos',
            'TipoMedida' => 'tipos-medida/activos'
        ];

        return $endpoints[$catalogo] ?? strtolower($catalogo) . '/activos';
    }


// ========== MÉTODOS CRUD PARA ADMINISTRACIÓN ==========

/**
 * Crear un nuevo tipo de medida
 */
public function crearTipoMedida(Request $request): JsonResponse
{
    try {
        Log::info('=== CREAR TIPO MEDIDA ===', $request->all());

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:100|unique:tipomedida,nombre',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        Log::info('📦 Datos validados:', $validated);

        // Crear el modelo
        $tipoMedida = new TipoMedida();
        $tipoMedida->nombre = $validated['nombre'];
        $tipoMedida->descripcion = $validated['descripcion'] ?? null;
        $tipoMedida->activo = $validated['activo'] ?? true;

        Log::info('🔍 Antes de guardar - activo:', [
            'valor' => $tipoMedida->activo,
            'tipo' => gettype($tipoMedida->activo)
        ]);

        $tipoMedida->save();

        Log::info('✅ Creado con ID: ' . $tipoMedida->tipo_medida_id);
        Log::info('🔍 Después de guardar - activo:', [
            'valor' => $tipoMedida->activo,
            'tipo' => gettype($tipoMedida->activo)
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de medida creado exitosamente',
            'data' => $tipoMedida
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        Log::error('❌ Error de validación:', $e->errors());
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('❌ Error:', [
            'message' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al crear tipo de medida: ' . $e->getMessage()
        ], 500);
    }
}
/**
 * Actualizar un tipo de medida existente
 */
public function actualizarTipoMedida(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ACTUALIZAR TIPO MEDIDA ===', ['id' => $id, 'data' => $request->all()]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoMedida = TipoMedida::find($id);

        if (!$tipoMedida) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de medida no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:100|unique:tipomedida,nombre,' . $id . ',tipo_medida_id',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        Log::info('📦 Datos para actualizar:', $validated);

        // ✅ Usar el método de la interfaz
        $tipoMedida = $tipoMedida->actualizarDatos($validated);

        Log::info('✅ Actualizado exitosamente:', [
            'id' => $tipoMedida->tipo_medida_id,
            'activo' => $tipoMedida->activo,
            'tipo_activo' => gettype($tipoMedida->activo)
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de medida actualizado exitosamente',
            'data' => $tipoMedida
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        Log::error('❌ Error de validación:', $e->errors());
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('❌ Error en actualizarTipoMedida:', [
            'message' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar tipo de medida: ' . $e->getMessage()
        ], 500);
    }
}
/**
 * Eliminar (físicamente) un tipo de medida con doble confirmación
 */
public function eliminarTipoMedida(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR TIPO MEDIDA (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoMedida = TipoMedida::find($id);

        if (!$tipoMedida) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de medida no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($tipoMedida->medidasCautelares()->exists()) {
            $count = $tipoMedida->medidasCautelares()->count();
            $relaciones['medidas_cautelares'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} medida(s) cautelar(es) asociada(s)";
        }

        // Si tienes más relaciones, agrégalas aquí
        // if ($tipoMedida->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar tipo de medida con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $tipoMedida->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $tipoMedida->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $tipoMedida->tipo_medida_id,
            'nombre' => $tipoMedida->nombre,
            'descripcion' => $tipoMedida->descripcion,
            'activo' => $tipoMedida->activo
        ];

        $tipoMedida->delete();

        Log::info('✅ Tipo de medida eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);

        //$this->registrarAuditoria('ELIMINAR', 'TipoMedida', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de medida eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente tipo de medida:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar tipo de medida: ' . $e->getMessage()
        ], 500);
    }
}
/**
 * Crear una nueva institución
 */
public function crearInstitucion(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:255|unique:institucion,nombre',
            'descripcion' => 'nullable|string|max:500',
            'estado' => 'boolean'
        ]);

        $institucion = Institucion::create([
            'nombre' => $validated['nombre'],
            'descripcion' => $validated['descripcion'] ?? null,
            'activo' => $validated['activo'] ?? true
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Institución creada exitosamente',
            'data' => $institucion
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando institución:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear institución',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

public function actualizarInstitucion(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $institucion = Institucion::find($id);

        if (!$institucion) {
            return response()->json([
                'success' => false,
                'message' => 'Institución no encontrada'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:255|unique:institucion,nombre,' . $id . ',institucion_id',
            'descripcion' => 'nullable|string|max:500',
            'activo' => 'boolean'
        ]);

        $institucion->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Institución actualizada exitosamente',
            'data' => $institucion->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando institución:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar institución',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}
/**
 * Eliminar (físicamente) un tipo de documento con doble confirmación
 */
public function eliminarInstitucion(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR INSTITUCION (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $institucion = Institucion::find($id);

        if (!$institucion) {
            return response()->json([
                'success' => false,
                'message' => 'Institucion no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($institucion->remisiones()->exists()) {
            $count = $institucion->remisiones()->count();
            $relaciones['instituciones'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} remisione(s) asociada(s)";
        }

        if ($institucion->sentencias()->exists()) {  $count = $institucion->sentencias()->count();
            $relaciones['sentencias'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} sentencia(s) asociada(s)";
            }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar tipo de documento con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $institucion->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $institucion->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $institucion->institucion,
            'nombre' => $institucion->nombre,
            'descripcion' => $institucion->descripcion,
            'activo' => $institucion->activo
        ];

        $institucion->delete();

        Log::info('✅ Institucion eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);


        //$this->registrarAuditoria('ELIMINAR', 'TipoDocumento', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Institucion eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente institucion:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar institucion: ' . $e->getMessage()
        ], 500);
    }
}

// ========== MÉTODOS CRUD PARA TIPOS DE DOCUMENTO ==========

/**
 * Crear un nuevo tipo de documento
 */
public function crearTipoDocumento(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:100|unique:tipodocumento,nombre',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $tipoDocumento = TipoDocumento::create([
            'nombre' => $validated['nombre'],
            'descripcion' => $validated['descripcion'] ?? null,
            'activo' => $validated['activo'] ?? true
        ]);

        Log::info('Tipo de documento creado:', [
            'usuario_id' => $usuario->usuario_id,
            'tipo_documento_id' => $tipoDocumento->id_tipo_doc
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de documento creado exitosamente',
            'data' => $tipoDocumento
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando tipo de documento:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear tipo de documento',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Actualizar un tipo de documento existente
 */
public function actualizarTipoDocumento(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoDocumento = TipoDocumento::find($id);

        if (!$tipoDocumento) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de documento no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:100|unique:tipodocumento,nombre,' . $id . ',tipo_documento_id',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $tipoDocumento->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de documento actualizado exitosamente',
            'data' => $tipoDocumento->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando tipo de documento:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar tipo de documento',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Eliminar (físicamente) un tipo de documento con doble confirmación
 */
public function eliminarTipoDocumento(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR TIPO DOCUMENTO (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoDocumento = TipoDocumento::find($id);

        if (!$tipoDocumento) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de documento no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($tipoDocumento->persona()->exists()) {
            $count = $tipoDocumento->persona()->count();
            $relaciones['personas'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} persona(s) asociada(s)";
        }

        // if ($tipoDocumento->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar tipo de documento con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $tipoDocumento->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $tipoDocumento->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $tipoDocumento->tipo_documento_id,
            'nombre' => $tipoDocumento->nombre,
            'descripcion' => $tipoDocumento->descripcion,
            'activo' => $tipoDocumento->activo
        ];

        $tipoDocumento->delete();

        Log::info('✅ Tipo de documento eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);


        //$this->registrarAuditoria('ELIMINAR', 'TipoDocumento', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de documento eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente tipo de documento:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar tipo de documento: ' . $e->getMessage()
        ], 500);
    }
}

// ========== MÉTODOS CRUD PARA SEXOS/GENEROS ==========

/**
 * Crear un nuevo sexo/género
 */
public function crearSexo(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:50|unique:genero,nombre',
            'activo' => 'boolean'
        ]);

        $sexo = Genero::create([
            'nombre' => $validated['nombre'],
            'activo' => $validated['activo'] ?? true
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Sexo creado exitosamente',
            'data' => $sexo
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando sexo:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear sexo',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Actualizar un sexo existente
 */
public function actualizarSexo(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $sexo = Genero::find($id);

        if (!$sexo) {
            return response()->json([
                'success' => false,
                'message' => 'Sexo no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:50|unique:genero,nombre,' . $id . ',genero_id',
            'activo' => 'boolean'
        ]);

        $sexo->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Sexo actualizado exitosamente',
            'data' => $sexo->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando sexo:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar sexo',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Eliminar (físicamente) un sexo con doble confirmación
 */
public function eliminarSexo(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR SEXO (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $sexo = Genero::find($id);

        if (!$sexo) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de documento no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($sexo->persona()->exists()) {
            $count = $sexo->persona()->count();
            $relaciones['personas'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} persona(s) asociada(s)";
        }

        // if ($sexo->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar sexo con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $sexo->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $sexo->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $sexo->genero_id,
            'nombre' => $sexo->nombre,
            'descripcion' => $sexo->descripcion,
            'activo' => $sexo->activo
        ];

        $sexo->delete();

        Log::info('✅ Sexo eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);


        //$this->registrarAuditoria('ELIMINAR', 'Genero', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Sexo eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente el sexo:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar el sexo: ' . $e->getMessage()
        ], 500);
    }
}


// ========== MÉTODOS CRUD PARA ESTADOS CIVILES ==========

/**
 * Crear un nuevo estado civil
 */
public function crearEstadoCivil(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:50|unique:estadocivil,nombre',
            'activo' => 'boolean'
        ]);

        $estadoCivil = EstadoCivil::create([
            'nombre' => $validated['nombre'],
            'activo' => $validated['activo'] ?? true
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Estado civil creado exitosamente',
            'data' => $estadoCivil
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando estado civil:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear estado civil',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Actualizar un estado civil existente
 */
public function actualizarEstadoCivil(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $estadoCivil = EstadoCivil::find($id);

        if (!$estadoCivil) {
            return response()->json([
                'success' => false,
                'message' => 'Estado civil no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:50|unique:estadocivil,nombre,' . $id . ',estado_civil_id',
            'activo' => 'boolean'
        ]);

        $estadoCivil->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Estado civil actualizado exitosamente',
            'data' => $estadoCivil->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando estado civil:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar estado civil',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Eliminar (físicamente) un estado civil con doble confirmación
 */
public function eliminarEstadoCivil(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR ESTADO CIVIL (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $estadoCivil = EstadoCivil::find($id);

        if (!$estadoCivil) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de documento no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($estadoCivil->persona()->exists()) {
            $count = $estadoCivil->persona()->count();
            $relaciones['personas'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} persona(s) asociada(s)";
        }

        // if ($estadoCivil->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar estado civil con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $estadoCivil->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $estadoCivil->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $estadoCivil->estado_civil_id,
            'nombre' => $estadoCivil->nombre,
            'descripcion' => $estadoCivil->descripcion,
            'activo' => $estadoCivil->activo
        ];

        $estadoCivil->delete();

        Log::info('✅ Estado civil eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);


        //$this->registrarAuditoria('ELIMINAR', 'Estadocivil', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Estado civil eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente el estado civil:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar el estado civil: ' . $e->getMessage()
        ], 500);
    }
}
// ========== MÉTODOS CRUD PARA TIPOS DE VÍNCULO ==========

/**
 * Crear un nuevo tipo de vínculo
 */
public function crearTipoVinculo(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:100|unique:tipovinculo,nombre',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $tipoVinculo = TipoVinculo::create([
            'nombre' => $validated['nombre'],
            'descripcion' => $validated['descripcion'] ?? null,
            'activo' => $validated['activo'] ?? true
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de vínculo creado exitosamente',
            'data' => $tipoVinculo
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando tipo de vínculo:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear tipo de vínculo',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Actualizar un tipo de vínculo existente
 */
public function actualizarTipoVinculo(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoVinculo = TipoVinculo::find($id);

        if (!$tipoVinculo) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de vínculo no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:100|unique:tipovinculo,nombre,' . $id . ',tipo_vinculo_id',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $tipoVinculo->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de vínculo actualizado exitosamente',
            'data' => $tipoVinculo->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando tipo de vínculo:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar tipo de vínculo',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Eliminar (físicamente) un tipo de vinculo con doble confirmación
 */
public function eliminarTipoVinculo(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR TIPO VINCULO (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoVinculo = TipoVinculo::find($id);

        if (!$tipoVinculo) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de medida no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($tipoVinculo->persona()->exists()) {
            $count = $tipoVinculo->persona()->count();
            $relaciones['personas'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} persona(s) asociada(s)";
        }

        // Si tienes más relaciones, agrégalas aquí
        // if ($tipoVinculo->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar tipo de vinculo con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $tipoVinculo->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $tipoVinculo->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $tipoVinculo->tipo_vinculo_id,
            'nombre' => $tipoVinculo->nombre,
            'descripcion' => $tipoVinculo->descripcion,
            'activo' => $tipoVinculo->activo
        ];

        $tipoVinculo->delete();

        Log::info('✅ Tipo de vinculo eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);

        //$this->registrarAuditoria('ELIMINAR', 'TipoVinculo', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de vinculo eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente tipo de vinculo:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar tipo de vinculo: ' . $e->getMessage()
        ], 500);
    }
}

// ========== MÉTODOS CRUD PARA CARGOS ==========

/**
 * Crear un nuevo cargo
 */
public function crearCargo(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:100|unique:cargo,nombre',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $cargo = Cargo::create([
            'nombre' => $validated['nombre'],
            'descripcion' => $validated['descripcion'] ?? null,
            'activo' => $validated['activo'] ?? true
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Cargo creado exitosamente',
            'data' => $cargo
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando cargo:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear cargo',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Actualizar un cargo existente
 */
public function actualizarCargo(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $cargo = Cargo::find($id);

        if (!$cargo) {
            return response()->json([
                'success' => false,
                'message' => 'Cargo no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:100|unique:cargo,nombre,' . $id . ',cargo_id',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $cargo->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Cargo actualizado exitosamente',
            'data' => $cargo->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando cargo:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar cargo',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}
/**
 * Eliminar (físicamente) un cargo con doble confirmación
 */
public function eliminarCargo(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR CARGO (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $cargo = Cargo::find($id);

        if (!$cargo) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de medida no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($cargo->personal()->exists()) {
            $count = $cargo->personal()->count();
            $relaciones['personal'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} personal asociado/a(s)";
        }


        // if ($cargo->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar cargo con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $cargo->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $cargo->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $cargo->cargo_id,
            'nombre' => $cargo->nombre,
            'descripcion' => $cargo->descripcion,
            'activo' => $cargo->activo
        ];

        $cargo->delete();

        Log::info('✅ Cargo eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);

        //$this->registrarAuditoria('ELIMINAR', 'Cargo', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Cargo eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente cargo:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar cargo: ' . $e->getMessage()
        ], 500);
    }
}

// ========== MÉTODOS CRUD PARA TIPOS DE CONFLICTO ==========

/**
 * Crear un nuevo tipo de conflicto
 */
public function crearTipoConflicto(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:100|unique:tipoconflicto,nombre',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $tipoConflicto = TipoConflicto::create([
            'nombre' => $validated['nombre'],
            'descripcion' => $validated['descripcion'] ?? null,
            'activo' => $validated['activo'] ?? true
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de conflicto creado exitosamente',
            'data' => $tipoConflicto
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando tipo de conflicto:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear tipo de conflicto',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Actualizar un tipo de conflicto existente
 */
public function actualizarTipoConflicto(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoConflicto = TipoConflicto::find($id);

        if (!$tipoConflicto) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de conflicto no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:100|unique:tipoconflicto,nombre,' . $id . ',tipo_conflicto_id',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $tipoConflicto->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de conflicto actualizado exitosamente',
            'data' => $tipoConflicto->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando tipo de conflicto:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar tipo de conflicto',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Eliminar (físicamente) un tipo conflicto con doble confirmación
 */
public function eliminarTipoConflicto(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR TIPO CONFLICTO (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoConflicto = TipoConflicto::find($id);

        if (!$tipoConflicto) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo conflicto no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($tipoConflicto->denuncias()->exists()) {
            $count = $tipoConflicto->denuncias()->count();
            $relaciones['denuncias'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} denuncia(s) asociada(s)";
        }

        // if ($tipoConflicto->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar tipo conflicto con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $tipoConflicto->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $tipoConflicto->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $tipoConflicto->tipo_conflicto_id,
            'nombre' => $tipoConflicto->nombre,
            'descripcion' => $tipoConflicto->descripcion,
            'activo' => $tipoConflicto->activo
        ];

        $tipoConflicto->delete();

        Log::info('✅ Tipo conflicto eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);


        //$this->registrarAuditoria('ELIMINAR', 'TipoConflicto', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Tipo conflicto eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente el tipo conflicto:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar el tipo conflicto: ' . $e->getMessage()
        ], 500);
    }
}

// ========== MÉTODOS CRUD PARA ESTADOS DE DENUNCIA ==========

/**
 * Crear un nuevo estado de denuncia
 */
public function crearEstadoDenuncia(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:50|unique:estadodenuncia,nombre',
            'activo' => 'boolean'
        ]);

        $estadoDenuncia = EstadoDenuncia::create([
            'nombre' => $validated['nombre'],
            'activo' => $validated['activo'] ?? true
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Estado de denuncia creado exitosamente',
            'data' => $estadoDenuncia
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando estado de denuncia:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear estado de denuncia',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Actualizar un estado de denuncia existente
 */
public function actualizarEstadoDenuncia(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $estadoDenuncia = EstadoDenuncia::find($id);

        if (!$estadoDenuncia) {
            return response()->json([
                'success' => false,
                'message' => 'Estado de denuncia no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:50|unique:estadodenuncia,nombre,' . $id . ',estado_denuncia_id',
            'activo' => 'boolean'
        ]);

        $estadoDenuncia->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Estado de denuncia actualizado exitosamente',
            'data' => $estadoDenuncia->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando estado de denuncia:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar estado de denuncia',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Eliminar (físicamente) un estado denuncia con doble confirmación
 */
public function eliminarEstadoDenuncia(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR ESTADO DENUNCIA (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $estadoDenuncia = EstadoDenuncia::find($id);

        if (!$estadoDenuncia) {
            return response()->json([
                'success' => false,
                'message' => 'Estado denuncia no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($estadoDenuncia->denuncias()->exists()) {
            $count = $estadoDenuncia->denuncias()->count();
            $relaciones['denuncias'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} denuncia(s) asociada(s)";
        }

        // if ($estadoDenuncia->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar estado denuncia con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $estadoDenuncia->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $estadoDenuncia->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $estadoDenuncia->estado_civil_id,
            'nombre' => $estadoDenuncia->nombre,
            'descripcion' => $estadoDenuncia->descripcion,
            'activo' => $estadoDenuncia->activo
        ];

        $estadoDenuncia->delete();

        Log::info('✅ Estado denuncia eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);


        //$this->registrarAuditoria('ELIMINAR', 'EstadoDenuncia', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Estado denuncia eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente el estado denuncia:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar el estado denuncia: ' . $e->getMessage()
        ], 500);
    }
}

// ========== MÉTODOS CRUD PARA ESTADOS DE ASISTENCIA ==========

/**
 * Crear un nuevo estado de asistencia
 */
public function crearEstadoAsistencia(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:50|unique:estadoasistencia,nombre',
            'activo' => 'boolean'
        ]);

        $estadoAsistencia = EstadoAsistencia::create([
            'nombre' => $validated['nombre'],
            'activo' => $validated['activo'] ?? true
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Estado de asistencia creado exitosamente',
            'data' => $estadoAsistencia
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando estado de asistencia:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear estado de asistencia',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Actualizar un estado de asistencia existente
 */
public function actualizarEstadoAsistencia(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $estadoAsistencia = EstadoAsistencia::find($id);

        if (!$estadoAsistencia) {
            return response()->json([
                'success' => false,
                'message' => 'Estado de asistencia no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:50|unique:estadoasistencia,nombre,' . $id . ',estado_asistencia_id',
            'activo' => 'boolean'
        ]);

        $estadoAsistencia->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Estado de asistencia actualizado exitosamente',
            'data' => $estadoAsistencia->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando estado de asistencia:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar estado de asistencia',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Eliminar (físicamente) un estado asistencia con doble confirmación
 */
public function eliminarEstadoAsistencia(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR ESTADO ASISTENCIA (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $estadoAsistencia = EstadoAsistencia::find($id);

        if (!$estadoAsistencia) {
            return response()->json([
                'success' => false,
                'message' => 'Estado asistencia no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($estadoAsistencia->asistencias()->exists()) {
            $count = $estadoAsistencia->asistencias()->count();
            $relaciones['asistencias'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} asistencia(s) asociada(s)";
        }

        // if ($estadoAsistencia->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar estado asistencia con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $estadoAsistencia->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $estadoAsistencia->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $estadoAsistencia->estado_asistencia_id,
            'nombre' => $estadoAsistencia->nombre,
            'descripcion' => $estadoAsistencia->descripcion,
            'activo' => $estadoAsistencia->activo
        ];

        $estadoAsistencia->delete();

        Log::info('✅ Estado asistencia eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);


        //$this->registrarAuditoria('ELIMINAR', 'EstadoAsistencia', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Estado asistencia eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente el estado asistencia:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar el estado asistencia: ' . $e->getMessage()
        ], 500);
    }
}
// ========== MÉTODOS CRUD PARA TIPOS DE NOTIFICACIÓN ==========

/**
 * Crear un nuevo tipo de notificación
 */
public function crearTipoNotificacion(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $validated = $request->validate([
            'nombre' => 'required|string|max:100|unique:tiponotificacion,nombre',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $tipoNotificacion = TipoNotificacion::create([
            'nombre' => $validated['nombre'],
            'descripcion' => $validated['descripcion'] ?? null,
            'activo' => $validated['activo'] ?? true
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de notificación creado exitosamente',
            'data' => $tipoNotificacion
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error creando tipo de notificación:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al crear tipo de notificación',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Actualizar un tipo de notificación existente
 */
public function actualizarTipoNotificacion(Request $request, $id): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoNotificacion = TipoNotificacion::find($id);

        if (!$tipoNotificacion) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo de notificación no encontrado'
            ], 404);
        }

        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:100|unique:tiponotificacion,nombre,' . $id . ',tipo_notificacion_id',
            'descripcion' => 'nullable|string|max:255',
            'activo' => 'boolean'
        ]);

        $tipoNotificacion->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Tipo de notificación actualizado exitosamente',
            'data' => $tipoNotificacion->fresh()
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        Log::error('Error actualizando tipo de notificación:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar tipo de notificación',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Eliminar (físicamente) un tipo notificacion con doble confirmación
 */
public function eliminarTipoNotificacion(Request $request, $id): JsonResponse
{
    try {
        Log::info('=== ELIMINAR TIPO NOTIFICACION (FÍSICO) ===', ['id' => $id]);

        $usuario = $request->user();

        if (!$this->puedeModificarCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para modificar catálogos'
            ], 403);
        }

        $tipoNotificacion = TipoNotificacion::find($id);

        if (!$tipoNotificacion) {
            return response()->json([
                'success' => false,
                'message' => 'Tipo notificacion no encontrado'
            ], 404);
        }

        // 🔴 VERIFICACIONES CRÍTICAS 🔴

        // Verificar relaciones
        $relaciones = [];
        $puedeEliminar = true;
        $mensajes = [];

        if ($tipoNotificacion->notificaciones()->exists()) {
            $count = $tipoNotificacion->notificaciones()->count();
            $relaciones['notificaciones'] = $count;
            $puedeEliminar = false;
            $mensajes[] = "tiene {$count} notificacione(s) asociada(s)";
        }

        // if ($tipoNotificacion->otraRelacion()->exists()) { ... }

        if (!$puedeEliminar) {
            Log::warning('⚠️ Intento de eliminar tipo notificacion con relaciones', [
                'id' => $id,
                'relaciones' => $relaciones
            ]);

            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar porque ' . implode(' y ', $mensajes),
                'relaciones' => $relaciones
            ], 409);
        }

        // Verificar confirmación explícita
        $confirmacion = $request->input('confirmacion');
        $nombreConfirmacion = $request->input('nombre_confirmacion');

        if (!$confirmacion || $confirmacion !== 'ELIMINAR') {
            return response()->json([
                'success' => false,
                'message' => 'Debe enviar confirmacion="ELIMINAR" para proceder',
                'requiere_confirmacion' => 'ELIMINAR'
            ], 400);
        }

        // Confirmación adicional con el nombre (opcional)
        if ($nombreConfirmacion && $nombreConfirmacion !== $tipoNotificacion->nombre) {
            return response()->json([
                'success' => false,
                'message' => 'El nombre de confirmación no coincide',
                'requiere_nombre_correcto' => $tipoNotificacion->nombre
            ], 400);
        }

        // 💀 ELIMINACIÓN FÍSICA 💀
        $datosEliminados = [
            'id' => $tipoNotificacion->tipo_notificacion_id,
            'nombre' => $tipoNotificacion->nombre,
            'descripcion' => $tipoNotificacion->descripcion,
            'activo' => $tipoNotificacion->activo
        ];

        $tipoNotificacion->delete();

        Log::info('✅ Tipo notificacion eliminado físicamente:', [
            'id' => $datosEliminados['id'],
            'nombre' => $datosEliminados['nombre'],
            'usuario_id' => $usuario->usuario_id,
            'ip' => $request->ip()
        ]);


        //$this->registrarAuditoria('ELIMINAR', 'TipoNotificacion', $datosEliminados, $usuario);

        return response()->json([
            'success' => true,
            'message' => 'Tipo notificacion eliminado físicamente exitosamente',
            'data' => [
                'id' => $datosEliminados['id'],
                'nombre' => $datosEliminados['nombre'],
                'eliminado' => true,
                'fecha' => now()->toISOString()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error eliminando físicamente el tipo de notificacion:', [
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar el tipo de notificacion: ' . $e->getMessage()
        ], 500);
    }
}

/**
     * Obtener tipos de medida activos
     */
    public function tiposMedidaActivos(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            // Verificar autenticación
            if (!$usuario) {
                Log::warning('Intento de acceso a tiposMedidaActivos sin autenticación');
                return response()->json([
                    'success' => false,
                    'message' => 'Usuario no autenticado'
                ], 401);
            }

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            // ✅ CORREGIDO: Usar DB::raw('true') para PostgreSQL
            $tiposMedida = TipoMedida::where('activo', '=', DB::raw('true'))
                ->orderBy('nombre')
                ->get()
                ->map(function($tipo) use ($usuario) {
                    return [
                        'id' => $tipo->tipo_medida_id,
                        'tipo_medida_id' => $tipo->tipo_medida_id,
                        'nombre' => $tipo->nombre,
                        'descripcion' => $tipo->descripcion,
                        'activo' => $tipo->activo,
                        'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $tiposMedida
            ]);

        } catch (\Exception $e) {
            Log::error('Error obteniendo tipos medida activos:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de medida: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Obtener instituciones activas
     */
    public function institucionesActivas(Request $request): JsonResponse
    {
        try {
            $usuario = $request->user();

            // Verificar autenticación
            if (!$usuario) {
                Log::warning('Intento de acceso a institucionesActivas sin autenticación');
                return response()->json([
                    'success' => false,
                    'message' => 'Usuario no autenticado'
                ], 401);
            }

            if (!$this->puedeVerCatalogos($usuario)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No tiene permisos para ver catálogos'
                ], 403);
            }

            // ✅ CORREGIDO: Usar DB::raw('true') para PostgreSQL
            $instituciones = Institucion::where('activo', '=', DB::raw('true'))
                ->orderBy('nombre')
                ->get()
                ->map(function($institucion) use ($usuario) {
                    return [
                        'id' => $institucion->institucion_id,
                        'institucion_id' => $institucion->institucion_id,
                        'nombre' => $institucion->nombre,
                        'descripcion' => $institucion->descripcion,
                        'activo' => $institucion->activo,
                        'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $instituciones
            ]);

        } catch (\Exception $e) {
            Log::error('Error obteniendo instituciones activas:', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al obtener instituciones: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
 * Obtener estados de asistencia activos solamente
 */
public function estadosAsistenciaActivos(Request $request): JsonResponse
{
    try {
        $usuario = $request->user();

        if (!$this->puedeVerCatalogos($usuario)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para ver catálogos'
            ], 403);
        }

        // ✅ Usar DB::raw('true') para PostgreSQL
        $estados = EstadoAsistencia::where('activo', '=', DB::raw('true'))
            ->orderBy('nombre')
            ->get()
            ->map(function($estado) use ($usuario) {
                return [
                    'id' => $estado->estado_asistencia_id,
                    'estado_asistencia_id' => $estado->estado_asistencia_id,
                    'nombre' => $estado->nombre,
                    'activo' => $estado->activo,
                    'puede_modificar' => $this->puedeModificarCatalogos($usuario)
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $estados
        ]);

    } catch (\Exception $e) {
        Log::error('Error obteniendo estados de asistencia activos:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al obtener estados de asistencia: ' . $e->getMessage()
        ], 500);
    }
}
}

