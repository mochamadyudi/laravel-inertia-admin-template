<?php

namespace App\Http\Controllers\Dashboard\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
  public function edit_profile(Request $request){
    $seo = $this->seo()
      ->setTitle('Edit Profile | Pages')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);

    return Inertia::render('Dashboard/Pages/Settings/edit-profile.page', $state->go());
  }
  public function change_password(Request $request){
    $seo = $this->seo()
      ->setTitle('Change Password | Pages')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);

    return Inertia::render('Dashboard/Pages/Settings/change-password.page', $state->go());
  }
  public function notification(Request $request){
    $seo = $this->seo()
      ->setTitle('Notification | Pages')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);

    return Inertia::render('Dashboard/Pages/Settings/notification.page', $state->go());
  }
  public function additional(Request $request){
    $seo = $this->seo()
      ->setTitle('Additional | Pages')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);

    return Inertia::render('Dashboard/Pages/Settings/additional.page', $state->go());
  }
}
