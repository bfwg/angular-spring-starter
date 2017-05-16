[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/bfwg/angular2-springboot-jwt-starter)
[![Build Status](https://travis-ci.org/bfwg/angular-spring-jwt-starter.svg?branch=master)](https://travis-ci.org/bfwg/angular-spring-jwt-starter)
[![Maintenance Status][status-image]][status-url]
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bfwg/angular-spring-jwt-starter/blob/master/LICENSE)


# Angular2 Springboot JWT Starter
> An Angular fullstack starter kit featuring [Angular 4](https://angular.io), [Router](https://angular.io/docs/ts/latest/guide/router.html), [Forms](https://angular.io/docs/ts/latest/guide/forms.html),
[Http](https://angular.io/docs/ts/latest/guide/server-communication.html),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Spring boot](https://projects.spring.io/spring-boot/),
[Json Web Token](https://jwt.io/)

> If you're looking for Angular 1.x please use [springboot-jwt-starter](https://github.com/bfwg/springboot-jwt-starter)
> A Springboot token-based security starter kit featuring [Angular4](https://angular.io/) and [Springboot](https://projects.spring.io/spring-boot/) ([JSON Web Token](https://jwt.io/))

### Quick start
**Make sure you have Maven and Java 1.7 or greater**
**Make sure you also have NPM 3.1, Node 6.9.5 and angular-cli@1.0.0 globally installed**
```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/bfwg/angular-spring-jwt-starter.git

# change directory to the repo's frontend folder
cd angular-spring-jwt-starter/frontend

# build frontend project to /server/src/main/resources/static folder
ng build

# change directory to the repo's backend folder
cd ../server

# install the repo with mvn
mvn install

# start the server
mvn spring-boot:run

# the app will be running on port 8080
# there are two built-in user accounts to demonstrate the differing levels of access to the endpoints:
# - User - user:123
# - Admin - admin:123
```
For more detailed configureation/documentation, please checkout the [frontend][frontend-doc] and [server][server-doc] folder.


### Technology Stack
Component         | Technology
---               | ---
Frontend          | [Angular 4+](https://github.com/angular/angular)
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
Security          | Token Based (Spring Security and [JWT](https://github.com/jwtk/jjwt) )
In Memory DB      | H2
Persistence       | JPA (Using Spring Data)
Client Build Tools| [angular-cli](https://github.com/angular/angular-cli), Webpack, npm
Server Build Tools| Maven


### JSON Web Token
> JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
for more info, checkout https://jwt.io/

> Token authentication is a more modern approach and is designed solve problems session IDs stored server-side can’t. Using tokens in place of session IDs can lower your server load, streamline permission management, and provide better tools for supporting a distributed or cloud-based infrastructure.
>
> -- <cite>Stormpath</cite>


This project is inspried by
- [Stormpath](https://stormpath.com/blog/token-auth-spa)
- [Cerberus](https://github.com/brahalla/Cerberus)
- [jwt-spring-security-demo](https://github.com/szerhusenBC/jwt-spring-security-demo)

___

# License
 [MIT](/LICENSE)


[frontend-doc]: https://github.com/bfwg/angular-spring-jwt-starter/tree/master/frontend
[server-doc]: https://github.com/bfwg/angular-spring-jwt-starter/tree/master/server
[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
[status-url]: https://github.com/bfwg/angular-spring-jwt-starter
