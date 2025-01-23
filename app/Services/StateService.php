<?php

namespace App\Services;

use App\Contracts\StateInterface;
use Illuminate\Http\Request;

class StateService implements StateInterface
{

  private mixed $meta = null;
  private mixed $flash = null;
  private array $state = [];
  /**
   * @var array
   */
  private array $collections = [];
  private ?array $theme = [];

  public function __construct()
  {
  }

  public function fn(Request $request, array $initialState)
  {
    $this->state = array_merge($initialState, [
      'collections' => $this->getCollections(),
      'theme' => $this->getTheme(),
      'flash' => $this->getFlash(),
      'meta' => $this->getMeta()
    ]);
    return $this;
  }

  public function getCollections(): array
  {
    return $this->collections;
  }

  public function setCollections(array $coll): static
  {
    $this->collections = array_merge($this->collections, $coll);
    return $this;
  }

  public function getTheme(): array
  {
    return $this->theme;

  }

  public function setTheme($theme): static
  {
    $this->theme = array_merge($this->theme, $theme);
    return $this;

  }

  public function getFlash()
  {
    return $this->flash;
  }

  public function setFlash(string $key, string $value)
  {
    $this->flash = [
      'key' => $key,
      'value' => $value
    ];

    $this->state['flash'] = $this->flash;
    return $this;
  }

  public function getMeta()
  {
    return $this->meta;
  }

  public function setMeta($_meta): static
  {
    $this->meta = $_meta;
    return $this;
  }

  public function setState(mixed $array): static
  {
    $this->state = [
      'collections' => $this->getCollections(),
      'theme' => $this->getTheme(),
      'flash' => $this->getFlash(),
      'meta' => $this->getMeta(),
      ...$array,
    ];
    return $this;

  }

  public function go(): array
  {
    return $this->state;
  }
}
