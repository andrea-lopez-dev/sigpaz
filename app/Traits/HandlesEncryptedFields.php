<?php

namespace App\Traits;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;

trait HandlesEncryptedFields
{
    /**
     * Descifrar un campo manejando resources
     */
    protected function decryptField($value)
    {
        if (empty($value)) {
            return null;
        }
        
        // Convertir resource a string si es necesario
        if (is_resource($value)) {
            $value = stream_get_contents($value);
        }
        
        // Intentar descifrar
        try {
            return Crypt::decrypt($value);
        } catch (\Exception $e) {
            // Si falla, devolver el valor original
            Log::debug('No se pudo descifrar campo, devolviendo original');
            return $value;
        }
    }
    
    /**
     * Cifrar un campo
     */
    protected function encryptField($value)
    {
        if (empty($value)) {
            return null;
        }
        
        // Verificar si ya está cifrado
        try {
            Crypt::decrypt($value);
            return $value; // Ya está cifrado
        } catch (\Exception $e) {
            return Crypt::encrypt($value); // Cifrar
        }
    }
}