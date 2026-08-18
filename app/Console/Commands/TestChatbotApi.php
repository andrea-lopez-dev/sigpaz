<?php

namespace App\Console\Commands;

use App\Services\ChatbotService;
use Illuminate\Console\Command;

class TestChatbotApi extends Command
{
    protected $signature = 'chatbot:test {--simple : Solo prueba de API Gemini}';
    protected $description = 'Probar el funcionamiento del chatbot';

    public function handle(ChatbotService $chatbotService)
    {
        if ($this->option('simple')) {
            $this->info('Probando API de Gemini...');
            $resultado = $chatbotService->probarApiGemini();

            $this->line($resultado['mensaje']);
            foreach ($resultado['detalles'] as $detalle) {
                $this->line("  • {$detalle}");
            }
        } else {
            $this->info('Probando servicio completo del chatbot...');
            $resultado = $chatbotService->probarServicioCompleto();

            $this->table(
                ['Prueba', 'Estado', 'Detalle'],
                collect($resultado['pruebas'])->map(function($prueba, $key) {
                    return [
                        $prueba['nombre'],
                        $prueba['exito'] ? '✅' : '❌',
                        $prueba['detalle']
                    ];
                })
            );

            $this->newLine();
            $this->info("Resumen: {$resultado['resumen']['exitosas']}/{$resultado['resumen']['total']} pruebas exitosas ({$resultado['resumen']['porcentaje']}%)");
        }

        return 0;
    }
}
