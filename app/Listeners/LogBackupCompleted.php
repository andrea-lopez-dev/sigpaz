<?php

namespace App\Listeners;

use App\Events\BackupCompleted;
use Illuminate\Support\Facades\Log;

class LogBackupCompleted
{
    public function handle(BackupCompleted $event): void
    {
        Log::info('Backup completado', [
            'backup_id' => $event->backup->backup_id,
            'size_mb' => $event->backup->tamano_mb,
            'origen' => $event->backup->origen_nube
        ]);
    }
}
