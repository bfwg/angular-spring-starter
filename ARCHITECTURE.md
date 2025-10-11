# Architecture & Clean Code Principles

This document describes the architectural decisions and Clean Code principles applied to the Angular-Spring Starter application.

## Table of Contents

- [Overview](#overview)
- [SOLID Principles](#solid-principles)
- [Clean Code Practices](#clean-code-practices)
- [Backend Architecture](#backend-architecture)
- [Frontend Architecture](#frontend-architecture)
- [Security](#security)
- [Testing Strategy](#testing-strategy)

## Overview

This application follows modern software development best practices, emphasizing:

- **Maintainability**: Code that is easy to understand and modify
- **Testability**: Clear separation of concerns enabling comprehensive testing
- **Scalability**: Architecture that supports growth and change
- **Readability**: Self-documenting code with clear intent

## SOLID Principles

### Single Responsibility Principle (SRP)

Each class has one and only one reason to change.

**Examples:**

- `PasswordService`: Handles only password-related operations (encoding, validation, changing)
- `UserService`: Manages user data and CRUD operations
- `AuthService` (Frontend): Handles only authentication operations
- `WebSecurityConfig`: Configures security only, business logic moved to services

### Open/Closed Principle (OCP)

Classes are open for extension but closed for modification.

**Examples:**

- DTOs use validation annotations allowing extension without modification
- Service interfaces enable multiple implementations
- Strategy pattern in error handling

### Liskov Substitution Principle (LSP)

Derived classes must be substitutable for their base classes.

**Examples:**

- `User` implements `UserDetails` properly
- `Authority` implements `GrantedAuthority` correctly
- All service implementations properly fulfill their interface contracts

### Interface Segregation Principle (ISP)

Clients should not depend on interfaces they don't use.

**Examples:**

- `PasswordService` interface contains only password operations
- `UserService` interface focuses on user management
- Services have focused, cohesive interfaces

### Dependency Inversion Principle (DIP)

Depend on abstractions, not concretions.

**Examples:**

- Controllers depend on service interfaces, not implementations
- Services depend on repository interfaces
- `PasswordEncoder` injected as abstraction
- Frontend services depend on `HttpClient` abstraction

## Clean Code Practices

### Meaningful Names

All classes, methods, and variables have descriptive, intention-revealing names:

```java
// Before
public void resetCredentials()

// After (with context)
/**
 * Resets all user passwords to the default password.
 * This is typically used for demo/testing purposes only.
 */
@Transactional
public void resetCredentials()
```

### Small Functions

Functions do one thing and do it well:

```java
// Extracted helper method
private User buildUserFromRequest(UserRequest userRequest) {
    String encodedPassword = passwordService.encodePassword(userRequest.getPassword());
    List<Authority> authorities = authorityService.findByName(UserRoleName.ROLE_USER);
    
    return User.builder()
        .username(userRequest.getUsername())
        .password(encodedPassword)
        .firstname(userRequest.getFirstname())
        .lastname(userRequest.getLastname())
        .authorities(authorities)
        .build();
}
```

### DRY (Don't Repeat Yourself)

Code reuse through proper abstraction:

- `PasswordService` eliminates duplicate `BCryptPasswordEncoder` creation
- Constants classes centralize magic strings and numbers
- Shared error handling in `ApiService`

### KISS (Keep It Simple, Stupid)

Simplicity over complexity:

- Clear, straightforward logic
- Avoid premature optimization
- Use language/framework features appropriately

### YAGNI (You Aren't Gonna Need It)

Only implement what's needed:

- No speculative features
- Focused on current requirements
- Easy to extend when needed

## Backend Architecture

### Layer Structure

```
┌─────────────────────────────────────┐
│         REST Controllers            │  ← HTTP/REST Layer
│  (AuthenticationController,         │
│   UserController)                   │
├─────────────────────────────────────┤
│         Service Layer               │  ← Business Logic
│  (UserService, PasswordService,     │
│   AuthorityService)                 │
├─────────────────────────────────────┤
│       Repository Layer              │  ← Data Access
│  (UserRepository,                   │
│   AuthorityRepository)              │
├─────────────────────────────────────┤
│         Domain Models               │  ← Entities & DTOs
│  (User, Authority, UserRequest,     │
│   PasswordChangeRequest)            │
└─────────────────────────────────────┘
```

### Key Components

#### Models

**Entity Classes** (`User`, `Authority`)
- Use Builder pattern for complex object construction
- Proper encapsulation with defensive copying for collections
- Comprehensive JavaDoc documentation
- Implement `equals()`, `hashCode()`, and `toString()`

**DTOs** (`UserRequest`, `PasswordChangeRequest`, `UserTokenState`)
- Bean Validation annotations for declarative validation
- Proper constructors
- Clear separation from entities

#### Services

**UserServiceImpl**
- Transactional management
- Comprehensive error handling
- Logging at appropriate levels
- Depends on abstractions (PasswordService, AuthorityService)

**PasswordServiceImpl**
- Focused on password operations only
- Validates input parameters
- Uses injected PasswordEncoder (not creating new instances)
- Clear, descriptive method names

#### Controllers

**UserController**
- RESTful endpoint design
- Proper use of HTTP status codes
- Request validation with `@Valid`
- Comprehensive error responses
- Logging for debugging and monitoring

**AuthenticationController**
- Uses proper DTOs (no inner classes)
- Clear separation of concerns
- Proper error handling
- Helper methods for repeated logic

### Security Configuration

**WebSecurityConfig**
- Focuses only on security configuration
- Business logic moved to services
- Modern Spring Security 6 patterns
- Constructor injection for dependencies

## Frontend Architecture

### Service Layer

```
┌─────────────────────────────────────┐
│         Components                  │  ← Presentation Layer
├─────────────────────────────────────┤
│         Services                    │  ← Business Logic
│  (AuthService, UserService,         │
│   ApiService, ConfigService)        │
├─────────────────────────────────────┤
│         Guards & Interceptors       │  ← Cross-cutting Concerns
└─────────────────────────────────────┘
```

### Key Services

#### AuthService

- **Fixed**: Typo in method name (`changePassowrd` → `changePassword`)
- **Removed**: Production `console.log` statements
- **Added**: Proper error handling with RxJS operators
- **Added**: Input validation
- **Added**: Comprehensive JSDoc documentation
- **Improved**: Type safety with proper interfaces

#### UserService

- **Replaced**: Deprecated `toPromise()` with `firstValueFrom`
- **Added**: Proper User interface for type safety
- **Added**: Getter/setter for encapsulation
- **Added**: Helper methods (`isAuthenticated()`, `hasRole()`, `getDisplayName()`)
- **Improved**: Error handling with proper logging

#### ApiService

- **Fixed**: Typo in parameter name (`custemHeaders` → `customHeaders`)
- **Removed**: Commented dead code
- **Added**: Comprehensive error handling with user-friendly messages
- **Added**: Proper error logging
- **Improved**: Type safety and documentation

### Constants

Centralized constants prevent magic strings and numbers:

```typescript
export const API_ENDPOINTS = {
  LOGIN: '/api/login',
  LOGOUT: '/api/logout',
  // ...
} as const;

export const USER_ROLES = {
  USER: 'ROLE_USER',
  ADMIN: 'ROLE_ADMIN'
} as const;
```

## Security

### Authentication Flow

1. User submits credentials via `AuthService.login()`
2. Backend validates credentials and generates JWT
3. JWT stored in HTTP-only cookie
4. Subsequent requests include JWT automatically
5. `TokenAuthenticationFilter` validates JWT on each request

### Password Management

- Passwords encrypted with BCrypt
- Minimum length validation
- Old/new password comparison
- Password change requires current password

### Authorization

- Role-based access control (RBAC)
- `@PreAuthorize` annotations on endpoints
- Frontend guards prevent unauthorized navigation

## Testing Strategy

### Backend Testing

**Unit Tests**
- Service layer business logic
- DTO validation
- Helper methods

**Integration Tests**
- Controller endpoints
- Security configuration
- Database operations

**Test Coverage Goals**
- Services: 80%+
- Controllers: 70%+
- Models: 60%+

### Frontend Testing

**Unit Tests**
- Service methods
- Component logic
- Pipe transformations

**Integration Tests**
- Component-service interaction
- Router navigation
- Guard behavior

**E2E Tests**
- Critical user flows
- Authentication scenarios
- Authorization checks

## Code Quality Metrics

### Maintainability

- **Cyclomatic Complexity**: < 10 per method
- **Method Length**: < 30 lines
- **Class Length**: < 300 lines
- **Parameter Count**: < 5 per method

### Documentation

- All public APIs documented with JavaDoc/JSDoc
- Complex algorithms explained
- Architectural decisions recorded
- README updated with setup instructions

### Naming Conventions

**Java**
- Classes: PascalCase
- Methods/Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Packages: lowercase

**TypeScript**
- Classes/Interfaces: PascalCase
- Methods/Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case

## Best Practices Applied

### Error Handling

1. **Never swallow exceptions**: Always log or rethrow
2. **Meaningful error messages**: Help users understand what went wrong
3. **Proper HTTP status codes**: RESTful error responses
4. **Graceful degradation**: Handle errors without crashing

### Logging

1. **Appropriate log levels**:
   - ERROR: Failures requiring immediate attention
   - WARN: Potentially harmful situations
   - INFO: Significant application events
   - DEBUG: Detailed diagnostic information

2. **Structured logging**: Include context (user, operation, parameters)
3. **No sensitive data**: Never log passwords or tokens

### Validation

1. **Input validation**: Validate at API boundary
2. **Bean Validation**: Use annotations for declarative validation
3. **Business rule validation**: Implement in service layer
4. **Clear error messages**: Help users fix issues

### Dependency Management

1. **Constructor injection**: Required dependencies
2. **Field injection**: Avoid (except in tests)
3. **Dependency versions**: Keep up-to-date
4. **Minimal dependencies**: Only what's needed

## Migration Guide

### For Developers

When adding new features:

1. Follow established patterns in this document
2. Write tests first (TDD)
3. Document public APIs
4. Update this document for architectural changes

### Breaking Changes

This refactoring introduces some breaking changes:

1. **UserTokenState**: Field names changed to camelCase (JSON annotations maintain compatibility)
2. **Service constructors**: New dependencies may require test updates
3. **Error responses**: More detailed error messages

## Future Improvements

1. **Token Service**: Split `TokenHelper` into focused services
2. **Custom Exceptions**: Domain-specific exception hierarchy
3. **Audit Logging**: Track important business events
4. **Rate Limiting**: Prevent abuse
5. **Caching**: Improve performance
6. **Internationalization**: Multi-language support

## References

- [Clean Code by Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Effective Java by Joshua Bloch](https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Spring Boot Best Practices](https://spring.io/guides)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

## Contributors

This architecture refactoring was completed on October 11, 2025, upgrading the application to Angular 19 and Spring Boot 3.4.1 while implementing Clean Code principles throughout.

