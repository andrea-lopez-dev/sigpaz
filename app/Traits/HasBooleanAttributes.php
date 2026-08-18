<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Expression;

trait HasBooleanAttributes
{
    /**
     * Initialize the trait
     */
    public function initializeHasBooleanAttributes()
    {
        // No necesitamos inicializar nada
    }

    /**
     * Set a given attribute on the model
     */
    public function setAttribute($key, $value)
    {
        // Solo convertir si es un atributo booleano y NO es una expresión DB::raw
        if ($this->isBooleanAttribute($key) && !($value instanceof Expression)) {
            $value = $this->convertToBoolean($value);
        }

        return parent::setAttribute($key, $value);
    }

    /**
     * Check if attribute should be treated as boolean
     */
    protected function isBooleanAttribute($key): bool
    {
        $booleanAttributes = property_exists($this, 'booleanAttributes')
            ? $this->booleanAttributes
            : ['activo'];

        return in_array($key, $booleanAttributes);
    }

    /**
     * Convert any value to strict boolean
     */
    protected function convertToBoolean($value): bool
    {
        if (is_bool($value)) {
            return $value;
        }

        if (is_string($value)) {
            return filter_var($value, FILTER_VALIDATE_BOOLEAN);
        }

        if (is_numeric($value)) {
            return (bool) $value;
        }

        if (is_null($value)) {
            return false;
        }

        return (bool) $value;
    }

    // 🚨 ELIMINADO COMPLETAMENTE EL MÉTODO save()
    // Ya no hay línea 75
}
