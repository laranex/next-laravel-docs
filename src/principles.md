# Principles

[[toc]]

> Next Laravel is not a new framework, it is just a set of principles which you can follow to build a better Laravel Application.
> You just need to follow the following principles, and the Application will turn into `better` and more `human-readable` code.

### Routes

Route are just the same as Laravel default routes. The only difference is that we load our routes from our NextLaravelServiceProvider and of course, 
you can have 100% control over the routes. See more at
- [Configuration](/configuration.html#config)
- [NextLaravelServiceProvider.php](https://github.com/laranex/next-laravel/blob/master/src/NextLaravelServiceProvider.php#L46)

### Module
Module is where we wrap our business layers into separate units. A module can have followings.
- HTTP
  - Controllers
  - Requests
- Features
- Jobs

:::warning
Resources under modules are `not sharable` across the application and these are intended for single purpose.
This means that you can only consume these resources from the same module.
:::

### Controller

Controller is Responsible for
- Serving the Feature
- Returning everything returned from Feature to the Request

### Feature

Feature is Responsible for
- Validating the Request
- Running Job(s)/Operations(s)
- Mapping the data from Job(s) to response
- Returning the HTTP Response to the Controller Method

### Request

Request is Responsible for
- Validating the incoming HTTP Request
- Authorization of the Request

### Operation

Operation is Responsible for
- Running the Job(s)

### Job

Job is Responsible for
- Handling Laravel Models
- Providing the data to Feature

### Operation VS Feature

Even though both of Operation and Feature are responsible for running the Job(s), there is a slight difference between them.
- Feature can be served from the Controller but the Operation cannot be.
- Operation can only be run from the Feature. It means it cannot work without the Feature.
- Operation is optional in application, but the Feature is not.

:::tip
Operation can be useful in running a set of Jobs which will have to be run from the another Feature as well.
Instead of running same Job(s) from multiple Features, we can `collect those duplicate Job(s) into a single Operation`,
and run that Operation from multiple Features.
:::
