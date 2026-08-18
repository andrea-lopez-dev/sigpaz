<?php

namespace App\UseCases;

use App\Services\AuthService;
use App\Contracts\UserRepositoryInterface;

class LoginUserUseCase
{
    private AuthService $authService;
    private UserRepositoryInterface $userRepository;

    public function __construct(
        AuthService $authService,
        UserRepositoryInterface $userRepository
    ) {
        $this->authService = $authService;
        $this->userRepository = $userRepository;
    }

    public function execute(string $username, string $password): array
    {
        // 1. Validar credenciales
        if (empty($username) || empty($password)) {
            throw new \Exception('Username and password are required');
        }

        // 2. Intentar autenticación
        $response = $this->authService->login($username, $password);

        // 3. Registrar log de acceso
        $this->logAccess($username, true);

        return $response;
    }

    private function logAccess(string $username, bool $success): void
    {
        // Registrar en logs o base de datos
        \Log::info('Login attempt', [
            'username' => $username,
            'success' => $success,
            'ip' => request()->ip(),
            'user_agent' => request()->userAgent()
        ]);
    }
}
