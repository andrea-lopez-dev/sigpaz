<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\TipoMedidaRepository;
use App\DTOs\TipoMedidaDTO;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TipoMedidaController extends Controller
{
    private TipoMedidaRepository $repository;

    public function __construct(TipoMedidaRepository $repository)
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
            return $this->errorResponse($e, 'Error al obtener tipos de medida');
        }
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            $validated = $request->validate([
                'nombre' => 'required|string|max:100|unique:tipomedida,nombre',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $dto = new TipoMedidaDTO(
                $validated['nombre'],
                $validated['descripcion'] ?? null,
                $validated['estado'] ?? true
            );

            $model = $this->repository->crear($dto->toArray());

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Tipo de medida creado exitosamente',
                'data' => $model
            ], 201);

        } catch (ValidationException $e) {
            DB::rollBack();
            return $this->validationErrorResponse($e);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->errorResponse($e, 'Error al crear el tipo de medida');
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $model = $this->repository->obtenerPorId($id);

            if (!$model) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de medida no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $model
            ]);

        } catch (\Exception $e) {
            return $this->errorResponse($e, 'Error al obtener el tipo de medida');
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $validated = $request->validate([
                'nombre' => 'required|string|max:100|unique:tipomedida,nombre,' . $id . ',id_tipo_medida',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $model = $this->repository->actualizarDatos($id, $validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Tipo de medida actualizado exitosamente',
                'data' => $model
            ]);

        } catch (ValidationException $e) {
            DB::rollBack();
            return $this->validationErrorResponse($e);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->errorResponse($e, 'Error al actualizar el tipo de medida');
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
                    'message' => 'Tipo de medida eliminado exitosamente'
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => 'No se pudo eliminar el tipo de medida'
            ], 400);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);
        }
    }

    public function listarActivos(): JsonResponse
    {
        try {
            $data = $this->repository->listarActivos();

            return response()->json([
                'success' => true,
                'data' => $data,
                'total' => $data->count()
            ]);

        } catch (\Exception $e) {
            return $this->errorResponse($e, 'Error al obtener tipos de medida activos');
        }
    }

    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $model = $this->repository->obtenerPorId($id);

            if (!$model) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de medida no encontrado'
                ], 404);
            }

            $model->estado = !$model->estado;
            $model->save();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $model->id_tipo_medida,
                    'nombre' => $model->nombre,
                    'estado' => $model->estado
                ]
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            return $this->errorResponse($e, 'Error al cambiar el estado');
        }
    }

    public function buscar(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'termino' => 'required|string|min:2'
            ]);

            $termino = $request->get('termino');
            $resultados = $this->repository->buscarPorTermino($termino);

            return response()->json([
                'success' => true,
                'data' => $resultados,
                'total' => $resultados->count()
            ]);

        } catch (ValidationException $e) {
            return $this->validationErrorResponse($e);
        } catch (\Exception $e) {
            return $this->errorResponse($e, 'Error en la búsqueda');
        }
    }

    // Métodos auxiliares reutilizables
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
