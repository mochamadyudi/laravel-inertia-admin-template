<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UsersSeeder extends Seeder{
  public function run(){
    $super = Role::findOrCreate('super');
    $user_role = Role::findOrCreate('user');

    $user = User::create([
      'name' => 'Super Admin',
      'email' => 'test@gmail.com',
      'email_verified_at' => now(),
      'password' => bcrypt('password')
    ])->assignRole('super');
    $super->givePermissionTo(Permission::all());
    $user->syncPermissions(Permission::all());
  }
}
