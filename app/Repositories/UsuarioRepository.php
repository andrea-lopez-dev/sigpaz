<?php

namespace App\Repositories;

use App\Models\Usuario;
use App\Interfaces\Repositories\UsuarioRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuarioRepository implements UsuarioRepositoryInterface
{
public function paginateWithFilters(array $filters = [], int $perPage = 15): LengthAwarePaginator
{
    $query = Usuario::with(['personal', 'rol']);

    if (!empty($filters['rol_id'])) {
        $query->where('rol_id', $filters['rol_id']);
    }

    if (isset($filters['activo'])) {
        $query->where('activo', filter_var($filters['activo'], FILTER_VALIDATE_BOOLEAN));
    }

    if (!empty($filters['search'])) {
        $search = $filters['search'];
        $query->where(function($q) use ($search) {
            $q->where('nombre_usuario', 'ilike', "%{$search}%")
              ->orWhere('email', 'ilike', "%{$search}%");
        });
    }

    return $query->orderBy('fecha_creacion', 'desc')
                ->paginate($perPage);
}
public function findById(int $id): ?Usuario
    {
        return Usuario::with(['personal', 'rol', 'preguntasSeguridad'])
                    ->find($id);
    }

    public function findByEmail(string $email): ?Usuario
    {
        return Usuario::where('email', $email)->first();
    }

    public function findByUsername(string $username): ?Usuario
    {
        return Usuario::where('nombre_usuario', $username)->first();
    }

    public function findByPersonalId(int $personalId): ?Usuario
    {
        return Usuario::where('personal_id', $personalId)->first();
    }

    public function all(): Collection
    {
        return Usuario::with(['personal', 'rol'])
                    ->orderBy('fecha_creacion', 'desc')
                    ->get();
    }

    public function paginate(int $perPage = 15): LengthAwarePaginator
    {
        return Usuario::with(['personal', 'rol'])
                    ->orderBy('fecha_creacion', 'desc')
                    ->paginate($perPage);
    }

public function create(array $data): Usuario
{
    return DB::transaction(function () use ($data) {
        $data['contrasena_hash'] = Hash::make($data['password']);
        unset($data['password']);

        // ✅ Convertir booleanos a strings para PostgreSQL
        $data['activo'] = $data['activo'] ? 'true' : 'false';
        $data['requiere_cambio_contrasena'] = $data['requiere_cambio_contrasena'] ? 'true' : 'false';

        \Log::info('Datos a guardar (string version)', [
            'activo' => $data['activo'],
            'requiere_cambio' => $data['requiere_cambio_contrasena']
        ]);

        // ✅ CORREGIDO: Usar 'usuario_id' en lugar de 'id'
        $id = DB::table('usuario')->insertGetId([
            'nombre_usuario' => $data['nombre_usuario'],
            'email' => $data['email'],
            'contrasena_hash' => $data['contrasena_hash'],
            'personal_id' => $data['personal_id'],
            'rol_id' => $data['rol_id'],
            'activo' => DB::raw('TRUE'),
            'requiere_cambio_contrasena' => DB::raw('TRUE'),
            'fecha_creacion' => now()
        ], 'usuario_id');  // ✅ Especificar el nombre correcto de la columna primary key

        $usuario = Usuario::find($id);

        if (!empty($data['preguntas_seguridad'])) {
            $this->asignarPreguntasSeguridad($usuario, $data['preguntas_seguridad']);
        }

        return $usuario->load(['personal', 'rol', 'preguntasSeguridad']);
    });
}


public function update(int $id, array $data): bool
{
    $usuario = $this->findById($id);

    if (!$usuario) {
        \Log::error('Usuario no encontrado para actualizar', ['id' => $id]);
        return false;
    }

    // ✅ Usar DB::table directamente para actualizar
    $updateData = [];

    if (isset($data['nombre_usuario'])) {
        $updateData['nombre_usuario'] = $data['nombre_usuario'];
    }
    if (isset($data['email'])) {
        $updateData['email'] = $data['email'];
    }
    if (isset($data['rol_id'])) {
        $updateData['rol_id'] = $data['rol_id'];
    }
    if (isset($data['password'])) {
        $updateData['contrasena_hash'] = Hash::make($data['password']);
    }
    if (isset($data['token_reset_password'])) {
        $updateData['token_reset_password'] = $data['token_reset_password'];
    }
    if (isset($data['fecha_expiracion_token'])) {
        $updateData['fecha_expiracion_token'] = $data['fecha_expiracion_token'];
    }

    // ✅ Manejar booleanos con DB::raw
    if (isset($data['activo'])) {
        $updateData['activo'] = $data['activo'] ? DB::raw('TRUE') : DB::raw('FALSE');
    }
    if (isset($data['requiere_cambio_contrasena'])) {
        $updateData['requiere_cambio_contrasena'] = $data['requiere_cambio_contrasena'] ? DB::raw('TRUE') : DB::raw('FALSE');
    }

    // ✅ NUNCA actualizar fecha_creacion
    unset($updateData['fecha_creacion']);

    if (empty($updateData)) {
        return true;
    }

    try {
        $result = DB::table('usuario')
            ->where('usuario_id', $id)
            ->update($updateData);

        \Log::info('Update directo ejecutado', [
            'id' => $id,
            'data' => array_keys($updateData),
            'result' => $result
        ]);

        return $result > 0;
    } catch (\Exception $e) {
        \Log::error('Error en update directo', [
            'id' => $id,
            'error' => $e->getMessage()
        ]);
        throw $e;
    }
}

    public function delete(int $id): bool
    {
        $usuario = $this->findById($id);

        if (!$usuario) {
            return false;
        }

        return $usuario->delete();
    }

    public function incrementarIntentosFallidos(int $id): bool
    {
        $usuario = $this->findById($id);

        if (!$usuario) {
            return false;
        }

        $usuario->incrementarIntentosFallidos();
        return true;
    }

    public function resetearIntentosFallidos(int $id): bool
    {
        $usuario = $this->findById($id);

        if (!$usuario) {
            return false;
        }

        $usuario->resetearIntentosFallidos();
        return true;
    }

    public function bloquearUsuario(int $id): bool
    {
        $usuario = $this->findById($id);

        if (!$usuario) {
            return false;
        }

        $usuario->fecha_bloqueo = now()->addHours(24);
        return $usuario->save();
    }

    public function desbloquearUsuario(int $id): bool
    {
        $usuario = $this->findById($id);

        if (!$usuario) {
            return false;
        }

        $usuario->fecha_bloqueo = null;
        $usuario->intentos_fallidos = 0;
        return $usuario->save();
    }

    public function actualizarUltimoAcceso(int $id): bool
    {
        $usuario = $this->findById($id);

        if (!$usuario) {
            return false;
        }

        $usuario->ultimo_acceso = now();
        return $usuario->save();
    }

    public function verificarUsuarioDuplicado(array $data): bool
    {
        return Usuario::where('email', $data['email'])
                    ->orWhere('nombre_usuario', $data['nombre_usuario'])
                    ->orWhere('personal_id', $data['personal_id'])
                    ->exists();
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
}
