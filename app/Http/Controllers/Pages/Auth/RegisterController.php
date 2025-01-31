<?php

namespace App\Http\Controllers\Pages\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function register_1(){
      $seo = $this->seo()
        ->setTitle('Register 1 | Authorization')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Auth/register/register-1.page', $state->go());
    }
    public function register_2(){
      $seo = $this->seo()
        ->setTitle('Register 2 | Authorization')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Auth/register/register-2.page', $state->go());
    }
    public function register_3(){
      $seo = $this->seo()
        ->setTitle('Register 3 | Authorization')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Auth/register/register-3.page', $state->go());
    }
}
