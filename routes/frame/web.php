<?php

use App\Http\Controllers\Frame;
use Illuminate\Support\Facades\Route;


Route::prefix('float-button')
  ->group(function () {
    Route::get('/', [Frame\FloatButtonController::class, 'index'])->name('frame.float-button.index');
    Route::get('/type', [Frame\FloatButtonController::class, 'type'])->name('frame.float-button.type');
    Route::get('/shape', [Frame\FloatButtonController::class, 'shape'])->name('frame.float-button.shape');
    Route::get('/group', [Frame\FloatButtonController::class, 'group'])->name('frame.float-button.group');
    Route::get('/placement', [Frame\FloatButtonController::class, 'placement'])->name('frame.float-button.placement');
    Route::get('/controlled', [Frame\FloatButtonController::class, 'controlled'])->name('frame.float-button.controlled');
    Route::get('/back-top', [Frame\FloatButtonController::class, 'back_top'])->name('frame.float-button.back_top');
    Route::get('/badge', [Frame\FloatButtonController::class, 'badge'])->name('frame.float-button.badge');
  });
