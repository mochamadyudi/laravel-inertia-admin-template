<?php

namespace App\Http\Controllers\Dashboard\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
  public function index(){
    $seo = $this->seo()
      ->setTitle('Chat App')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/Chat/page', $state->go());
  }
  public function log_call(){
    $seo = $this->seo()
      ->setTitle('Log Call')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/Chat/log-call.page', $state->go());
  }
  public function show(string $id){
    $seo = $this->seo()
      ->setTitle('Detail Chat')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([
      'id' => $id
    ]);
    return Inertia::render('Dashboard/App/Chat/show-chat.page', $state->go());
  }
}
