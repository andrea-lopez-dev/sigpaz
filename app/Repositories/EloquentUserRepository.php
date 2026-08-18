<?php

namespace App\Repositories;

use App\Contracts\UserRepositoryInterface;
use App\Domain\Entities\User;
use Illuminate\Support\Facades\Hash;

class EloquentUserRepository implements UserRepositoryInterface
{
    public function find(int $id): ?User
    {
        return User::find($id);
    }

    public function findByUsername(string $username): ?User
    {
        return User::where('nombre_usuario', $username)->first();
    }

    public function findByEmail(string $email): ?User
    {
        return User::where('email_login', $email)->first();
    }

    public function create(array $data): User
    {
        return User::create($data);
    }

    public function update(int $id, array $data): User
    {
        $user = $this->find($id);

        if (!$user) {
            throw new \Exception("User not found");
        }

        $user->update($data);
        return $user->fresh();
    }

    public function delete(int $id): bool
    {
        return User::destroy($id) > 0;
    }

    public function authenticate(string $username, string $password): ?User
    {
        $user = $this->findByUsername($username) ?: $this->findByEmail($username);

        if (!$user || !$user->isActive()) {
            return null;
        }

        if (!Hash::check($password, $user->contrasena_hash)) {
            return null;
        }

        return $user;
    }

    public function changePassword(int $userId, string $newPassword): bool
    {
        $user = $this->find($userId);

        if (!$user) {
            return false;
        }

        $user->contrasena_hash = Hash::make($newPassword);
        return $user->save();
    }

    public function updateLastAccess(int $userId): void
    {
        $user = $this->find($userId);

        if ($user) {
            $user->recordLastAccess();
        }
    }
}
