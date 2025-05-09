<?php

namespace App\Http\Controllers\Dashboard\Components;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneralController extends Controller
{

  public function button(){
    $seo = $this->seo()
      ->setTitle('General Button | Components')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/Components/Generals/button/page', $state->go());
  }
  public function icon(){
    $seo = $this->seo()
      ->setTitle('General Icon | Components')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/Components/Generals/icon/page', $state->go());
  }
  public function float_button(){
    $seo = $this->seo()
      ->setTitle('Float Button | Components')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/Components/Generals/FloatButton/page', $state->go());
  }
  public function typography(){
    $seo = $this->seo()
      ->setTitle('General Typography | Components')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/Components/Generals/typography/page', $state->go());
  }
}
