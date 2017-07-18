# Angular4 Spring Boot JWT Starter
This sub-project is the backend server portion of the project.

**Make sure you have Maven and Java 1.7 or greater**

```bash
# change directory to server
cd angular-spring-starter/server

# install the repo with mvn
mvn install

# start the server
mvn spring-boot:run

# the app will be running on port 8080
# there are two built-in user accounts to demonstrate the differing levels of access to the endpoints:
# - User - user:123
# - Admin - admin:123
```


## File Structure
```
angular-spring-starter/server
 ├──src/                                                        * our source files
 │   ├──main
 │   │   ├──java.com.bfwg
 │   │   │   ├──config
 │   │   │   │   └──WebSecurityConfig.java                      * security configureation file, all the important things.
 │   │   │   ├──model
 │   │   │   │   ├──Authority.java
 │   │   │   │   ├──DateModel.java                              * date model class extend by other model class, this adds create_at and update_at fields.
 │   │   │   │   ├──DeleteableModel.java                        * similar as date model class, extend by other class, this adds deleted_at field.
 │   │   │   │   ├──UserTokenState.java                         * stores the token states like token_key and token_ttl.
 │   │   │   │   └──User.java                                   * our main user model which implements UserDetails.
 │   │   │   ├──repository                                      * repositories folder for accessing database
 │   │   │   │   ├──DeleteableModelRepository.java              * base repository that overwrites the findAll method.
 │   │   │   │   └──UserRepository.java
 │   │   │   ├──rest                                            * rest endpoint folder
 │   │   │   │   ├──FooController.java                          * public REST controller.
 │   │   │   │   ├──AuthenticationController.java               * auth related REST controller.
 │   │   │   │   └──UserController.java                         * user/admin REST controller to handle User related requests
 │   │   │   ├──security                                        * Security related folder(JWT, filters)
 │   │   │   │   ├──auth
 │   │   │   │   │   ├──AuthenticationFailureHandler.java       * login fail handler, configrued in WebSecurityConfig
 │   │   │   │   │   ├──AuthenticationSuccessHandler.java       * login success handler, configrued in WebSecurityConfig
 │   │   │   │   │   ├──AnonAuthentication.java                 * it creates Anonymous user authentication object. If the user doesn't have a token, we mark the user as an anonymous visitor.
 │   │   │   │   │   ├──LogoutSuccess.java                      * controls the behavior after sign out.
 │   │   │   │   │   ├──RestAuthenticationEntryPoint.java       * logout success handler, configrued in WebSecurityConfig
 │   │   │   │   │   ├──TokenAuthenticationFilter.java          * the JWT token filter, configured in WebSecurityConfig
 │   │   │   │   │   └──TokenBasedAuthentication.java           * this is our custom Authentication class and it extends AbstractAuthenticationToken.
 │   │   │   │   └──TokenHelper.java                            * token helper class that responsible to token generation, validation, etc.
 │   │   │   ├──service
 │   │   │   │   ├──impl
 │   │   │   │   │   ├──CustomUserDetailsService.java           * custom UserDatilsService implementataion, tells formLogin() where to check username/password
 │   │   │   │   │   └──UserServiceImpl.java
 │   │   │   │   └──UserService.java
 │   │   │   └──Application.java                                * Application main enterance
 │   │   └──recources
 │   │       ├──static                                          * Angular2 frontend code will get built and served from here.
 │   │       ├──application.yml                                 * application variables are configured here
 │   │       ├──banner.txt                                      * application banner :^)
 │   │       └──import.sql                                      * h2 database query(table creation)
 │   └──test                                                    * Junit test folder
 └──pom.xml                                                     * what maven uses to manage it's dependencies
```

## Configuration
- **WebSecurityConfig.java**: The server-side authentication configurations.
- **application.yml**: Application level properties i.e the token expire time, token secret etc. You can find a reference of all application properties [here](http://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html).
- **JWT token TTL**: JWT Tokens are configured to expire after 10 minutes, you can get a new token by signing in again.
- **Using a different database**: This Starter kit is using an embedded H2 database that is automatically configured by Spring Boot. If you want to connect to another database you have to specify the connection in the *application.yml* in the resource directory. Here is an example for a MySQL DB:


```
spring:
  jpa:
    hibernate:
      # possible values: validate | update | create | create-drop
      ddl-auto: create-drop
  datasource:
    url: jdbc:mysql://localhost/myDatabase
    username: myUser
    password: myPassword
    driver-class-name: com.mysql.jdbc.Driver
```
*Hint: For other databases like MySQL sequences don't work for ID generation. So you have to change the GenerationType in the entity beans to 'AUTO' or 'IDENTITY'.*

### Generating password hash for users
I'm using [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) to encode passwords. Your can generate your hashes with this simple tool: [BCrypt Calculator](https://www.dailycred.com/article/bcrypt-calculator)
