<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name') }}</title>
        @viteReactRefresh 
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        <!-- As you can see, we will use vite with jsx syntax for React-->
        @inertiaHead

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    </head>
    <body style="font-family: Nunito">
        @inertia
    </body>
</html>