<?php

namespace App\Events;

use App\Models\Backup;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class BackupCompleted
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public Backup $backup;

    public function __construct(Backup $backup)
    {
        $this->backup = $backup;
    }
}
