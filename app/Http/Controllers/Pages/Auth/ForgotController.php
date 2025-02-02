<?php

namespace App\Http\Controllers\Pages\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ForgotController extends Controller
{
  public function password()
  {
    $seo = $this->seo()
      ->setTitle('Forgot Password | Authorization')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);

    return Inertia::render('Auth/forgot/password.page', $state->go());
  }
}
