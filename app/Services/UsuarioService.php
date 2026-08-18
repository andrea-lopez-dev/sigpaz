<?php
namespace App\Services;

use App\DTOs\Usuario\CrearUsuarioDTO;
use App\DTOs\Usuario\ActualizarUsuarioDTO;
use App\DTOs\Usuario\AsignarRolDTO;
use App\Interfaces\Services\UsuarioServiceInterface;
use App\Interfaces\Repositories\UsuarioRepositoryInterface;
use App\Interfaces\Repositories\PersonalRepositoryInterface;
use App\Models\Usuario;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UsuarioService implements UsuarioServiceInterface
{
    public function __construct(
        private UsuarioRepositoryInterface $usuarioRepository,
        private PersonalRepositoryInterface $personalRepository
    ) {}

   public function listarUsuarios(array $filtros = []): LengthAwarePaginator
{
    $query = Usuario::with(['personal.persona', 'rol']);

    if (!empty($filtros['rol_id'])) {
        $query->where('rol_id', $filtros['rol_id']);
    }

    if (isset($filtros['activo'])) {
        $query->where('activo', filter_var($filtros['activo'], FILTER_VALIDATE_BOOLEAN));
    }

    if (!empty($filtros['search'])) {
        $search = $filtros['search'];
        $query->where(function($q) use ($search) {
            $q->where('nombre_usuario', 'ilike', "%{$search}%")
              ->orWhere('email', 'ilike', "%{$search}%");
        });
    }

    $perPage = $filtros['per_page'] ?? 15;

    return $query->orderBy('fecha_creacion', 'desc')
                ->paginate($perPage);
}

    public function obtenerUsuario(int $id): JsonResponse
    {
        $usuario = $this->usuarioRepository->findById($id);

        if (!$usuario) {
            return response()->json([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $usuario->load(['personal.persona', 'rol', 'preguntasSeguridad'])
        ], 200);
    }

    public function crearUsuario(CrearUsuarioDTO $dto): JsonResponse
    {
        try {
            return DB::transaction(function () use ($dto) {
                // Validar que el personal existe
                $personal = $this->personalRepository->findById($dto->personal_id);
                if (!$personal) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Personal no encontrado'
                    ], 404);
                }

                // Verificar que el personal no tenga usuario
                $usuarioExistente = $this->usuarioRepository->findByPersonalId($dto->personal_id);
                if ($usuarioExistente) {
                    return response()->json([
                        'success' => false,
                        'message' => 'El personal ya tiene un usuario asociado'
                    ], 409);
                }

                // Verificar duplicados
                if ($this->usuarioRepository->verificarUsuarioDuplicado([
                    'email' => $dto->email,
                    'nombre_usuario' => $dto->nombre_usuario,
                    'personal_id' => $dto->personal_id
                ])) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Ya existe un usuario con estos datos'
                    ], 409);
                }

                // Crear usuario
                $usuarioData = [
                    'nombre_usuario' => $dto->nombre_usuario,
                    'email' => $dto->email,
                    'password' => $dto->password,
                    'personal_id' => $dto->personal_id,
                    'rol_id' => $dto->rol_id,
                    'activo' => $dto->activo,
                    'requiere_cambio_contrasena' => $dto->requiere_cambio_contrasena
                ];

                $usuario = $this->usuarioRepository->create($usuarioData);

                // Asignar preguntas de seguridad si existen
                if (!empty($dto->preguntas_seguridad)) {
                    $this->asignarPreguntasSeguridad($usuario, $dto->preguntas_seguridad);
                }

                Log::info('Usuario creado', [
                    'usuario_id' => $usuario->usuario_id,
                    'email' => $usuario->email
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Usuario creado exitosamente',
                    'data' => $usuario->load(['personal.persona', 'rol'])
                ], 201);
            });
        } catch (\Exception $e) {
            Log::error('Error al crear usuario', ['error' => $e->getMessage()]);
            return response()->json([
                'success' => false,
                'message' => 'Error al crear usuario: ' . $e->getMessage()
            ], 500);
        }
    }

    public function actualizarUsuario(int $id, ActualizarUsuarioDTO $dto): JsonResponse
    {
        try {
            $usuario = $this->usuarioRepository->findById($id);

            if (!$usuario) {
                return response()->json([
                    'success' => false,
                    'message' => 'Usuario no encontrado'
                ], 404);
            }

            $data = [];

            if ($dto->nombre_usuario !== null) {
                $data['nombre_usuario'] = $dto->nombre_usuario;
            }
            if ($dto->email !== null) {
                $data['email'] = $dto->email;
            }
            if ($dto->rol_id !== null) {
                $data['rol_id'] = $dto->rol_id;
            }
            if ($dto->activo !== null) {
                $data['activo'] = $dto->activo;
            }
            if ($dto->requiere_cambio_contrasena !== null) {
                $data['requiere_cambio_contrasena'] = $dto->requiere_cambio_contrasena;
            }
            if (!empty($dto->password)) {
                $data['password'] = $dto->password;
            }

            if (!empty($data)) {
                $this->usuarioRepository->update($id, $data);
            }

            return response()->json([
                'success' => true,
                'message' => 'Usuario actualizado exitosamente'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar usuario: ' . $e->getMessage()
            ], 500);
        }
    }

    public function eliminarUsuario(int $id): JsonResponse
    {
        try {
            $usuario = $this->usuarioRepository->findById($id);

            if (!$usuario) {
                return response()->json([
                    'success' => false,
                    'message' => 'Usuario no encontrado'
                ], 404);
            }

            // Verificar que no sea el último administrador activo
            if ($usuario->rol_id === 1 && $this->esUltimoAdministradorActivo($id)) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se puede eliminar el último administrador activo'
                ], 409);
            }

            $this->usuarioRepository->delete($id);

            Log::info('Usuario eliminado', [
                'usuario_id' => $id,
                'email' => $usuario->email
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Usuario eliminado exitosamente'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al eliminar usuario: ' . $e->getMessage()
            ], 500);
        }
    }

    public function asignarRol(AsignarRolDTO $dto): JsonResponse
    {
        $usuario = $this->usuarioRepository->findById($dto->usuario_id);

        if (!$usuario) {
            return response()->json([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }

        $this->usuarioRepository->update($dto->usuario_id, [
            'rol_id' => $dto->rol_id
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Rol asignado exitosamente'
        ], 200);
    }

    public function desbloquearUsuario(int $id): JsonResponse
    {
        $usuario = $this->usuarioRepository->findById($id);

        if (!$usuario) {
            return response()->json([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }

        $this->usuarioRepository->desbloquearUsuario($id);

        return response()->json([
            'success' => true,
            'message' => 'Usuario desbloqueado exitosamente'
        ], 200);
    }

public function cambiarEstado(int $id, bool $activo): JsonResponse
{
    try {
        // ✅ Usar DB::table directamente para evitar problemas de casting
        $updated = DB::table('usuario')
            ->where('usuario_id', $id)
            ->update(['activo' => $activo ? DB::raw('TRUE') : DB::raw('FALSE')]);

        \Log::info('Cambio de estado directo', [
            'id' => $id,
            'activo' => $activo,
            'updated' => $updated
        ]);

        if (!$updated) {
            return response()->json([
                'success' => false,
                'message' => 'No se pudo actualizar el estado del usuario'
            ], 500);
        }

        $estado = $activo ? 'activado' : 'desactivado';

        return response()->json([
            'success' => true,
            'message' => "Usuario {$estado} exitosamente"
        ], 200);

    } catch (\Exception $e) {
        \Log::error('Error al cambiar estado de usuario: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error interno del servidor: ' . $e->getMessage()
        ], 500);
    }
}    public function verificarDuplicidad(array $datos): bool
    {
        return $this->usuarioRepository->verificarUsuarioDuplicado($datos);
    }

    private function asignarPreguntasSeguridad(Usuario $usuario, array $preguntas): void
    {
        $preguntasData = [];
        foreach ($preguntas as $pregunta) {
            $preguntasData[$pregunta['pregunta_id']] = [
                'respuesta_cifrada' => encrypt($pregunta['respuesta']),
                'fecha_creacion' => now()
            ];
        }
        $usuario->preguntasSeguridad()->sync($preguntasData);
    }

    private function esUltimoAdministradorActivo(int $excludeId = null): bool
    {
        $query = Usuario::where('rol_id', 1)->where('activo', true);

        if ($excludeId) {
            $query->where('usuario_id', '!=', $excludeId);
        }

        return $query->count() === 0;
    }


public function cambiarPassword(int $id, array $data): JsonResponse
{
    try {
        $usuario = $this->usuarioRepository->findById($id);

        if (!$usuario) {
            return response()->json([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }

        // Verificar contraseña actual si no es reset
        if (!isset($data['reset']) || !$data['reset']) {
            if (!Hash::check($data['current_password'], $usuario->contrasena_hash)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Contraseña actual incorrecta'
                ], 422);
            }
        }

        // Actualizar contraseña
        $this->usuarioRepository->update($id, [
            'password' => $data['password'],
            'requiere_cambio_contrasena' => false
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Contraseña cambiada exitosamente'
        ], 200);

    } catch (\Exception $e) {
        \Log::error('Error al cambiar contraseña: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error interno del servidor'
        ], 500);
    }
}
}
