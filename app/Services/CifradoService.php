<?php

namespace App\Services;

use App\Services\Contracts\CifradoServiceInterface;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class CifradoService implements CifradoServiceInterface
{
    private const CAMPOS_SENSIBLES = [
        'direccion',
        'telefono_fijo',
        'telefono_movil',
        'correo_electronico',
        'correo_alternativo',
        'telefono_contacto_emergencia'
    ];

    public function cifrar(string $dato): string
    {
        return Crypt::encryptString($dato);
    }

    public function descifrar(string $datoCifrado): string
    {
        return Crypt::decryptString($datoCifrado);
    }

    public function cifrarArray(array $datos): array
    {
        foreach (self::CAMPOS_SENSIBLES as $campo) {
            if (!empty($datos[$campo])) {
                $datos[$campo] = $this->cifrar($datos[$campo]);
            }
        }
        return $datos;
    }

    public function descifrarArray(array $datosCifrados): array
    {
        foreach (self::CAMPOS_SENSIBLES as $campo) {
            if (!empty($datosCifrados[$campo])) {
                try {
                    $datosCifrados[$campo] = $this->descifrar($datosCifrados[$campo]);
                } catch (\Exception $e) {
                    // Si no puede descifrar, mantener el valor original
                    continue;
                }
            }
        }
        return $datosCifrados;
    }

    public function getCamposSensibles(): array
    {
        return self::CAMPOS_SENSIBLES;
    }

     /**
     * Encriptar una respuesta usando la función de la base de datos
     */
public function encriptarRespuesta(string $respuesta, string $tipo = 'general'): string
{
    return Crypt::encryptString($respuesta);
}


    /**
     * Desencriptar una respuesta usando la función de la base de datos
     */
public function desencriptarRespuesta(string $respuestaCifrada, string $tipo = 'general'): ?string
{
    try {
        return Crypt::decryptString($respuestaCifrada);
    } catch (\Exception $e) {
        return null;
    }
}

    /**
     * Validar si una respuesta en texto plano coincide con la cifrada
     */
  public function validarRespuesta(string $respuestaPlana, string $respuestaCifrada, string $tipo = 'general'): bool
{
    try {
        $respuestaDescifrada = $this->desencriptarRespuesta($respuestaCifrada);
        return strtolower(trim($respuestaPlana)) === strtolower(trim($respuestaDescifrada));
    } catch (\Exception $e) {
        return false;
    }
}
}
