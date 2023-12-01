# Request

[[toc]]

You can generate a request by following command.

```bash
php artisan next:request StoreBlog Blog
```
::: info
Generated request will be at `app/Modules/BlogModule/Http/Requests/StoreBlogRequest.php`
:::
### Arguments

- request : name of the generated request file
- module : name of the module where the request file will be generated

### Options

- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file
- See more at
  - [RequestMakeCommand.php](https://github.com/laranex/next-laravel/blob/master/src/Commands/RequestMakeCommand.php)


### Request
```php
use Laranex\NextLaravel\Cores\Request;

class StoreBlogRequest extends Request
{
    public function authorize(): bool
    {
        return false;
    }

    public function rules(): array
    {
        // here is your validation rules
    }
}
```
