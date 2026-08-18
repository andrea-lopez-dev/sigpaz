<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Crypt;
use App\Traits\HandlesEncryptedFields;
use App\Traits\HasBooleanAttributes;

class Persona extends Model
{
    use HasFactory, HandlesEncryptedFields, HasBooleanAttributes;

    protected $table = 'persona';
    protected $primaryKey = 'persona_id';
    public $timestamps = false;
    protected $fillable = [
        'tipo_documento_id',
        'numero_documento',
        'nombres',
        'apellidos',
        'fecha_nacimiento',
        'genero_id',
        'nacionalidad',
        'lugar_nacimiento',
        'estado_civil_id',
        'profesion_oficio',
        'ocupacion_actual',
        'direccion_cifrada',
        'municipio',
        'departamento',
        'codigo_postal',
        'telefono_fijo_cifrado',
        'telefono_movil_cifrado',
        'correo_electronico_cifrado',
        'correo_alternativo_cifrado',
        'nombre_contacto_emergencia',
        'telefono_emergencia_cifrado',
        'parentesco_emergencia',
        'tipo_vinculo_id',
        'discapacidad',
        'observaciones',
        'foto_cifrada',
        'codigo_qr',
        'firma_digital',
        'activo',
        'fecha_activacion',
        'activado_por'
    ];

    protected $casts = [
        'fecha_nacimiento' => 'date',
        'fecha_creacion' => 'datetime',
        'fecha_actualizacion' => 'datetime',
        'fecha_activacion' => 'datetime'
    ];


    // ========== MÉTODOS AUXILIARES ==========

    /**
     * Convierte un resource de PostgreSQL a string
     */
    private function resourceToString($value)
    {
        if (is_resource($value)) {
            return stream_get_contents($value);
        }
        return $value;
    }

    /**
     * Descifra un campo de texto (con manejo de doble cifrado)
     */
    private function decryptField($value)
    {
        if (empty($value)) {
            return null;
        }

        // Convertir resource a string si es necesario
        $string = $this->resourceToString($value);

        // Si no es string o es muy corto, devolver directamente
        if (!is_string($string) || strlen($string) < 20) {
            return $string;
        }

        // Descifrar hasta obtener texto plano (maneja doble cifrado)
        $nivel = $string;
        $iteraciones = 0;
        $maxIteraciones = 3; // Evitar loops infinitos

        while ($iteraciones < $maxIteraciones) {
            // Verificar si parece cifrado (base64 largo)
            if (strlen($nivel) > 50 && preg_match('/^[a-zA-Z0-9\/\+=]+$/', $nivel)) {
                try {
                    $nivel = Crypt::decrypt($nivel);
                    $iteraciones++;
                } catch (\Exception $e) {
                    break; // No se puede descifrar más
                }
            } else {
                break; // Ya no parece cifrado
            }
        }

        return $nivel;
    }

    /**
     * Cifra un campo de texto (evita doble cifrado)
     */
    private function encryptField($value)
    {
        if (empty($value)) {
            return null;
        }

        // Si ya parece cifrado, no cifrar de nuevo
        if (is_string($value) && strlen($value) > 50 && preg_match('/^[a-zA-Z0-9\/\+=]+$/', $value)) {
            return $value;
        }

        return Crypt::encrypt($value);
    }

    /**
     * Prepara una imagen para guardar en bytea
     */
private function prepareImageForBytea($value)
{
    if (empty($value)) {
        return null;
    }

    // Si es resource, convertirlo a string
    if (is_resource($value)) {
        return stream_get_contents($value);
    }

    // Si es string, devolverlo directamente
    if (is_string($value)) {
        return $value;
    }

    return $value;
}

    // ========== ACCESSORS Y MUTATORS PARA CAMPOS DE TEXTO (deben ir CIFRADOS) ==========


 /**
 * MUTADOR: Guardar correctamente como booleano para PostgreSQL
 */
public function setActivoAttribute($value)
{
    // 👈 SIMPLEMENTE PASAR EL VALOR ORIGINAL
    // El trait y Eloquent ya manejan la conversión
    $this->attributes['activo'] = $value;
}

public function getActivoAttribute($value)
{
    // Manejar diferentes formatos que puede devolver PostgreSQL
    if (is_bool($value)) {
        return $value;
    }
    if (is_string($value)) {
        // PostgreSQL puede devolver 't'/'f' para booleanos
        if ($value === 't' || $value === 'true' || $value === '1') {
            return true;
        }
        if ($value === 'f' || $value === 'false' || $value === '0') {
            return false;
        }
    }
    if (is_numeric($value)) {
        return (bool) $value;
    }
    return (bool) $value;
}
  /**
 * Scope para filtrar solo activos
 */
public function scopeActivo($query)
{
    // ❌ MAL:
    // return $query->whereRaw('activo = ?', [true]);

    // ✅ BIEN:
    return $query->where('activo', true);
}
    public function getCorreoElectronicoCifradoAttribute($value)
    {
        return $this->decryptField($value);
    }

    public function setCorreoElectronicoCifradoAttribute($value)
    {
        $this->attributes['correo_electronico_cifrado'] = $this->encryptField($value);
    }

    public function getCorreoAlternativoCifradoAttribute($value)
    {
        return $this->decryptField($value);
    }

