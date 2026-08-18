<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CodigoOTP extends Model
{
    protected $table = 'codigos_otp';
    public $timestamps = true;

    protected $fillable = [
        'codigo', 'descripcion', 'activo', 'generado_en', 'expira_en',
        'puede_regenerar_en', 'usos_restantes', 'generado_por'
    ];

    protected $casts = [
        'activo' => 'boolean',
        'generado_en' => 'datetime',
        'expira_en' => 'datetime',
        'puede_regenerar_en' => 'datetime'
    ];

    public function generador()
    {
        return $this->belongsTo(Usuario::class, 'generado_por', 'usuario_id');
    }

    public function estaVigente(): bool
    {
        return $this->activo && $this->expira_en > now();
    }

    public function puedeRegenerar(): bool
    {
        return !$this->puede_regenerar_en || $this->puede_regenerar_en <= now();
    }

    public function usar(): void
    {
        // ✅ Asegurar que usos_restantes es un número
        $usosActuales = (int) $this->usos_restantes;
        $this->usos_restantes = $usosActuales - 1;

        if ($this->usos_restantes <= 0) {
            $this->activo = false;
        }

        $this->save();
    }
}
