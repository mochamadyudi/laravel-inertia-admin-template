<?php

use App\Http\Controllers;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;


Route::prefix('authorization')
  ->group(function() {
    Route::get('/login/2', [Controllers\Pages\Auth\LoginController::class, 'login_2'])->name('authorization.login.2');
    Route::get('/login/3', [Controllers\Pages\Auth\LoginController::class, 'login_3'])->name('authorization.login.3');
    Route::get('/login', [Controllers\Pages\Auth\LoginController::class, 'login_1'])->name('authorization.login.1');

    Route::get('/register', [Controllers\Pages\Auth\RegisterController::class, 'register_1'])->name('authorization.register.1');
    Route::get('/register/2', [Controllers\Pages\Auth\RegisterController::class, 'register_2'])->name('authorization.register.2');
    Route::get('/register/3', [Controllers\Pages\Auth\RegisterController::class, 'register_3'])->name('authorization.register.3');

    Route::get('/forgot/password', [Controllers\Pages\Auth\ForgotController::class, 'password'])->name('authorization.forgot.password');
    Route::get('/reset/password', [Controllers\Pages\Auth\ResetController::class, 'password'])->name('authorization.reset.password');

    Route::get('/verify/email/verified', [Controllers\Pages\Auth\VerifyController::class, 'verified'])->name('authorization.verify.verified');
    Route::get('/verify/email', [Controllers\Pages\Auth\VerifyController::class, 'email'])->name('authorization.verify.email');
  });


Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
