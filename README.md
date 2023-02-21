[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](http://angular-spring-starter.fanjin.io/)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/bfwg/angular4-spring-boot-jwt-starter)
[![Build Status](https://travis-ci.org/bfwg/angular-spring-starter.svg?branch=master)](https://travis-ci.org/bfwg/angular-spring-starter)
[![Maintenance Status][status-image]][status-url]
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bfwg/angular-spring-jwt-starter/blob/master/LICENSE)

<p align="center">
  <a href="http://angular-spring-starter.fanjin.io" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/12819525/26094670/b0f6f192-39cf-11e7-8048-ab710b3dc1d1.png" alt="Spring Boot and Angular 2" width="500" height="320"/>
  </a>
</p>

# Angular Spring Boot JWT Starter
> An Angular full stack starter kit featuring [Angular](https://angular.io), [Router](https://angular.io/docs/ts/latest/guide/router.html), [Forms](https://angular.io/docs/ts/latest/guide/forms.html),
[Http](https://angular.io/docs/ts/latest/guide/server-communication.html),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Spring boot](https://projects.spring.io/spring-boot/),
[JSON Web Token](https://jwt.io/)

> If you're looking to use Angular as your frontend implementation, please check out [springboot-jwt-starter](https://github.com/bfwg/springboot-jwt-starter)
> A Spring Boot token-based security starter kit featuring [AngularJS](https://angularjs.org/) and [Spring Boot](https://projects.spring.io/spring-boot/) ([JSON Web Token](https://jwt.io/))
### [Live Demo](http://angular-spring-starter.fanjin.io)
<p align="center">
    <img width="800" alt="Springboot JWT Starter" src="https://cloud.githubusercontent.com/assets/12819525/26290994/3895daca-3e60-11e7-9465-421e0b029343.png">
</p>

## Table of Contents

- [Quick start with docker](#quick-start-with-docker)
  - [Recipe to install docker-compose on Linux](#recipe-to-install-docker-compose-on-linux)
- [Quick start without docker](#quick-start-without-docker)
- [Deployment](#deployment)
  - [JSON Web Token](#json-web-token)
  - [Importing the Project in IntelliJ IDEA](#importing-the-project-in-intellij-idea)

## Quick start with docker

**You'll need docker and docker-compose installed**

In order to install __docker__ and __docker-compose__ follow these:

1. [docker](https://docs.docker.com/install) installation

2. [docker compose](https://docs.docker.com/compose/install/) installation

    > on Linux check [docker-compose recipe](#recipe-to-install-docker-compose-on-linux)
3. check __docker__ and __docker-compose__ installation, issue the following command on a terminal or console:

```bash
docker --version
Docker version 17.12.0-ce, build c97c6d6     # or similar to 17.1x.x
docker-compose --version
docker-compose version 1.18.0, build 8dd22a9 # or similar to 1.1x.x
```

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/bfwg/angular-spring-starter.git
# issue docker-compose to start services, these will start in background mode as denoted by the -d flag
docker-compose up -d
# if everything builds successfully you should see something similar to:
Successfully built 0017f554842f
Successfully tagged angularspringstarter_angular:latest
Creating angularspringstarter_springboot_1 ... done
Creating angularspringstarter_angular_1    ... done
# the app will be available at localhost
# if you wish to see your newly created containers issue:
docker ps
# if you wish to have access to a running shell inside a running container you can issue:
docker exec -it <container name> sh
```

### Recipe to install docker-compose on Linux

To install __docker-compose__ under a GNU/nix system, one could use the following enchantment:

```bash
COMPOSE_VERSION=`git ls-remote https://github.com/docker/compose | grep refs/tags | grep -oP "[0-9]+\.[0-9][0-9]+\.[0-9]+$" | tail -n 1`    # get latest docker-compose version
sudo sh -c "curl -L https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose"    # download and extract to /usr/local/bin with appropriate permissions, this should be already in your $PATH
sudo chmod +x /usr/local/bin/docker-compose
sudo sh -c "curl -L https://raw.githubusercontent.com/docker/compose/${COMPOSE_VERSION}/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose"    # docker-compose bash completions ... why not ?!
```

## Quick start without docker
**Make sure you have Maven and Java 11 or greater**
**Make sure you also have NPM 6.12.0, Node 12.13.0 and angular-cli@9.1.3 globally installed**
```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/bfwg/angular-spring-starter.git

# change directory to the repo's frontend folder
cd angular-spring-starter/frontend

# install the frontend dependencies with npm
# npm install @angular/cli@9.1.3 -g
npm install

# start the frontend app
npm start

# change directory to the repo's backend folder
cd ../server

# install the server dependencies with mvn
mvn install

# start the backend server
mvn spring-boot:run

# the frontend angular app will be running on port 4200
# the spring-boot server will be running on port 8080
```

There are two user accounts present to demonstrate the different levels of access to the endpoints in
the API and the different authorization exceptions:

```bash
Admin - admin:123
User - user:123
```

For more detailed configuration/documentation, please check out the [frontend][frontend-doc] and [server][server-doc] folder.

## Deployment

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/bfwg/angular-spring-starter.git

# change directory to the repo's frontend folder
cd angular-spring-starter/frontend

# install the frontend dependencies with npm
# npm install @angular/cli@9.1.3 -g
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
For more deployment related info checkout here: [DEPLOYMENT DOC](https://angular.io/docs/ts/latest/guide/deployment.html)

### JSON Web Token

> JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
for more info, check out https://jwt.io/
> Token authentication is a more modern approach and is designed solve problems session IDs stored server-side can’t. Using tokens in place of session IDs can lower your server load, streamline permission management, and provide better tools for supporting a distributed or cloud-based infrastructure.
>
> -- <cite>Stormpath</cite>

### Importing the Project in IntelliJ IDEA

1. Click "Import Project" on the launch screen
2. Select the projects root folder, then select "Import project from external model" and choose "Maven"
3. Tick the checkboxes "Import Maven projects automatically" and "Import projects recursively"
4. Continue the dialog until the IDE opens the project
5. Open the "Project Structure" dialog
6. On the left side, choose "Modules" and click the "Add" button
7. Choose "Import Module", then select the ```frontend``` folder
8. Choose "Create module from existing sources" and continue in the dialog until the module is added.
9. You should now see both (frontend and backend) modules in the Project view

### Contributing

I'll accept pretty much everything so feel free to open a Pull-Request

This project is inspired by

- [Stormpath](https://stormpath.com/blog/token-auth-spa)
- [Cerberus](https://github.com/brahalla/Cerberus)
- [jwt-spring-security-demo](https://github.com/szerhusenBC/jwt-spring-security-demo)

## License

 [MIT](/LICENSE)

[frontend-doc]: https://github.com/bfwg/angular-spring-jwt-starter/tree/master/frontend
[server-doc]: https://github.com/bfwg/angular-spring-jwt-starter/tree/master/server
[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
[status-url]: https://github.com/bfwg/angular-spring-jwt-starter
