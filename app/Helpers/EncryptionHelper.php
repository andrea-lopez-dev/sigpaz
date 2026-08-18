<?php

class EncryptionHelper
{
    /**
     * Convertir string a formato bytea para PostgreSQL
     */
    public static function toBytea($string)
    {
        // Usar hash SHA-256
        $hash = hash('sha256', $string, true); // true para obtener raw binary
        return DB::raw("E'\\\\x" . bin2hex($hash) . "'");
    }

    /**
     * Convertir bytea de PostgreSQL a string
     */
    public static function fromBytea($bytea)
    {
        if (empty($bytea)) {
            return '';
        }

        // Para Laravel/PostgreSQL, el bytea puede venir como resource
        if (is_resource($bytea)) {
            $bytea = stream_get_contents($bytea);
        }

        // Convertir a hexadecimal para comparación
        return bin2hex($bytea);
    }

    /**
     * Verificar si una respuesta coincide con el bytea almacenado
     */
    public static function verifyResponse($respuestaUsuario, $byteaAlmacenado)
    {
        $hashUsuario = hash('sha256', $respuestaUsuario, true);
        $hashAlmacenado = self::fromBytea($byteaAlmacenado);

        return hash_equals(bin2hex($hashUsuario), $hashAlmacenado);
    }
}
