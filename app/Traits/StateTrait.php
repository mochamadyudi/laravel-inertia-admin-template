<?php

namespace App\Traits;

use App\Services\StateService;
use Nyholm\Psr7\Request;

trait StateTrait
{
    public function state(): StateService
    {
      return new StateService();
    }
}
