<?php

namespace App\Http\Controllers\Pages\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VerifyController extends Controller
{
    public function email(){
      $seo = $this->seo()
        ->setTitle('Verify Email | Authorization')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Auth/verify/email-verification.page', $state->go());
    }
    public function verified(){
      $seo = $this->seo()
        ->setTitle('Verified Successfully | Authorization')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Auth/verify/email-verified.page', $state->go());
    }
}
