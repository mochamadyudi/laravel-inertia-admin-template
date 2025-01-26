<?php

namespace App\Http\Controllers\Frame;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FloatButtonController extends Controller
{
    public function index(){
      $seo = $this->seo()
        ->setTitle('Float Button Basic | Frame')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Frames/FloatButton/page', $state->go());
    }
    public function type(){
      $seo = $this->seo()
        ->setTitle('Float Button Type | Frame')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Frames/FloatButton/type.page', $state->go());
    }
    public function shape(){
      $seo = $this->seo()
        ->setTitle('Float Button Shape | Frame')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Frames/FloatButton/shape.page', $state->go());
    }
    public function group(){
      $seo = $this->seo()
        ->setTitle('Float Button Group | Frame')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Frames/FloatButton/group.page', $state->go());
    }
    public function placement(){
      $seo = $this->seo()
        ->setTitle('Placement | FloatButton | Frame')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Frames/FloatButton/placement.page', $state->go());
    }
    public function badge(){
      $seo = $this->seo()
        ->setTitle('Badge | FloatButton | Frame')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Frames/FloatButton/badge.page', $state->go());
    }
    public function controlled(){
      $seo = $this->seo()
        ->setTitle('Controlled | FloatButton | Frame')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Frames/FloatButton/controlled.page', $state->go());
    }
    public function back_top(){
      $seo = $this->seo()
        ->setTitle('BackTop | FloatButton | Frame')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);

      return Inertia::render('Frames/FloatButton/backtop.page', $state->go());
    }
}
