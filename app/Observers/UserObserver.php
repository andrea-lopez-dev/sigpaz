<?php

namespace App\Observers;

use App\Domain\Entities\User;
use Illuminate\Support\Facades\Log;

class UserObserver
{
    public function creating(User $user): void
    {
        Log::info('Creating user', ['username' => $user->nombre_usuario]);

        // Validar que el email no exista
        if (User::where('email_login', $user->email_login)->exists()) {
            throw new \Exception('Email already exists');
        }
    }

    public function created(User $user): void
    {
        Log::info('User created successfully', [
            'id' => $user->id_usuario,
            'username' => $user->nombre_usuario
        ]);

        // Enviar email de bienvenida
        // event(new UserCreated($user));
    }

    public function updating(User $user): void
    {
        Log::info('Updating user', [
            'id' => $user->id_usuario,
            'changes' => $user->getDirty()
        ]);
    }

    public function updated(User $user): void
    {
        Log::info('User updated', [
            'id' => $user->id_usuario,
            'username' => $user->nombre_usuario
        ]);
    }

    public function deleting(User $user): void
    {
        Log::warning('Deleting user', [
            'id' => $user->id_usuario,
            'username' => $user->nombre_usuario
        ]);
    }

    public function deleted(User $user): void
    {
        Log::warning('User deleted', [
            'id' => $user->id_usuario,
            'username' => $user->nombre_usuario
        ]);
    }

    public function restored(User $user): void
    {
        Log::info('User restored', [
            'id' => $user->id_usuario,
            'username' => $user->nombre_usuario
        ]);
    }
}
