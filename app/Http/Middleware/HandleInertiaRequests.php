<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Services\MenuService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
  /**
   * The root template that is loaded on the first page visit.
   *
   * @var string
   */
  protected $rootView = 'app';

  /**
   * Determine the current asset version.
   */
  public function version(Request $request): ?string
  {
    return parent::version($request);
  }

  /**
   * Define the props that are shared by default.
   *
   * @return array<string, mixed>
   */
  public function share(Request $request): array
  {
    $search = $request->getQueryString();
    return [
      ...parent::share($request),
      'auth' => [
        'user' => $request->user(),
      ],
      'ziggy' => fn() => [
        ...(new Ziggy)->toArray(),
        'search' => $search,
        'location' => $request->url(),
      ],
      'themes'=> $this->themes(),
      'menu' => $this->menus($request),
    ];
  }

  private function menus(Request $request): array
  {
    $permissions = [];
    $role = '';
    if (Auth::check()) {
      $user = Cache::remember(implode('-', ['USER_ID', Auth::id()]), now()->addMinutes(30), function () {
        return User::find(Auth::id());
      });
      $user->getPermissionNames();
      $permissions = $user->getPermissionsViaRoles()->pluck('name')->toArray();
      $role = $user->roles()->first()->name;
    }

    return [
      'dashboard' => $this->_menuDashboard($request, $role, $permissions)
    ];
  }

  private function _menuDashboard(Request $request, $role, array $permissions): array
  {
    $dashboard = MenuService::idx();
    return filterMenuByRoleAndPermissions($dashboard, $role, $permissions);
  }

  private function themes(){
    return config('themes.theme');
  }
}
