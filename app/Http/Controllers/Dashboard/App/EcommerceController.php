<?php

namespace App\Http\Controllers\Dashboard\App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EcommerceController extends Controller
{
  private function getData(): array
  {
    return [
      [
        'description'=> 'Kaos putih lengan pendek',
        'qty_limit' => 10,
        'id' => 1,
        'thumbnail' => asset('assets/img/product/1.png'),
        'name' => 'T-Shirt White',
        'category' => 'cloths',
        'price' => 77.00,
        'compare_price' => 70.00,
        'cost_per_item' => 65.00,
        'tax_rate' => 10,
        'tag' => ['cloths'],
        'currency' => '$',
        'qty' => 99,
        'variants'=> [
          [
            'id' => 1,
            'name' => 'T-Shirt Red',
            'price' => 78.00,
            'sku'=> 'SKU00001',
            'image' => asset('assets/img/product/1.png')
          ]
        ],
        'shipping'=> [
          'width' => 10,
          'height' => 10,
          'weight' => 1,
          'fee' => 4.0,
          'uom'=> [
            'width' => 'cm',
            'height' => 'm',
            'weight' => 'kg',
          ]
        ],
      ],
      [
        'description'=> 'Sepatu olahraga Nike merah',
        'qty_limit' => 10,
        'id' => 2,
        'thumbnail' => asset('assets/img/product/2.png'),
        'name' => 'Nike Red',
        'category' => 'shoes',
        'price' => 23.50,
        'compare_price' => 25.00,
        'cost_per_item' => 20.00,
        'tax_rate' => 5,
        'tag' => ['shoes', 'sport'],
        'currency' => '$',
        'qty' => 10,
        'variants'=> [
          [
            'id' => 2,
            'name' => 'Nike Red Size 42',
            'price' => 24.00,
            'sku'=> 'SKU00002',
            'image' => asset('assets/img/product/2.png')
          ]
        ],
        'shipping'=> [
          'width' => 30,
          'height' => 12,
          'weight' => 1.2,
          'fee' => 6.5,
          'uom'=> [
            'width' => 'cm',
            'height' => 'cm',
            'weight' => 'kg',
          ]
        ],
      ],
      [
        'description'=> 'Tas warna merah elegan',
        'qty_limit' => 10,
        'id' => 3,
        'thumbnail' => asset('assets/img/product/3.png'),
        'name' => 'Red Bag',
        'category' => 'bags',
        'price' => 13.50,
        'compare_price' => 15.00,
        'cost_per_item' => 10.00,
        'tax_rate' => 8,
        'tag' => ['bags', 'fashion'],
        'currency' => '$',
        'qty' => 5,
        'variants'=> [
          [
            'id' => 3,
            'name' => 'Red Bag Mini',
            'price' => 14.00,
            'sku'=> 'SKU00003',
            'image' => asset('assets/img/product/3.png')
          ]
        ],
        'shipping'=> [
          'width' => 25,
          'height' => 20,
          'weight' => 0.8,
          'fee' => 5.0,
          'uom'=> [
            'width' => 'cm',
            'height' => 'cm',
            'weight' => 'kg',
          ]
        ],
      ],
      [
        'description'=> 'Lorem ipsum dolor sit amet',
        'qty_limit' => 10,
        'id' => 4,
        'thumbnail' => asset('assets/img/product/4.png'),
        'name' => 'Red Blazer',
        'category' => 'apparel',
        'price' => 49.99,
        'compare_price' => 45.00,
        'cost_per_item' => 40.00,
        'tax_rate' => 10,
        'tag' => ['apparel'],
        'currency' => '$',
        'qty' => 10,
        'variants'=> [],
        'shipping'=> [
          'width' => 10,
          'height' => 10,
          'weight' => 1,
          'fee' => 4.0,
          'uom'=> ['width' => 'cm','height' => 'm','weight' => 'kg']
        ],
      ],
      [
        'description'=> 'Lorem ipsum dolor sit amet',
        'qty_limit' => 10,
        'id' => 5,
        'thumbnail' => asset('assets/img/product/handphone.png'),
        'name' => 'Smartphone X',
        'category' => 'electronics',
        'price' => 299.99,
        'compare_price' => 279.99,
        'cost_per_item' => 250.00,
        'tax_rate' => 10,
        'tag' => ['electronics'],
        'currency' => '$',
        'qty' => 15,
        'variants'=> [],
        'shipping'=> [
          'width' => 10,
          'height' => 10,
          'weight' => 1,
          'fee' => 4.0,
          'uom'=> ['width' => 'cm','height' => 'm','weight' => 'kg']
        ],
      ],
      [
        'description'=> 'Lorem ipsum dolor sit amet',
        'qty_limit' => 10,
        'id' => 6,
        'thumbnail' => asset('assets/img/product/handphone-2.png'),
        'name' => 'Smartphone Y',
        'category' => 'electronics',
        'price' => 349.99,
        'compare_price' => 320.00,
        'cost_per_item' => 300.00,
        'tax_rate' => 10,
        'tag' => ['electronics'],
        'currency' => '$',
        'qty' => 10,
        'variants'=> [],
        'shipping'=> [
          'width' => 10,
          'height' => 10,
          'weight' => 1,
          'fee' => 4.0,
          'uom'=> ['width' => 'cm','height' => 'm','weight' => 'kg']
        ],
      ],
      [
        'description'=> 'Lorem ipsum dolor sit amet',
        'qty_limit' => 10,
        'id' => 7,
        'thumbnail' => asset('assets/img/product/hat-1.png'),
        'name' => 'Baseball Cap',
        'category' => 'accessories',
        'price' => 9.99,
        'compare_price' => 8.50,
        'cost_per_item' => 7.00,
        'tax_rate' => 10,
        'tag' => ['accessories'],
        'currency' => '$',
        'qty' => 20,
        'variants'=> [],
        'shipping'=> [
          'width' => 10,
          'height' => 10,
          'weight' => 1,
          'fee' => 4.0,
          'uom'=> ['width' => 'cm','height' => 'm','weight' => 'kg']
        ],
      ],
      [
        'description'=> 'Lorem ipsum dolor sit amet',
        'qty_limit' => 10,
        'id' => 8,
        'thumbnail' => asset('assets/img/product/hat-2.png'),
        'name' => 'Fedora Hat',
        'category' => 'accessories',
        'price' => 14.99,
        'compare_price' => 12.50,
        'cost_per_item' => 10.00,
        'tax_rate' => 10,
        'tag' => ['accessories'],
        'currency' => '$',
        'qty' => 12,
        'variants'=> [],
        'shipping'=> [
          'width' => 10,
          'height' => 10,
          'weight' => 1,
          'fee' => 4.0,
          'uom'=> ['width' => 'cm','height' => 'm','weight' => 'kg']
        ],
      ],
      [
        'description'=> 'Lorem ipsum dolor sit amet',
        'qty_limit' => 10,
        'id' => 9,
        'thumbnail' => asset('assets/img/product/headphone.png'),
        'name' => 'Wireless Headphones',
        'category' => 'electronics',
        'price' => 89.99,
        'compare_price' => 80.00,
        'cost_per_item' => 70.00,
        'tax_rate' => 10,
        'tag' => ['electronics'],
        'currency' => '$',
        'qty' => 7,
        'variants'=> [],
        'shipping'=> [
          'width' => 10,
          'height' => 10,
          'weight' => 1,
          'fee' => 4.0,
          'uom'=> ['width' => 'cm','height' => 'm','weight' => 'kg']
        ],
      ],
      [
        'description'=> 'Lorem ipsum dolor sit amet',
        'qty_limit' => 10,
        'id' => 10,
        'thumbnail' => asset('assets/img/product/laptop-1.png'),
        'name' => 'Laptop Pro 13"',
        'category' => 'electronics',
        'price' => 999.99,
        'compare_price' => 950.00,
        'cost_per_item' => 900.00,
        'tax_rate' => 10,
        'tag' => ['electronics'],
        'currency' => '$',
        'qty' => 5,
        'variants'=> [],
        'shipping'=> [
          'width' => 10,
          'height' => 10,
          'weight' => 1,
          'fee' => 4.0,
          'uom'=> ['width' => 'cm','height' => 'm','weight' => 'kg']
        ],
      ],
      [
        'description'=> 'Lorem ipsum dolor sit amet',
        'qty_limit' => 10,
        'id' => 11,
        'thumbnail' => asset('assets/img/product/laptop-2.png'),
        'name' => 'Laptop Air 15"',
        'category' => 'electronics',
        'price' => 849.99,
        'compare_price' => 799.99,
        'cost_per_item' => 750.00,
        'tax_rate' => 10,
        'tag' => ['electronics'],
        'currency' => '$',
        'qty' => 6,
        'variants'=> [],
        'shipping'=> [
          'width' => 10,
          'height' => 10,
          'weight' => 1,
          'fee' => 4.0,
          'uom'=> ['width' => 'cm','height' => 'm','weight' => 'kg']
        ],
      ],
    ];

  }

