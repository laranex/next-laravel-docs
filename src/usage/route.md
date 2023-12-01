# Route

[[toc]]

You can generate a route by following command.

```bash
php artisan next:route blog v1 --api
```
::: info
Generated route will be at `routes/api/v1/blog.php`
:::
### Arguments

- route : name of the generated route file
- versionOrDirectory (optional) : version of the route or directory where the route file will be generated

### Options

- --api : generated route file will be store in a api See more at
  - [Configuration](/configuration.html#config)
  - [NextLaravelServiceProvider.php](https://github.com/laranex/next-laravel/blob/master/src/NextLaravelServiceProvider.php#L46)
  - [RouteMakeCommand.php](https://github.com/laranex/next-laravel/blob/master/src/Commands/RouteMakeCommand.php)
- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file

### Calling A Controller Action

```php
Route::group(['prefix' => '/v1/blogs'], function() {
    Route::post('/', [BlogController::class, 'store']);
});
```
