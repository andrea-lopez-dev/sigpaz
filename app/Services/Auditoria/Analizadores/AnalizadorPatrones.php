<?php

namespace App\Services\Auditoria\Analizadores;

use App\Contracts\AnalizadorPatronesInterface;
use Illuminate\Support\Collection;

class AnalizadorPatrones implements AnalizadorPatronesInterface
{
    protected array $analizadores;

    public function __construct()
    {
        $this->analizadores = [
            'accesos_recurrentes' => new AnalizadorAccesosRecurrentes(),
            'rafagas_actividad' => new AnalizadorRafagasActividad(),
            'ips_sospechosas' => new AnalizadorIPSospechosas(),
            'horarios_inusuales' => new AnalizadorHorariosInusuales(),
            'exceso_permisos' => new AnalizadorExcesoPermisos(),
            'operaciones_masivas' => new AnalizadorOperacionesMasivas(),
            'accesos_denegados' => new AnalizadorAccesosDenegados(),
            'usuarios_sospechosos' => new AnalizadorUsuariosSospechosos()
        ];
    }

    public function analizar(Collection $datos): array
    {
        $patrones = [];

        foreach ($this->analizadores as $nombre => $analizador) {
            $resultado = $analizador->analizar($datos);
            if ($resultado) {
                $patrones[] = $resultado;
            }
        }

        return $patrones;
    }
}
