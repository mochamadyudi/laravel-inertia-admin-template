<?php

namespace App\Http\Controllers\Pages\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function login_1(){
      $seo = $this->seo()
        ->setTitle('Login 1 | Authorization')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Auth/login/login-1.page', $state->go());
    }
    public function login_2(){
      $seo = $this->seo()
        ->setTitle('Login 2 | Authorization')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Auth/login/login-2.page', $state->go());
    }
    public function login_3(){
      $seo = $this->seo()
        ->setTitle('Login 3 | Authorization')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Auth/login/login-3.page', $state->go());
    }
}
