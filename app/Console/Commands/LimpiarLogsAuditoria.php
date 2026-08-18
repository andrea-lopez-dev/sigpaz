<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\LogAuditoria;
use Illuminate\Support\Facades\Log;

class LimpiarLogsAuditoria extends Command
{
    protected $signature = 'auditoria:limpiar
                            {--dias=90 : Días a mantener}
                            {--force : Ejecutar sin confirmación}';

    protected $description = 'Limpia registros antiguos de auditoría';

    public function handle()
    {
        $dias = $this->option('dias');
        $fechaLimite = now()->subDays($dias);

        $count = LogAuditoria::where('fecha', '<', $fechaLimite)->count();

        if ($count === 0) {
            $this->info('No hay registros antiguos para limpiar.');
            return 0;
        }

        $this->warn("Se eliminarán {$count} registros con más de {$dias} días.");

        if (!$this->option('force') && !$this->confirm('¿Continuar con la limpieza?')) {
            $this->info('Operación cancelada.');
            return 0;
        }

        $deleted = LogAuditoria::where('fecha', '<', $fechaLimite)->delete();

        $this->info("Se eliminaron {$deleted} registros de auditoría.");

        Log::info("Limpieza de auditoría completada", [
            'dias_mantenidos' => $dias,
            'registros_eliminados' => $deleted
        ]);

        return 0;
    }
}
