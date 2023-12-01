# Configuration

[[toc]]

## Publishable Assets

:::info Note

Publishing the package assets is optional and you are not required to do this if you don't need to.
:::

### config

You may run the following command to publish the configuration file.

```bash
php artisan vendor:publish --tag=next-laravel-config
```

Following is the default configuration file, and you are free to update the values as per your need.

```php
return [
    'enable_routes' => env('NEXT_LARAVEL_ENABLE_ROUTES', true),
    'web_routes_prefix' => env('NEXT_LARAVEL_WEB_ROUTES_PREFIX', ''),
    'api_routes_prefix' => env('NEXT_LARAVEL_API_ROUTES_PREFIX', 'api')
];
```

| Option            | Default |                                                           Action |
|-------------------|:-------:|-----------------------------------------------------------------:|
| enable_routes     |  true   | Should the package load the routes from routes/api & routes/web? |
| web_routes_prefix |   ''    |               Prefix for registering the routes under routes/web |   
| api_routes_prefix |   ''    |               Prefix for registering the routes under routes/api |

### Stubs

```bash
 php artisan vendor:publish --tag=next-laravel-stubs
```


