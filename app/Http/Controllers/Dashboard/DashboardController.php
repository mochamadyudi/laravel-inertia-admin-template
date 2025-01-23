<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
      $seo = $this->seo()
        ->setTitle('Dashboard')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);
      return Inertia::render('Dashboard/page', $state->go());
    }
}
