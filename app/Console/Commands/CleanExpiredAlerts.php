<?php

namespace App\Console\Commands;

use App\Interfaces\Repositories\AlertRepositoryInterface;
use Illuminate\Console\Command;

class CleanExpiredAlerts extends Command
{
    protected $signature = 'alerts:clean-expired';
    protected $description = 'Elimina notificaciones expiradas';

    protected AlertRepositoryInterface $alertRepository;

    public function __construct(AlertRepositoryInterface $alertRepository)
    {
        parent::__construct();
        $this->alertRepository = $alertRepository;
    }

    public function handle()
    {
        $deleted = $this->alertRepository->deleteExpired();
        $this->info("Se eliminaron {$deleted} notificaciones expiradas");
    }
}
