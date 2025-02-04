<?php

namespace App\Http\Controllers\Dashboard\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MailController extends Controller
{
    public function index(){
      $seo = $this->seo()
        ->setTitle('Mail App')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);
      return Inertia::render('Dashboard/App/Mail/page', $state->go());
    }

    public function deleted(){
      $seo = $this->seo()
        ->setTitle('Deleted Mail')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);
      return Inertia::render('Dashboard/App/Mail/deleted.page', $state->go());
    }
    public function starred(){
      $seo = $this->seo()
        ->setTitle('Starred')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);
      return Inertia::render('Dashboard/App/Mail/starred.page', $state->go());
    }
    public function draft(){
      $seo = $this->seo()
        ->setTitle('Draft')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);
      return Inertia::render('Dashboard/App/Mail/draft.page', $state->go());
    }
    public function sent(){
      $seo = $this->seo()
        ->setTitle('Sent')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);
      return Inertia::render('Dashboard/App/Mail/sent.page', $state->go());
    }
    public function compose(){
      $seo = $this->seo()
        ->setTitle('Compose')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);
      return Inertia::render('Dashboard/App/Mail/compose.page', $state->go());
    }
}
