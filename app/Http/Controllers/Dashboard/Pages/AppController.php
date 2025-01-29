<?php

namespace App\Http\Controllers\Dashboard\Pages;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AppController extends Controller
{
    public function profile(){
      $seo = $this->seo()
        ->setTitle('Profile | App | Pages')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Dashboard/Pages/App/profile.page', $state->go());
    }
    public function user_list(){
      $seo = $this->seo()
        ->setTitle('User List - App | Pages')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Dashboard/Pages/App/user-list.page', $state->go());
    }
}
