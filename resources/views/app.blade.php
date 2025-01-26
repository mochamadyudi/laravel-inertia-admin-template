<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{!! isset($page['props']['meta']['title']) ? $page['props']['meta']['title'] : config('app.name', 'Laravel') !!}</title>
  <meta name="csrf-token" content="{{ csrf_token() }}"/>
  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx", 'resources/css/app.css', 'resources/scss/app.scss'])
  @inertiaHead
</head>
<body class="font-sf-pro overflow-x-hidden">
@inertia

</body>
</html>
