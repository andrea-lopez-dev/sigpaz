<?php

namespace App\Repositories;

use App\Contracts\UserRepositoryInterface;
use App\Domain\Entities\User;
use Illuminate\Support\Facades\Cache;

class CacheUserRepository implements UserRepositoryInterface
{
    protected $repository;

    public function __construct(UserRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function authenticate(string $username, string $password): ?User
    {
        // No cachear autenticación por seguridad
        return $this->repository->authenticate($username, $password);
    }

    public function findByUsername(string $username): ?User
    {
        $cacheKey = "user.username.{$username}";
        return Cache::remember($cacheKey, 3600, function () use ($username) {
            return $this->repository->findByUsername($username);
        });
    }

    public function findByEmail(string $email): ?User
    {
        $cacheKey = "user.email.{$email}";
        return Cache::remember($cacheKey, 3600, function () use ($email) {
            return $this->repository->findByEmail($email);
        });
    }

    public function find(int $id): ?User
    {
        $cacheKey = "user.{$id}";
        return Cache::remember($cacheKey, 3600, function () use ($id) {
            return $this->repository->find($id);
        });
    }

    // Los demás métodos simplemente delegar al repositorio base
    public function create(array $data): User
    {
        return $this->repository->create($data);
    }

    public function update(int $id, array $data): User
    {
        return $this->repository->update($id, $data);
    }

    public function delete(int $id): bool
    {
        return $this->repository->delete($id);
    }

    public function changePassword(int $userId, string $newPassword): bool
    {
        return $this->repository->changePassword($userId, $newPassword);
    }

    public function updateLastAccess(int $userId): void
    {
        $this->repository->updateLastAccess($userId);
    }
}
