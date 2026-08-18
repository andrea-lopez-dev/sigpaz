<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Denuncia;
use Illuminate\Auth\Access\Response;

class DenunciaPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view-denuncias') ||
               $user->hasRole(['admin', 'supervisor']);
    }

    public function view(User $user, Denuncia $denuncia): bool
    {
        return $user->hasPermissionTo('view-denuncias') ||
               $user->id === $denuncia->id_usuario_creacion ||
               $user->hasRole('admin');
    }

    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create-denuncias') ||
               $user->hasRole(['admin', 'secretario']);
    }

    public function update(User $user, Denuncia $denuncia): bool
    {
        return $user->hasPermissionTo('edit-denuncias') ||
               ($user->id === $denuncia->id_usuario_creacion &&
                $denuncia->id_estado_denuncia === 1) ||
               $user->hasRole('admin');
    }

    public function delete(User $user, Denuncia $denuncia): bool
    {
        return $user->hasPermissionTo('delete-denuncias') &&
               $denuncia->puedeEliminar() &&
               $user->hasRole('admin');
    }

    public function export(User $user, Denuncia $denuncia): bool
    {
        return $user->hasPermissionTo('export-denuncias') ||
               $user->id === $denuncia->id_usuario_creacion ||
               $user->hasRole(['admin', 'supervisor']);
    }
}
