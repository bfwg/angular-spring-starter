## Running frontent the app
**Make sure you also have NPM 3.1, Node 6.9.5 and angular-cli@1.0.0 globally installed**

```bash
# change directory to server
cd angular-spring-starter/frontend

# install the repo with npm
npm install

# start the dev-server
npm start

# the app will be running on port 4200
```
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:4200/`).

### build frontend app for production
```bash
npm run build
```

### File Structure
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
 │   │   │   └──login.guard.ts                                  * the guard server that prevent authticated user from going into certain routes
 │   │   ├──home                                                * home dashboard component
 │   │   ├──login                                               * login page card component
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
 ├──tsconfig.json                                               * typescript config used outside webpack
 └──tslint.json                                                 * typescript lint config
```

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 2.1.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

