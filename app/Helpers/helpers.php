<?php

if(!function_exists('filterMenuByRoleAndPermissions')){
  function filterMenuByRoleAndPermissions(array $menus, string $role, array $userPermissions): array
  {
    $filteredMenus = [];


    foreach ($menus as $menu) {
      // Cek apakah peran saat ini ada dalam daftar peran yang diizinkan
      $roleMatches = in_array($role, $menu['roles']);

      // Cek apakah pengguna memiliki permissions yang diperlukan
      $permissionsMatch = empty($menu['permissions']) || !array_diff($menu['permissions'], $userPermissions);

      if(!empty($menu['roles']) && count($menu['roles']) > 0){
        if($roleMatches){
          if (isset($menu['children']) && is_array($menu['children'])) {
            $menu['children'] = filterMenuByRoleAndPermissions($menu['children'], $role, $userPermissions);
            if (!empty($menu['children'])) {
              $filteredMenus[] = $menu;
            }
          } else {
            $filteredMenus[] = $menu;
          }
        }

      }else if(!empty($menu['permissions']) && count($menu['permissions']) > 0){
        if($permissionsMatch){
          if (isset($menu['children']) && is_array($menu['children'])) {
            $menu['children'] = filterMenuByRoleAndPermissions($menu['children'], $role, $userPermissions);
            if (!empty($menu['children'])) {
              $filteredMenus[] = $menu;
            }
          } else {
            $filteredMenus[] = $menu;
          }
        }

      }else{
        if (isset($menu['children']) && is_array($menu['children'])) {
          $menu['children'] = filterMenuByRoleAndPermissions($menu['children'], $role, $userPermissions);
          if (!empty($menu['children'])) {
            $filteredMenus[] = $menu;
          }
        } else {
          $filteredMenus[] = $menu;
        }
      }
    }

    return $filteredMenus;
  }
}
