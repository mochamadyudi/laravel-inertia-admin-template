<?php

namespace App\Contracts;

interface StateInterface
{
  public function go();

  /**
   * @param array $coll
   * @return StateInterface
   */
  public function setCollections(array $coll): static;

  public function getCollections(): array;

  public function getTheme();

  public function setTheme($theme);

  public function setFlash(string $key, string $value);

  public function getFlash();

  /**
   * @return mixed
   */
  public function setState(mixed $array): static;
}
