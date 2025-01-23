<?php

namespace App\Http\Controllers;

use App\Traits\CoreTrait;
use App\Traits\SEOTrait;
use App\Traits\StateTrait;

abstract class Controller
{
    use CoreTrait, SEOTrait, StateTrait;
}
