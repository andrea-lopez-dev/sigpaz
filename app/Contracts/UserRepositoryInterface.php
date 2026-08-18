<?php

namespace App\Contracts;

use App\Domain\Entities\User;

interface UserRepositoryInterface
{
    public function find(int $id): ?User;
    public function findByUsername(string $username): ?User;
    public function findByEmail(string $email): ?User;
    public function create(array $data): User;
    public function update(int $id, array $data): User;
    public function delete(int $id): bool;
    public function authenticate(string $username, string $password): ?User;
    public function changePassword(int $userId, string $newPassword): bool;
    public function updateLastAccess(int $userId): void;
}
