<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PersonaHistorial extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'personahistorial';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'historial_id';

    /**
     * Indicates if the model should be timestamped.
     * Usamos fecha_cambio en lugar de created_at/updated_at
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'persona_id',
        'snapshot_cifrado',
        'version',
        'tipo_cambio',
        'fecha_cambio',
        'usuario_cambio_id',
        'motivo_cambio',
        'ip_origen',
        'campos_modificados'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'snapshot_cifrado' => 'encrypted', // Si usas Laravel's encryption
        'version' => 'integer',
        'fecha_cambio' => 'datetime',
        'campos_modificados' => 'array', // PostgreSQL text[] se convierte en array
        'ip_origen' => 'string'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'fecha_cambio'
    ];

    /**
     * Get the persona that owns the historial.
     *
     * @return BelongsTo
     */
    public function persona(): BelongsTo
    {
        return $this->belongsTo(Persona::class, 'persona_id', 'persona_id');
    }

    /**
     * Get the usuario that made the change.
     *
     * @return BelongsTo
     */
    public function usuarioCambio(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_cambio_id', 'usuario_id');
    }

    /**
     * Tipos de cambio permitidos
     */
    public const TIPO_CREACION = 'CREACION';
    public const TIPO_ACTUALIZACION = 'ACTUALIZACION';
    public const TIPO_ELIMINACION = 'ELIMINACION';
    public const TIPO_CORRECCION = 'CORRECCION';

    /**
     * Get all valid change types.
     *
     * @return array
     */
    public static function getTiposCambio(): array
    {
        return [
            self::TIPO_CREACION,
            self::TIPO_ACTUALIZACION,
            self::TIPO_ELIMINACION,
            self::TIPO_CORRECCION
        ];
    }

    /**
     * Scope a query to only include historial of a specific persona.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param int $personaId
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOfPersona($query, int $personaId)
    {
        return $query->where('persona_id', $personaId);
    }

    /**
     * Scope a query to only include historial of a specific type.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $tipo
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOfTipo($query, string $tipo)
    {
        return $query->where('tipo_cambio', $tipo);
    }

    /**
     * Scope a query to order by version.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $direction
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOrderByVersion($query, string $direction = 'desc')
    {
        return $query->orderBy('version', $direction);
    }

    /**
     * Get the next version number for a persona.
     *
     * @param int $personaId
     * @return int
     */
    public static function getNextVersion(int $personaId): int
    {
        $maxVersion = self::where('persona_id', $personaId)->max('version');
        return ($maxVersion ?? 0) + 1;
    }

    /**
     * Create a historial entry for a persona creation.
     *
     * @param int $personaId
     * @param array $snapshot
     * @param int $usuarioId
     * @param string $ip
     * @param string|null $motivo
     * @return self
     */
    public static function crearHistorialCreacion(
        int $personaId,
        array $snapshot,
        int $usuarioId,
        string $ip,
        ?string $motivo = null
    ): self {
        return self::create([
            'persona_id' => $personaId,
            'snapshot_cifrado' => json_encode($snapshot),
            'version' => 1, // Primera versión siempre es 1
            'tipo_cambio' => self::TIPO_CREACION,
            'fecha_cambio' => now(),
            'usuario_cambio_id' => $usuarioId,
            'motivo_cambio' => $motivo ?? 'Creación inicial de persona',
            'ip_origen' => $ip,
            'campos_modificados' => array_keys($snapshot) // Todos los campos en creación
        ]);
    }

    /**
     * Create a historial entry for a persona update.
     *
     * @param int $personaId
     * @param array $snapshot
     * @param array $camposModificados
     * @param int $usuarioId
     * @param string $ip
     * @param string|null $motivo
     * @return self
     */
    public static function crearHistorialActualizacion(
        int $personaId,
        array $snapshot,
        array $camposModificados,
        int $usuarioId,
        string $ip,
        ?string $motivo = null
    ): self {
        $nextVersion = self::getNextVersion($personaId);

        return self::create([
            'persona_id' => $personaId,
            'snapshot_cifrado' => json_encode($snapshot),
            'version' => $nextVersion,
            'tipo_cambio' => self::TIPO_ACTUALIZACION,
            'fecha_cambio' => now(),
            'usuario_cambio_id' => $usuarioId,
            'motivo_cambio' => $motivo ?? 'Actualización de datos',
            'ip_origen' => $ip,
            'campos_modificados' => $camposModificados
        ]);
    }

    /**
     * Create a historial entry for a persona deletion.
     *
     * @param int $personaId
     * @param array $snapshot
     * @param int $usuarioId
     * @param string $ip
     * @param string|null $motivo
     * @return self
     */
    public static function crearHistorialEliminacion(
        int $personaId,
        array $snapshot,
        int $usuarioId,
        string $ip,
        ?string $motivo = null
    ): self {
        $nextVersion = self::getNextVersion($personaId);

        return self::create([
            'persona_id' => $personaId,
            'snapshot_cifrado' => json_encode($snapshot),
            'version' => $nextVersion,
            'tipo_cambio' => self::TIPO_ELIMINACION,
            'fecha_cambio' => now(),
            'usuario_cambio_id' => $usuarioId,
            'motivo_cambio' => $motivo ?? 'Eliminación de persona',
            'ip_origen' => $ip,
            'campos_modificados' => [] // Vacío porque es eliminación
        ]);
    }
}
