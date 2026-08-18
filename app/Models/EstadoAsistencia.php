<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Interfaces\CatalogoInterface;
use App\Traits\HasBooleanAttributes;

class EstadoAsistencia extends Model implements CatalogoInterface
{
    use HasFactory, HasBooleanAttributes;

    protected $table = 'estadoasistencia';
    protected $primaryKey = 'estado_asistencia_id';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'activo'
    ];

    protected $casts = [
        'activo' => 'boolean'
    ];

    protected $booleanAttributes = ['activo'];

    /**
     * Sobrescribir el método update para forzar la conversión
     */
    public function update(array $attributes = [], array $options = [])
    {
        if (isset($attributes['activo'])) {
            $attributes['activo'] = $attributes['activo'] ? 'true' : 'false';
        }

        return parent::update($attributes, $options);
    }

    /**
     * Sobrescribir el método save para forzar la conversión
     */
    public function save(array $options = [])
    {
        if (isset($this->attributes['activo'])) {
            $this->attributes['activo'] = $this->attributes['activo'] ? 'true' : 'false';
        }

        return parent::save($options);
    }

    /**
     * MUTADOR: Forzar conversión a string booleano
     */
    public function setActivoAttribute($value)
    {
        $boolValue = filter_var($value, FILTER_VALIDATE_BOOLEAN);
        $this->attributes['activo'] = $boolValue ? 'true' : 'false';
    }

    /**
     * ACCESOR: Mantener la consistencia al leer
     */
    public function getActivoAttribute($value)
    {
        if (is_string($value)) {
            return $value === 't' || $value === 'true' || $value === '1';
        }
        return (bool) $value;
    }

    // ========== RELACIONES ==========
    public function asistencias(): HasMany
    {
        return $this->hasMany(Asistencia::class, 'estado_asistencia_id', 'estado_asistencia_id');
    }

    // ========== SCOPES ==========
    public function scopeActivos($query)
    {
        return $query->where('activo', 'true');
    }

    // ========== IMPLEMENTACIÓN DE INTERFACE ==========
    public static function crear(array $datos): self
    {
        $model = new self();
        $model->nombre = $datos['nombre'];
        $model->activo = $datos['activo'] ?? true;
        $model->save();

        return $model;
    }

    public function actualizarDatos(array $datos): self
    {
        foreach ($datos as $campo => $valor) {
            $this->{$campo} = $valor;
        }
        $this->save();

        return $this->fresh();
    }

    public function eliminarLogico(): bool
    {
        if (!$this->puedeEliminar()) {
            throw new \Exception('No se puede eliminar porque tiene asistencias asociadas');
        }

        $this->activo = false;
        return $this->save();
    }

    public static function obtenerPorId(int $id): ?self
    {
        return self::find($id);
    }

    public static function listarActivos()
    {
        return self::activos()->orderBy('nombre')->get();
    }

    // ========== MÉTODOS ESPECÍFICOS ==========
    public function puedeEliminar(): bool
    {
        return !$this->asistencias()->exists();
    }
}
