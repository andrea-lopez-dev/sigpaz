<?php

namespace App\Contracts;

interface AuthServiceInterface
{
    public function login(string $username, string $password): array;
    public function logout(): void;
    public function refresh(): array;
    public function me(): array;
    public function validateToken(string $token): bool;
}
