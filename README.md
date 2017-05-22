[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/bfwg/angular2-springboot-jwt-starter)
[![Build Status](https://travis-ci.org/bfwg/angular-spring-starter.svg?branch=master)](https://travis-ci.org/bfwg/angular-spring-starter)
[![Maintenance Status][status-image]][status-url]
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bfwg/angular-spring-jwt-starter/blob/master/LICENSE)

<p align="center">
  <a href="" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/12819525/26094670/b0f6f192-39cf-11e7-8048-ab710b3dc1d1.png" alt="Spring Boot and Angular 2" width="500" height="320"/>
  </a>
</p>

# Angular2 Spring Boot JWT Starter
> An Angular full stack starter kit featuring [Angular 4](https://angular.io), [Router](https://angular.io/docs/ts/latest/guide/router.html), [Forms](https://angular.io/docs/ts/latest/guide/forms.html),
[Http](https://angular.io/docs/ts/latest/guide/server-communication.html),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Spring boot](https://projects.spring.io/spring-boot/),
[JSON Web Token](https://jwt.io/)

> If you're looking for using Angular 1.x for frontend implementation, please check out [springboot-jwt-starter](https://github.com/bfwg/springboot-jwt-starter)
> A Spring Boot token-based security starter kit featuring [AngularJS](https://angularjs.org/) and [Spring Boot](https://projects.spring.io/spring-boot/) ([JSON Web Token](https://jwt.io/))
### [Live Demo](http://jwt.fanjin.computer)
<p align="center">
    <img width="800" alt="Springboot JWT Starter" src="https://cloud.githubusercontent.com/assets/12819525/26290994/3895daca-3e60-11e7-9465-421e0b029343.png">
</p>

### Quick start
**Make sure you have Maven and Java 1.7 or greater**
**Make sure you also have NPM 3.1, Node 6.9.5 and angular-cli@1.0.0 globally installed**
```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/bfwg/angular-spring-starter.git

# change directory to the repo's frontend folder
cd angular-spring-starter/frontend

# install the frontend dependencies with npm
# npm install @angular/cli@1.0.0 -g
npm install

# build frontend project to /server/src/main/resources/static folder
ng build

# change directory to the repo's backend folder
cd ../server

# install the server dependencies with mvn
mvn install

# start the server
mvn spring-boot:run

# the app will be running on port 8080
```

There are two user accounts present to demonstrate the different levels of access to the endpoints in
the API and the different authorization exceptions:
```
Admin - admin:123
User - user:123
```

For more detailed configuration/documentation, please check out the [frontend][frontend-doc] and [server][server-doc] folder.

### Development
Since the frontend app needs a dev-server for a faster development speed, we need a way to proxy the request to our spring boot backend which is running on port `8080`. I'm using [nginx](https://www.nginx.com/).

Nginx configuration for *Development* 

Put the below code snippet in your nginx.conf file.
We are proxying everything to port **4201**.
```
server {
    listen       4201;

    location / {
        proxy_pass http://localhost:4200;
        proxy_set_header  Host             $http_host;
        proxy_set_header  X-Real-IP        $remote_addr;
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
    }

    location ~ ^/(api|auth) {
        proxy_pass http://localhost:8080;
        proxy_set_header  Host             $http_host;
        proxy_set_header  X-Real-IP        $remote_addr;
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
    }
}
```
Nginx configuration for *Production* 

Please build the frontend app first by running `ng build` in the frontend folder. 
Put the below code snippet in your nginx.conf file.
We are proxying everything to port **80**, and redirecting everything to `index.html`.
```
server {
    listen      80;
    index index.html index.htm;
    server_name localhost;
    root /path/to/angular-spring-starter/server/src/main/resources/static;

    location / {
        try_files $uri $uri/ /index.html;
        proxy_pass http://localhost:8080;
        proxy_set_header  Host             $http_host;
        proxy_set_header  X-Real-IP        $remote_addr;
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
    }
    
    location ~ ^/(api|auth) {
        proxy_pass http://localhost:8080;
        proxy_set_header  Host             $http_host;
        proxy_set_header  X-Real-IP        $remote_addr;
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
    }
}
```


### JSON Web Token
> JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
for more info, checkout https://jwt.io/

> Token authentication is a more modern approach and is designed solve problems session IDs stored server-side can’t. Using tokens in place of session IDs can lower your server load, streamline permission management, and provide better tools for supporting a distributed or cloud-based infrastructure.
>
> -- <cite>Stormpath</cite>

### Contributing
I'll accept pretty much everything so feel free to open a Pull-Request

This project is inspired by
- [Stormpath](https://stormpath.com/blog/token-auth-spa)
- [Cerberus](https://github.com/brahalla/Cerberus)
- [jwt-spring-security-demo](https://github.com/szerhusenBC/jwt-spring-security-demo)

___

## License
 [MIT](/LICENSE)


[frontend-doc]: https://github.com/bfwg/angular-spring-jwt-starter/tree/master/frontend
[server-doc]: https://github.com/bfwg/angular-spring-jwt-starter/tree/master/server
[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
[status-url]: https://github.com/bfwg/angular-spring-jwt-starter
