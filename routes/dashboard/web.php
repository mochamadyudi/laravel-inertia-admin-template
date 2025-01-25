<?php

use App\Http\Controllers\Dashboard;
use Illuminate\Support\Facades\Route;

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
Route::get('/', [Dashboard\DashboardController::class,'index'])->name('dashboard');