  public function index(Request $request)
  {
    $category = [
      [
        'label' => 'All',
        'value' => ''
      ],
      [
        'label' => 'Cloths',
        'value' => 'cloths'
      ],
      [
        'label' => 'Shoes',
        'value' => 'shoes'
      ],
      [
        'label' => 'Bags',
        'value' => 'bags'
      ],
      [
        'label' => 'Electronics',
        'value' => 'electronics'
      ],
      [
        'label' => 'Accessories',
        'value' => 'accessories'
      ],
    ];

    $seo = $this->seo()
      ->setTitle('Product List | Ecommerce')
      ->go();
    $state = $this->state();
    $state->setCollections([
      'data' => $this->getData(),
      'category' => $category,
    ]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/ECommerce/page', $state->go());
  }

  public function create()
  {
    $seo = $this->seo()
      ->setTitle('Create Product | Ecommerce')
      ->go();
    $state = $this->state();
    $state->setCollections([]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/ECommerce/create.page', $state->go());
  }

  public function show(Request $request, int $id)
  {
    $data = collect($this->getData())->firstWhere('id', $id);

    $seo = $this->seo()
      ->setTitle('Show Product | Ecommerce')
      ->go();
    $state = $this->state();
    $state->setCollections([
      'data' => $data,
    ]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/ECommerce/show.page', $state->go());
  }

  public function edit(Request $request, int $id)
  {
    $data = collect($this->getData())->firstWhere('id', $id);

    $seo = $this->seo()
      ->setTitle('Show Product | Ecommerce')
      ->go();
    $state = $this->state();
    $state->setCollections([
      'data' => $data,
    ]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/ECommerce/edit.page', $state->go());
  }

  public function store(Request $request)
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

  public function orderIndex(Request $request)
  {
    $seo = $this->seo()
      ->setTitle('Order | Ecommerce')
      ->go();
    $state = $this->state();
    $state->setCollections([
      'data' => $this->getData(),
    ]);
    $state->setMeta($seo);
    $state->setState([]);
    return Inertia::render('Dashboard/App/ECommerce/order/page', $state->go());
  }

}
