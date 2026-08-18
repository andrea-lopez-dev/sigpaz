<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Interfaces\CatalogoInterface;
use App\Traits\HasBooleanAttributes;
use Illuminate\Support\Facades\DB;

class TipoMedida extends Model
{
    use HasFactory, HasBooleanAttributes;

    protected $table = 'tipomedida';
    protected $primaryKey = 'tipo_medida_id';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'descripcion',
        'activo'
    ];

    protected $casts = [
        'activo' => 'boolean',
        'fecha_creacion' => 'datetime'
    ];

    protected $booleanAttributes = ['activo'];

    /**
     * Sobrescribir el método update para forzar la conversión
     */
    public function update(array $attributes = [], array $options = [])
    {
        if (isset($attributes['activo'])) {
            // Convertir a string 'true'/'false' para PostgreSQL
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
            // Guardar como string 'true'/'false' para PostgreSQL
            $this->attributes['activo'] = $this->attributes['activo'] ? 'true' : 'false';
        }
        
        return parent::save($options);
    }

    /**
     * MUTADOR: Forzar conversión a string booleano
     */
    public function setActivoAttribute($value)
    {
        // Convertir a string 'true' o 'false' para PostgreSQL
        $boolValue = filter_var($value, FILTER_VALIDATE_BOOLEAN);
        $this->attributes['activo'] = $boolValue ? 'true' : 'false';
    }

    /**
     * ACCESOR: Mantener la consistencia al leer
     */
    public function getActivoAttribute($value)
    {
        // PostgreSQL devuelve 't'/'f' como string, convertirlo a booleano
        if (is_string($value)) {
            return $value === 't' || $value === 'true' || $value === '1';
        }
        return (bool) $value;
    }

    // ========== RELACIONES ==========
    public function medidasCautelares(): HasMany
    {
        return $this->hasMany(MedidaCautelar::class, 'tipo_medida_id', 'tipo_medida_id');
    }

    // ========== IMPLEMENTACIÓN DE INTERFACE ==========
    public static function crear(array $datos): self
    {
        $model = new self();
        $model->nombre = $datos['nombre'];
        $model->descripcion = $datos['descripcion'] ?? null;
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
        if ($this->medidasCautelares()->exists()) {
            throw new \Exception('No se puede eliminar porque tiene medidas cautelares asociadas');
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

    public function scopeActivos($query)
    {
        return $query->where('activo', 'true');
    }

    public function puedeEliminar(): bool
    {
        return !$this->medidasCautelares()->exists();
    }
}