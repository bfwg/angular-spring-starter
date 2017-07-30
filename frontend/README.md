# Angular4 Spring Boot JWT Starter
This sub-project is the frontend UI portion of the project and it was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

**Make sure you also have NPM 3.1, Node 6.9.5 and angular-cli@1.0.0 globally installed**

## File Structure
```
angular-spring-starter/frontend
 ├──src/
 │   ├──app                                                     * WebApp: folder
 │   │   ├──conponent                                           * stores all the reuseable components
 │   │   │   ├──api-card                                        * the card component in the home page
 │   │   │   ├──footer
 │   │   │   ├──github                                          * github banner in home page
 │   │   │   └──header
 │   │   ├──guard
 │   │   │   ├──login.guard.ts                                  * prevents unauthticated users from going into certain routes
 │   │   │   └──guest.guard.ts                                  * prevents authticated user from going into certain routes. e.g /login
 │   │   ├──home                                                * home dashboard component
 │   │   ├──login                                               * login page card component
 │   │   ├──change-password                                     * change password card component
 │   │   ├──not-found                                           * not found page component
 │   │   ├──service
 │   │   │   ├──api.service.ts                                  * base api service class, the parent class for all api related services
 │   │   │   ├──auth.service.ts                                 * auth related api service like /login /logout
 │   │   │   ├──config.service.ts                               * global api path config file, this service stores all the app related api paths
 │   │   │   ├──foo.service.ts                                  * demo public api service FOO
 │   │   │   └──user.service.ts                                 * service for init user info and view user info
 │   │   │       ├──DeleteableModelRepository.java              * base repository that overwrites the findAll method.
 │   │   │       └──UserRepository.java
 │   │   ├──app-routing.module.ts                               * main router module
 │   │   ├──app.component.*                                     * main app component
 │   │   └──app.module.ts                                       * mian app module
 │   ├──assets                                                  * static files, images etc.
 │   └──environments
 │       ├──environments.prod.ts                                * production env config file
 │       └──environments.ts                                     * develop env config file
 ├──karma.conf.js                                               * karma config for our unit tests
 ├──package.json                                                * what npm uses to manage it's dependencies
 ├──protractor.conf.js                                          * protractor config for our end-to-end tests
 ├──proxy.conf.json                                             * proxy frontend request to backend :8080
 ├──tsconfig.json                                               * typescript config used outside webpack
 └──tslint.json                                                 * typescript lint config
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `../server/src/main/resorces/static/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
