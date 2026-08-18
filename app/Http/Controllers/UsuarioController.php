<?php
// app/Http/Controllers/UsuarioController.php
namespace App\Http\Controllers;

use App\DTOs\Usuario\CrearUsuarioDTO;
use App\DTOs\Usuario\ActualizarUsuarioDTO;
use App\DTOs\Usuario\AsignarRolDTO;
use App\Http\Requests\Usuario\CrearUsuarioRequest;
use App\Http\Requests\Usuario\ActualizarUsuarioRequest;
use App\Interfaces\Services\UsuarioServiceInterface;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function __construct(
        private UsuarioServiceInterface $usuarioService
    ) {}

   public function index(Request $request)
{
    $filtros = [];

    if ($request->has('rol_id') && $request->rol_id !== null && $request->rol_id !== '') {
        $filtros['rol_id'] = $request->rol_id;
    }
    if ($request->has('activo') && $request->activo !== null && $request->activo !== '') {
        $filtros['activo'] = filter_var($request->activo, FILTER_VALIDATE_BOOLEAN);
    }
    if ($request->has('search') && $request->search !== null && $request->search !== '') {
        $filtros['search'] = $request->search;
    }
    if ($request->has('per_page') && $request->per_page !== null) {
        $filtros['per_page'] = (int) $request->per_page;
    }

    $usuarios = $this->usuarioService->listarUsuarios($filtros);

    return response()->json([
        'data' => $usuarios->items(),
        'meta' => [
            'total' => $usuarios->total(),
            'per_page' => $usuarios->perPage(),
            'current_page' => $usuarios->currentPage(),
            'last_page' => $usuarios->lastPage()
        ]
    ], 200);
}

    public function show(int $id)
    {
        return $this->usuarioService->obtenerUsuario($id);
    }

    public function store(CrearUsuarioRequest $request)
    {
        $dto = CrearUsuarioDTO::fromArray($request->validated());
        return $this->usuarioService->crearUsuario($dto);
    }

    public function update(ActualizarUsuarioRequest $request, int $id)
    {
        $dto = ActualizarUsuarioDTO::fromArray($request->validated());
        return $this->usuarioService->actualizarUsuario($id, $dto);
    }

    public function destroy(int $id)
    {
        return $this->usuarioService->eliminarUsuario($id);
    }

    public function desbloquear(int $usuario)
    {
        return $this->usuarioService->desbloquearUsuario($usuario);
    }

public function cambiarEstado(Request $request, int $usuario)
{
    $request->validate([
        'activo' => ['required', 'boolean']
    ]);

    $activo = filter_var($request->activo, FILTER_VALIDATE_BOOLEAN);

    \Log::info('Controller cambiarEstado', [
        'usuario_id' => $usuario,
        'activo_raw' => $request->activo,
        'activo_convertido' => $activo
    ]);

    return $this->usuarioService->cambiarEstado($usuario, $activo);
}

    public function asignarRol(Request $request)
    {
        $request->validate([
            'usuario_id' => ['required', 'integer', 'exists:usuario,usuario_id'],
            'rol_id' => ['required', 'integer', 'exists:rol,rol_id']
        ]);

        $dto = AsignarRolDTO::fromArray($request->all());
        return $this->usuarioService->asignarRol($dto);
    }


public function cambiarPassword(Request $request, int $usuario)
{
    $request->validate([
        'current_password' => ['required_without:reset', 'string'],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
        'password_confirmation' => ['required', 'string', 'min:8'],
        'reset' => ['sometimes', 'boolean']
    ]);

    return $this->usuarioService->cambiarPassword($usuario, $request->all());
}
}
