<?php

namespace App\Http\Controllers\Dashboard\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $seo = $this->seo()
        ->setTitle('Product List | Ecommerce')
        ->go();
      $state = $this->state();
      $state->setCollections([]);
      $state->setMeta($seo);
      $state->setState([]);
      return Inertia::render('Dashboard/App/ECommerce/page', $state->go());
    }

  /**
   * Display a listing of the resource.
   */
  public function kanban()
  {
    $seo = $this->seo()
      ->setTitle('Kanban | Project')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/ECommerce/page', $state->go());
  }
  public function scrumIndex()
  {
    $seo = $this->seo()
      ->setTitle('Scrum | Project')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/Project/Scrum/page', $state->go());
  }
  public function scrumRoadMap()
  {
    $seo = $this->seo()
      ->setTitle('Roadmap | Scrum | Project')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/Project/Scrum/roadmap/page', $state->go());
  }
  public function scrumBacklog()
  {
    $seo = $this->seo()
      ->setTitle('Backlog | Scrum | Project')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/Project/Scrum/backlog/page', $state->go());
  }
  public function scrumBoard()
  {
    $seo = $this->seo()
      ->setTitle('Board | Scrum | Project')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/Project/Scrum/board/page', $state->go());
  }
  public function scrumReports()
  {
    $seo = $this->seo()
      ->setTitle('Reports | Scrum | Project')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/Project/Scrum/reports/page', $state->go());
  }
  public function scrumSetting()
  {
    $seo = $this->seo()
      ->setTitle('Setting | Scrum | Project')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/Project/Scrum/settings.page', $state->go());
  }


}
