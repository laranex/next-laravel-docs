# Job

[[toc]]

You can generate a job by following command.

```bash
php artisan next:job StoreBlog Blog
```
::: info
Generated job will be at `app/Modules/BlogModule/Jobs/StoreBlogJob.php`
:::
### Arguments

- job : name of the generated job file
- module : name of the module where the job file will be generated

### Options
- --queue : the job will be generated as queueable job
- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file
- See more at
  - [JobMakeCommand.php](https://github.com/laranex/next-laravel/blob/master/src/Commands/JobMakeCommand.php)

### Job
```php
use Laranex\NextLaravel\Cores\Job;

class StoreBlogJob extends Job
{
    private array $payload;

    public function __construct(array $payload)
    {
        $this->payload = $payload;
    }

    public function handle(): void
    {
        // here is your logic to handle data
    }
}
```

### Queue Job
You may turn any job into a queueable job that will be dispatched using Laravel Queues rather than running synchronously, 
by simply extending `Laranex\NextLaravel\Cores\QueueableJob`.
```php
use Laranex\NextLaravel\Cores\QueueableJob;

class NotifyViaEmailJob extends QueueableJob
{
    private array $payload;

    public function __construct(array $payload)
    {
        $this->payload = $payload;
    }

    public function handle(): void
    {
        // notify to each subscriber will be processed in the queue
    }
}
```
