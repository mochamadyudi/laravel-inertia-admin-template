<?php

namespace App\Http\Controllers\Dashboard\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneralController extends Controller
{
  public function pricing()
  {
    $seo = $this->seo()
      ->setTitle('Pricing - General | Pages')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);

    return Inertia::render('Dashboard/Pages/App/profile.page', $state->go());
  }
  public function faq()
  {
    $seo = $this->seo()
      ->setTitle('Pricing - General | Pages')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);

    return Inertia::render('Dashboard/Pages/App/profile.page', $state->go());
  }
  public function invoice()
  {
    $seo = $this->seo()
      ->setTitle('Invoice - General | Pages')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);

    return Inertia::render('Dashboard/Pages/General/invoice.page', $state->go());
  }
}
