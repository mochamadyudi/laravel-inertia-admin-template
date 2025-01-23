<?php

namespace App\Traits;

use App\Services\SEOService;

trait SEOTrait
{
  public function seo(): SEOService
  {
    return new SEOService();
  }
}
