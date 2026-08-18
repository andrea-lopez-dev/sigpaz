<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

abstract class CatalogoBaseController extends Controller
{
    protected $modelClass;
    protected $validationRules = [];
    protected $validationMessages = [];

    protected function getRepository()
    {
        // Implementación específica en cada controlador concreto
        throw new \Exception('Método getRepository debe ser implementado');
    }

    public function index(Request $request): JsonResponse
    {
        try {
            $query = $this->modelClass::query();

            if ($request->has('activos')) {
                $activos = filter_var($request->get('activos'), FILTER_VALIDATE_BOOLEAN);
                $query->where('estado', $activos);
            }

            if ($request->has('search')) {
                $query->where('nombre', 'like', "%{$request->get('search')}%");
            }

            $data = $query->orderBy('nombre')->get();

            return response()->json([
                'success' => true,
                'data' => $data,
                'total' => $data->count()
            ]);

        } catch (\Exception $e) {
            return $this->errorResponse($e, 'Error al obtener registros');
        }
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            $validated = $this->validateRequest($request);

            if (method_exists($this->modelClass, 'crear')) {
                $model = $this->modelClass::crear($validated);
            } else {
                $model = $this->modelClass::create($validated);
            }

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Registro creado exitosamente',
                'data' => $model
            ], 201);

        } catch (ValidationException $e) {
            DB::rollBack();
            return $this->validationErrorResponse($e);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->errorResponse($e, 'Error al crear registro');
        }
    }


    // ... otros métodos con el mismo patrón

 protected function errorResponse(\Exception $e, string $message): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }

    protected function validationErrorResponse(ValidationException $e): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    }
}
