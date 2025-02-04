<?php

use App\Http\Controllers\Dashboard;
use Illuminate\Support\Facades\Route;

Route::prefix('app')
  ->group(function () {
    Route::prefix('mail')
      ->group(function () {
        Route::get('/deleted', [Dashboard\App\MailController::class, 'deleted'])->name('dashboard.app.mail.deleted');
        Route::get('/starred', [Dashboard\App\MailController::class, 'starred'])->name('dashboard.app.mail.starred');
        Route::get('/draft', [Dashboard\App\MailController::class, 'draft'])->name('dashboard.app.mail.draft');
        Route::get('/sent', [Dashboard\App\MailController::class, 'sent'])->name('dashboard.app.mail.sent');
        Route::get('/compose', [Dashboard\App\MailController::class, 'compose'])->name('dashboard.app.mail.compose');
        Route::get('/', [Dashboard\App\MailController::class, 'index'])->name('dashboard.app.mail.index');
      });
  });

Route::prefix('components')
  ->group(function () {
    Route::prefix('general')
      ->group(function () {
        Route::get('/float-button', [Dashboard\Components\GeneralController::class,'float_button'])->name('dashboard.components.float-button');
        Route::get('/typography', [Dashboard\Components\GeneralController::class,'typography'])->name('dashboard.components.typography');
        Route::get('/icon', [Dashboard\Components\GeneralController::class,'icon'])->name('dashboard.components.icon');
        Route::get('/button', [Dashboard\Components\GeneralController::class,'button'])->name('dashboard.components.button');
        Route::get('/', [Dashboard\Components\GeneralController::class,'button'])->name('dashboard.components.general');
      });
  });

Route::prefix('pages')
  ->group(function () {
    Route::prefix('app')
      ->group(function () {
        Route::get('/profile', [Dashboard\Pages\AppController::class, 'profile'])->name('dashboard.pages.app.profile');
        Route::get('/user-list', [Dashboard\Pages\AppController::class, 'user_list'])->name('dashboard.pages.app.user-list');
      });

    Route::prefix('setting')
      ->group(function () {
        Route::get('/additional', [Dashboard\Pages\SettingController::class, 'additional'])->name('dashboard.pages.setting.additional');
        Route::get('/billing', [Dashboard\Pages\SettingController::class, 'billing'])->name('dashboard.pages.setting.billing');
        Route::get('/notification', [Dashboard\Pages\SettingController::class, 'notification'])->name('dashboard.pages.setting.notification');
        Route::get('/change-password', [Dashboard\Pages\SettingController::class, 'change_password'])->name('dashboard.pages.setting.change-password');
        Route::get('/edit-profile', [Dashboard\Pages\SettingController::class, 'edit_profile'])->name('dashboard.pages.setting.edit-profile');
        Route::get('/', [Dashboard\Pages\SettingController::class, 'edit_profile'])->name('dashboard.pages.setting');
      });

    Route::prefix('general')
      ->group(function () {
        Route::get('/invoice', [Dashboard\Pages\GeneralController::class, 'invoice'])->name('dashboard.pages.general.invoice');
        Route::get('/faq', [Dashboard\Pages\GeneralController::class, 'faq'])->name('dashboard.pages.general.faq');
        Route::get('/pricing', [Dashboard\Pages\GeneralController::class, 'pricing'])->name('dashboard.pages.general.pricing');
        Route::get('/', function(){})->name('dashboard.pages.general');
      });

    Route::get('/', function(){

    })->name('dashboard.pages');
  });

Route::get('/', [Dashboard\DashboardController::class,'index'])->name('dashboard');