    public function setCorreoAlternativoCifradoAttribute($value)
    {
        $this->attributes['correo_alternativo_cifrado'] = $this->encryptField($value);
    }

    public function getTelefonoFijoCifradoAttribute($value)
    {
        return $this->decryptField($value);
    }

    public function setTelefonoFijoCifradoAttribute($value)
    {
        $this->attributes['telefono_fijo_cifrado'] = $this->encryptField($value);
    }

    public function getTelefonoMovilCifradoAttribute($value)
    {
        return $this->decryptField($value);
    }

    public function setTelefonoMovilCifradoAttribute($value)
    {
        $this->attributes['telefono_movil_cifrado'] = $this->encryptField($value);
    }

    public function getTelefonoEmergenciaCifradoAttribute($value)
    {
        return $this->decryptField($value);
    }

    public function setTelefonoEmergenciaCifradoAttribute($value)
    {
        $this->attributes['telefono_emergencia_cifrado'] = $this->encryptField($value);
    }

    public function getDireccionCifradaAttribute($value)
    {
        return $this->decryptField($value);
    }

    public function setDireccionCifradaAttribute($value)
    {
        $this->attributes['direccion_cifrada'] = $this->encryptField($value);
    }

    // ========== ACCESSORS Y MUTATORS PARA CAMPOS BYTEA/IMAGEN (NO deben ir cifrados) ==========

public function getCodigoQrAttribute($value)
{
    \Log::info('🔍 QR Accessor - Entrada:', [
        'tipo' => gettype($value),
        'es_recurso' => is_resource($value),
        'persona_id' => $this->persona_id
    ]);

    // Si es resource de PostgreSQL, convertirlo a string
    if (is_resource($value)) {
        $contenido = stream_get_contents($value);
        \Log::info('✅ QR convertido de resource a string', [
            'length' => strlen($contenido),
            'preview' => substr($contenido, 0, 50)
        ]);
    } else {
        $contenido = $value;
    }

    if (empty($contenido)) {
        \Log::warning('⚠️ QR vacío para persona ID: ' . $this->persona_id);
        return null;
    }

    // Si ya es una URL o data URL, devolverlo directamente
    if (is_string($contenido) && (str_starts_with($contenido, 'http') || str_starts_with($contenido, 'data:image'))) {
        return $contenido;
    }

    // Convertir a base64 para mostrar en HTML
    try {
        $base64 = base64_encode($contenido);
        $dataUrl = 'data:image/png;base64,' . $base64;
        \Log::info('✅ QR convertido a data URL', [
            'base64_length' => strlen($base64),
            'data_url_length' => strlen($dataUrl)
        ]);
        return $dataUrl;
    } catch (\Exception $e) {
        \Log::error('❌ Error convirtiendo QR a base64: ' . $e->getMessage());
        return null;
    }
}
    public function getFotoCifradaAttribute($value)
    {
        return $this->prepareImageForBytea($value);
    }

    public function setFotoCifradaAttribute($value)
    {
        $this->attributes['foto_cifrada'] = $this->prepareImageForBytea($value);
    }

    public function setCodigoQrAttribute($value)
    {
        $this->attributes['codigo_qr'] = $this->prepareImageForBytea($value);
    }

    public function getFirmaDigitalAttribute($value)
    {
        return $this->prepareImageForBytea($value);
    }

    public function setFirmaDigitalAttribute($value)
    {
        $this->attributes['firma_digital'] = $this->prepareImageForBytea($value);
    }


    // ========== RELACIONES ==========

    public function tipoDocumento(): BelongsTo
    {
        return $this->belongsTo(TipoDocumento::class, 'tipo_documento_id', 'tipo_documento_id');
    }

    public function genero(): BelongsTo
    {
        return $this->belongsTo(Genero::class, 'genero_id', 'genero_id');
    }

    public function estadoCivil(): BelongsTo
    {
        return $this->belongsTo(EstadoCivil::class, 'estado_civil_id', 'estado_civil_id');
    }

    public function tipoVinculo(): BelongsTo
    {
        return $this->belongsTo(TipoVinculo::class, 'tipo_vinculo_id', 'tipo_vinculo_id');
    }

    public function personal(): HasOne
    {
        return $this->hasOne(Personal::class, 'persona_id', 'persona_id');
    }

    public function personahistorial()
    {
        return $this->hasMany(PersonaHistorial::class, 'persona_id', 'persona_id');
    }

    public function denuncias()
    {
        return $this->hasMany(Denuncia::class, 'persona_id', 'persona_id');
    }

    public function activador()
    {
    return $this->belongsTo(Usuario::class, 'activado_por', 'usuario_id');
    }
    // ========== MÉTODOS DE UTILIDAD ==========

    public function getNombreCompletoAttribute(): string
    {
        return "{$this->nombres} {$this->apellidos}";
    }

    public function getEdadAttribute(): ?int
    {
        if (!$this->fecha_nacimiento) {
            return null;
        }
        return $this->fecha_nacimiento->age;
    }

    public function getTieneDiscapacidadAttribute(): bool
    {
        return !empty($this->discapacidad);
    }

    public function tienePersonal(): bool
    {
        return $this->personal !== null;
    }
}
