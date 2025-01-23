<?php
return [
  'title' => env('SEO_TITLE', 'Laravel'),
  'description' => env('SEO_DESCRIPTION', 'Lorem ipsum dolor sit amet'),
  'keywords' => env('SEO_KEYWORDS', 'Lorem ipsum dolor sit amet'),
  'canonical' => env('SEO_CANONICAL', env('APP_URL', 'http://saas-app.test')),
  'meta' => [
    'title' => env('SEO_META_TITLE', 'Laravel'),
    'description' => env('SEO_META_DESCRIPTION', 'Lorem ipsum dolor sit amet'),
    'author' => env('SEO_META_AUTHOR', '@yuyuid'),
    'icon' => env('SEO_META_ICON', ''),
    'opengraph' => [
      [
        "property" => "og:title",
        "content" => env('SEO_TITLE', 'Laravel')
      ],
      [
        "property" => "og:description",
        "content" => ""
      ],
      [
        "property" => "og:url",
        "content" => "https://demo.test/dashboard/components/general/button"
      ],
      [
        "property" => "og:type",
        "content" => ""
      ],
      [
        "property" => "og:site_name",
        "content" => ""
      ],
      [
        "property" => "og:locale",
        "content" => ""
      ],
      [
        "property" => "og:image",
        "content" => ""
      ],
      [
        "property" => "og:image:alt",
        "content" => ""
      ]
    ],
  ]
];
