<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse|Response
    {
      $seo = $this->seo()
      ->setTitle('Email Verified')
      ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([
      'status'=> session('status')
      ]);
      if ($request->user()->hasVerifiedEmail()) {
        return Inertia::render('Auth/verify/email-verified.page', $state->go());
      }

      if ($request->user()->markEmailAsVerified()) {
          event(new Verified($request->user()));
      }

      return redirect()->intended(route('dashboard', absolute: false).'?verified=1');
    }
}
