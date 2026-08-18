<?php

namespace App\Services;

use App\Helpers\BooleanHelper;
use App\Interfaces\Repositories\PersonalRepositoryInterface;
use App\Interfaces\Repositories\PersonaRepositoryInterface;
use App\Interfaces\Repositories\CargoRepositoryInterface;
use App\DTOs\Personal\PersonalDTO;
use App\Models\Personal;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\Cargo;
use Illuminate\Support\Collection;

class PersonalService
{
    public function __construct(
        private PersonalRepositoryInterface $personalRepository,
        private PersonaRepositoryInterface $personaRepository,
        private CargoRepositoryInterface $cargoRepository
    ) {}

    /**
     * Crear personal con validaciones
     */
    public function crearPersonal(array $data): Personal
    {
        return DB::transaction(function () use ($data) {
            // 1. Validar que la persona existe
            $persona = $this->personaRepository->findById($data['persona_id']);
            if (!$persona) {
                throw new \Exception('Persona no encontrada');
            }

            // 2. Validar que la persona está activa
            if (!$persona->activo) {
                throw new \Exception('La persona no está activa');
            }

            // 3. Validar que no tenga personal
            if ($this->personalRepository->personaTienePersonal($persona->persona_id)) {
                throw new \Exception('La persona ya tiene un registro de personal');
            }

            // 4. Validar que el cargo existe y está activo
            $cargo = $this->cargoRepository->findById($data['cargo_id']);
            if (!$cargo) {
                throw new \Exception('Cargo no encontrado');
            }

            if (!$cargo->activo) {
                throw new \Exception('El cargo no está activo');
            }

            // 5. Crear DTO y luego personal
            $dto = PersonalDTO::fromRequest($data);

        // 🔍 LOG PARA VER QUÉ SALE DEL DTO
        Log::info('🔍 DTO toArray:', [
            'activo' => $dto->toArray()['activo'],
            'tipo' => gettype($dto->toArray()['activo']),
            'valor_raw' => $dto->toArray()['activo']
        ]);

        $personal = $this->personalRepository->create($dto->toArray());

        Log::info('✅ Personal creado:', [
            'personal_id' => $personal->personal_id,
            'persona_id' => $personal->persona_id,
            'cargo' => $cargo->nombre
        ]);

            return $personal->load(['persona', 'cargo']);
        });
    }

    /**
     * Actualizar personal
     */
    public function actualizarPersonal(int $id, array $data): Personal
    {
        return DB::transaction(function () use ($id, $data) {
            $personal = $this->personalRepository->findById($id);

            if (!$personal) {
                throw new \Exception('Personal no encontrado');
            }

            // Si cambia el cargo, validar
            if (isset($data['cargo_id'])) {
                $cargo = $this->cargoRepository->findById($data['cargo_id']);
                if (!$cargo || !$cargo->activo) {
                    throw new \Exception('Cargo inválido o inactivo');
                }
            }

            $updated = $this->personalRepository->update($id, $data);

            if (!$updated) {
                throw new \Exception('Error al actualizar personal');
            }

            return $this->personalRepository->findById($id)->load(['persona', 'cargo']);
        });
    }

   /**
 * Cambiar estado (activar/desactivar)
 */
public function cambiarEstado(int $id, bool $estado): Personal
{
    $personal = $this->personalRepository->findById($id);

    if (!$personal) {
        throw new \Exception('Personal no encontrado');
    }

    // ✅ CORRECCIÓN: Usar DB::raw para PostgreSQL
    $updated = \DB::table('personal')
        ->where('personal_id', $id)
        ->update([
            'activo' => \DB::raw($estado ? 'true' : 'false'),
            'fecha_actualizacion' => now(),
            'usuario_actualizacion_id' => auth()->id()
        ]);

    if (!$updated) {
        throw new \Exception('Error al cambiar el estado del personal');
    }

    // Recargar el modelo
    return $personal->fresh();
}
    /**
     * Obtener estadísticas
     */
public function getEstadisticas(): array
{
    $activos = $this->personalRepository->getActivos()->count();
    $total = $this->personalRepository->all()->count();

    // Personal por cargo - USAR DB::raw('true') para PostgreSQL
    $cargos = Cargo::where('activo', DB::raw('true'))->get();  // ✅ CORREGIDO
    $porCargo = [];

    foreach ($cargos as $cargo) {
        $porCargo[] = [
            'cargo_id' => $cargo->cargo_id,
            'nombre' => $cargo->nombre,
            'total' => $this->personalRepository->getByCargo($cargo->cargo_id)->count()
        ];
    }

    return [
        'total_personal' => $total,
        'activos' => $activos,
        'inactivos' => $total - $activos,
        'por_cargo' => $porCargo
    ];
}

    /**
     * Verificar disponibilidad de persona para personal
     */
    public function verificarDisponibilidadPersona(int $personaId): array
    {
        $persona = $this->personaRepository->findById($personaId);

        if (!$persona) {
            return [
                'disponible' => false,
                'razon' => 'Persona no encontrada',
                'codigo' => 'NOT_FOUND'
            ];
        }

        if (!$persona->activo) {
            return [
                'disponible' => false,
                'razon' => 'La persona no está activa',
                'codigo' => 'INACTIVE'
            ];
        }

        if ($persona->personal) {
            return [
                'disponible' => false,
                'razon' => 'La persona ya tiene personal asociado',
                'codigo' => 'ALREADY_EXISTS',
                'personal_id' => $persona->personal->personal_id
            ];
        }

        return [
            'disponible' => true,
            'razon' => 'Disponible para crear personal',
            'codigo' => 'AVAILABLE',
            'persona' => [
                'persona_id' => $persona->persona_id,
                'nombre_completo' => $persona->nombre_completo,
                'numero_documento' => $persona->numero_documento
            ]
        ];
    }

}
