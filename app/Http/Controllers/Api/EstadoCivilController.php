<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\EstadoCivilRepository;
use App\DTOs\EstadoCivilDTO;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class EstadoCivilController extends Controller
{
    private EstadoCivilRepository $repository;

    public function __construct(EstadoCivilRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request): JsonResponse
    {
        try {
            $filtros = [
                'activos' => $request->get('activos'),
                'search' => $request->get('search')
            ];

            $data = $this->repository->listarFiltrados($filtros);

            return response()->json([
                'success' => true,
                'data' => $data,
                'total' => $data->count()
            ]);

        } catch (\Exception $e) {
            return $this->errorResponse($e, 'Error al obtener estados civiles');
        }
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            // REGLA IMPORTANTE: Asegúrate que el nombre de la tabla sea correcto
            $validated = $request->validate([
                'nombre' => 'required|string|max:50|unique:estadocivil,nombre',
                'estado' => 'boolean'
            ]);

            // Usa DTO o array directamente
            $model = $this->repository->crear($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado civil creado exitosamente',
                'data' => $model
            ], 201);

        } catch (ValidationException $e) {
            DB::rollBack();
            return $this->validationErrorResponse($e);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->errorResponse($e, 'Error al crear el estado civil');
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $model = $this->repository->obtenerPorId($id);

            if (!$model) {
                return response()->json([
                    'success' => false,
                    'message' => 'Estado civil no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $model
            ]);

        } catch (\Exception $e) {
            return $this->errorResponse($e, 'Error al obtener el estado civil');
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $validated = $request->validate([
                'nombre' => 'required|string|max:50|unique:estadocivil,nombre,' . $id . ',id_estado',
                'estado' => 'boolean'
            ]);

            $model = $this->repository->actualizarDatos($id, $validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado civil actualizado exitosamente',
                'data' => $model
            ]);

        } catch (ValidationException $e) {
            DB::rollBack();
            return $this->validationErrorResponse($e);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->errorResponse($e, 'Error al actualizar el estado civil');
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $result = $this->repository->eliminarLogico($id);

            DB::commit();

            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Estado civil eliminado exitosamente'
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => 'No se pudo eliminar el estado civil'
            ], 400);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);
        }
    }

    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $model = $this->repository->cambiarEstado($id);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $model->id_estado,
                    'nombre' => $model->nombre,
                    'estado' => $model->estado
                ]
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            return $this->errorResponse($e, 'Error al cambiar el estado');
        }
    }

    // Métodos auxiliares
    private function errorResponse(\Exception $e, string $message): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }

    private function validationErrorResponse(ValidationException $e): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    }
}
