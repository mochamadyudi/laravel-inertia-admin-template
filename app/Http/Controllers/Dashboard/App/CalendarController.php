<?php

namespace App\Http\Controllers\Dashboard\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CalendarController extends Controller
{
  public function index(){
    $seo = $this->seo()
      ->setTitle('Calendar App')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/Calendar/page', $state->go());
  }
}
