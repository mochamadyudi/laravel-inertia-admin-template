<?php

namespace App\Contracts;

interface SEOInterface
{
  /**
   * @param string $description
   */
  public function setDescription(string $description);

  /**
   * @param string $title
   */
  public function setTitle(string $title);

  /**
   * @param string $keywords
   */
  public function setKeywords(string $keywords);

  /**
   * @param string $canonical
   */
  public function setCanonical(string $canonical);
  public function setOpengraph(array $opengraph);

  public function setTwitter(array $twitter);

  public function go():array;
  public function fn():static;

  public function getTitle(): string;

  public function getDescription(): string;

  public function getKeywords(): string;

  public function getCanonical(): string;

  public function getOpengraph(): array;

  public function getTwitter(): array;

}
