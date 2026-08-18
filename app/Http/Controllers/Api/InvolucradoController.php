<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Contracts\InvolucradoServiceInterface;
use App\DTOs\Involucrado\CrearInvolucradoDTO;
use App\DTOs\Involucrado\ActualizarInvolucradoDTO;
use App\Http\Requests\Involucrado\StoreInvolucradoRequest;
use App\Http\Requests\Involucrado\UpdateInvolucradoRequest;
use App\Http\Resources\Involucrado\InvolucradoResource;
use App\Exceptions\InvolucradoNoEncontradoException;
use App\Exceptions\InvolucradoDuplicadoException;
use App\Exceptions\DenuncianteNoModificableException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class InvolucradoController extends Controller
{
    public function __construct(
        private readonly InvolucradoServiceInterface $involucradoService
    ) {}

    /**
     * Listar involucrados de una denuncia
     */
    public function index(int $denunciaId): JsonResponse
    {
        try {
            $involucrados = $this->involucradoService->listarPorDenuncia($denunciaId);

            return response()->json([
                'success' => true,
                'data' => $involucrados,
                'total' => count($involucrados)
            ]);

        } catch (\Exception $e) {
            Log::error('Error al listar involucrados: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener involucrados',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Crear un nuevo involucrado
     */
    public function store(StoreInvolucradoRequest $request): JsonResponse
    {
        try {
            $dto = CrearInvolucradoDTO::fromRequest($request);
            $involucrado = $this->involucradoService->crear($dto);

            return response()->json([
                'success' => true,
                'message' => 'Involucrado agregado exitosamente',
                'data' => $involucrado->toArray()
            ], 201);

        } catch (InvolucradoDuplicadoException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 409);
        } catch (\Exception $e) {
            Log::error('Error al crear involucrado: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al agregar involucrado',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Mostrar un involucrado específico
     */
    public function show(int $id): JsonResponse
    {
        try {
            $involucrado = $this->involucradoService->obtenerPorId($id);

            return response()->json([
                'success' => true,
                'data' => $involucrado->toArray()
            ]);

        } catch (InvolucradoNoEncontradoException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 404);
        } catch (\Exception $e) {
            Log::error('Error al obtener involucrado: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener involucrado',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Actualizar un involucrado
     */
    public function update(UpdateInvolucradoRequest $request, int $id): JsonResponse
    {
        try {
            $dto = ActualizarInvolucradoDTO::fromRequest($request);
            $involucrado = $this->involucradoService->actualizar($id, $dto);

            return response()->json([
                'success' => true,
                'message' => 'Involucrado actualizado exitosamente',
                'data' => $involucrado->toArray()
            ]);

        } catch (InvolucradoNoEncontradoException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 404);
        } catch (DenuncianteNoModificableException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 403);
        } catch (\Exception $e) {
            Log::error('Error al actualizar involucrado: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar involucrado',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Eliminar un involucrado
     */
    public function destroy(int $id): JsonResponse
    {
        try {
            $this->involucradoService->eliminar($id);

            return response()->json([
                'success' => true,
                'message' => 'Involucrado eliminado exitosamente'
            ]);

        } catch (InvolucradoNoEncontradoException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 404);
        } catch (\Exception $e) {
            Log::error('Error al eliminar involucrado: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al eliminar involucrado',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Listar involucrados por persona
     */
    public function porPersona(int $personaId): JsonResponse
    {
        try {
            $involucrados = $this->involucradoService->listarPorPersona($personaId);

            return response()->json([
                'success' => true,
                'data' => $involucrados,
                'total' => count($involucrados)
            ]);

        } catch (\Exception $e) {
            Log::error('Error al listar involucrados por persona: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener involucrados',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Validar si una persona puede ser agregada a una denuncia
     */
    public function validarPersona(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'denuncia_id' => 'required|integer|exists:denuncia,denuncia_id',
                'persona_id' => 'required|integer|exists:persona,persona_id'
            ]);

            $valido = $this->involucradoService->validarPersonaNoDuplicada(
                $request->denuncia_id,
                $request->persona_id
            );

            return response()->json([
                'success' => true,
                'data' => [
                    'valido' => $valido,
                    'mensaje' => $valido ? 'Persona disponible' : 'La persona ya está involucrada'
                ]
            ]);

        } catch (\Exception $e) {
            Log::error('Error al validar persona: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al validar persona',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }
}
