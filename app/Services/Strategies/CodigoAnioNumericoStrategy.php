<?php

namespace App\Services\Strategies;

use App\Strategies\CodigoDenunciaStrategyInterface;
use App\Models\Denuncia;

class CodigoAnioNumericoStrategy implements CodigoDenunciaStrategyInterface
{
    public function generar(): string
    {
        $anio = date('Y');
        $mes = date('m');
        $dia = date('d');
        
        // Obtener el último código del día
        $ultimoCodigo = Denuncia::whereYear('fecha_creacion', $anio)
            ->whereMonth('fecha_creacion', $mes)
            ->whereDay('fecha_creacion', $dia)
            ->orderBy('denuncia_id', 'desc')
            ->first();
        
        if ($ultimoCodigo && preg_match('/DEN-\d{8}-(\d{4})$/', $ultimoCodigo->codigo_externo, $matches)) {
            $numero = intval($matches[1]) + 1;
        } else {
            $numero = 1;
        }
        
        $numeroFormateado = str_pad($numero, 4, '0', STR_PAD_LEFT);
        
        return "DEN-{$anio}{$mes}{$dia}-{$numeroFormateado}";
    }
    
    public function validar(string $codigo): bool
    {
        return preg_match('/^DEN-\d{8}-\d{4}$/', $codigo) === 1;
    }
    
    public function descomponer(string $codigo): array
    {
        if (!$this->validar($codigo)) {
            return [];
        }
        
        preg_match('/^DEN-(\d{4})(\d{2})(\d{2})-(\d{4})$/', $codigo, $matches);
        
        return [
            'anio' => $matches[1],
            'mes' => $matches[2],
            'dia' => $matches[3],
            'numero' => $matches[4],
            'fecha' => $matches[1] . '-' . $matches[2] . '-' . $matches[3],
            'prefijo' => $this->getPrefijo()
        ];
    }
    
    public function getPrefijo(): string
    {
        return 'DEN';
    }
}