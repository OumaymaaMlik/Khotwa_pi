# User Module Technical Documentation

## Scope

This document describes the implemented User module in the current Spring Boot workspace. It covers authentication, user profile management, admin user management, persistence, JWT security, configuration, exceptions, and reuse points exposed to other modules.

Application-level base path:

- Context path: `/khotwa`
- Public auth base path: `/api/auth`
- User base path: `/api/users`

Full request paths are therefore served under `/khotwa`.

Example:

- `POST /khotwa/api/auth/login`
- `GET /khotwa/api/users/me`

## Module Structure

### Controllers

- `AuthController`: public registration and login endpoints.
- `UserController`: authenticated self-service endpoints and admin-only user management endpoints.

### Services

- `AuthService` / `AuthServiceImpl`: registration and login.
- `UserService` / `UserServiceImpl`: profile updates, password changes, admin user management, plan updates.
- `CurrentUserService` / `CurrentUserServiceImpl`: access to the authenticated user and lookup by user id.
- `UserMapper`: converts `User` entities to `UserResponse` DTOs.

### Persistence

- `User`: JPA entity mapped to table `user`.
- `UserRepository`: Spring Data JPA repository for user lookup and role counting.

### Security

- `SecurityConfig`: stateless Spring Security configuration.
- `JwtService`: JWT creation and validation.
- `JwtAuthenticationFilter`: reads bearer tokens and populates the security context.
- `AppUserDetailsService`: loads users by normalized email address.
- `AppUserPrincipal`: Spring Security `UserDetails` implementation.
- `RestAuthenticationEntryPoint`: JSON `401 Unauthorized` responses.
- `RestAccessDeniedHandler`: JSON `403 Forbidden` responses.

### Exceptions

- `EmailAlreadyUsedException`
- `ForbiddenAdminCreationException`
- `InvalidCredentialsException`
- `InvalidRoleException`
- `LastAdminDeletionException`
- `ResourceNotFoundException`
- `AccessDeniedException`
- `GlobalExceptionHandler`

## Domain Model

### User Entity

The `User` entity is stored in table `user` with the following fields:

| Field | Type | Constraints / Behavior |
| --- | --- | --- |
| `idUser` | `Long` | Primary key, auto-generated |
| `avatar` | `String` | Nullable |
| `emailAddress` | `String` | Required, unique, normalized to trimmed lowercase on persist and update |
| `firstName` | `String` | Required |
| `lastName` | `String` | Required |
| `password` | `String` | Required, stored encoded with BCrypt |
| `pendingPlan` | `PlanType` | Nullable |
| `phoneNumber` | `String` | Nullable |
| `planType` | `PlanType` | Nullable |
| `role` | `Role` | Required |
| `startup` | `String` | Nullable |
| `mustChangePassword` | `boolean` | Required, defaults to `true` at entity level |

### Enums

#### Role

- `ADMIN`
- `COACH`
- `ENTREPRENEUR`

#### PlanType

- `FREE`
- `INSTITUTIONAL`
- `PREMIUM`

## DTOs

### Request DTOs

#### `RegisterRequest`

| Field | Type | Validation |
| --- | --- | --- |
| `firstName` | `String` | Required |
| `lastName` | `String` | Required |
| `emailAddress` | `String` | Required, must be a valid email |
| `password` | `String` | Required, minimum 8 characters |
| `role` | `String` | Optional |
| `avatar` | `String` | Optional |
| `phoneNumber` | `String` | Optional |
| `startup` | `String` | Optional |

#### `LoginRequest`

| Field | Type | Validation |
| --- | --- | --- |
| `emailAddress` | `String` | Required, must be a valid email |
| `password` | `String` | Required |

#### `UpdateProfileRequest`

All fields are optional.

| Field | Type | Validation |
| --- | --- | --- |
| `firstName` | `String` | Max 255 |
| `lastName` | `String` | Max 255 |
| `emailAddress` | `String` | Must be a valid email |
| `avatar` | `String` | Max 255 |
| `phoneNumber` | `String` | Max 255 |
| `startup` | `String` | Max 255 |

#### `ChangePasswordRequest`

| Field | Type | Validation |
| --- | --- | --- |
| `currentPassword` | `String` | Required |
| `newPassword` | `String` | Required, minimum 8 characters |
| `confirmPassword` | `String` | Required |

#### `UpdateUserByAdminRequest`

All fields are optional.

| Field | Type | Validation |
| --- | --- | --- |
| `emailAddress` | `String` | Valid email, max 255 |
| `firstName` | `String` | Max 255 |
| `lastName` | `String` | Max 255 |
| `avatar` | `String` | Max 255 |
| `pendingPlan` | `PlanType` | Optional |
| `phoneNumber` | `String` | Max 255 |
| `planType` | `PlanType` | Optional |
| `role` | `String` | Optional |
| `startup` | `String` | Max 255 |
| `mustChangePassword` | `Boolean` | Optional |

#### `UpdateUserPlanRequest`

| Field | Type | Validation |
| --- | --- | --- |
| `pendingPlan` | `PlanType` | Optional |
| `planType` | `PlanType` | Required |

### Response DTOs

#### `UserResponse`

| Field | Type |
| --- | --- |
| `idUser` | `Long` |
| `avatar` | `String` |
| `emailAddress` | `String` |
| `firstName` | `String` |
| `lastName` | `String` |
| `pendingPlan` | `PlanType` |
| `phoneNumber` | `String` |
| `planType` | `PlanType` |
| `role` | `Role` |
| `startup` | `String` |
| `mustChangePassword` | `boolean` |

#### `AuthResponse`

| Field | Type |
| --- | --- |
| `token` | `String` |
| `idUser` | `Long` |
| `email` | `String` |
| `role` | `Role` |
| `mustChangePassword` | `boolean` |

## Repository Layer

`UserRepository` extends `JpaRepository<User, Long>` and adds:

- `Optional<User> findByEmailAddress(String emailAddress)`
- `boolean existsByEmailAddress(String emailAddress)`
- `boolean existsByRole(Role role)`
- `long countByRole(Role role)`

Implemented usages in the module:

- email uniqueness checks during registration and updates
- login user lookup by email address
- counting admin users before deletion or demotion

## Service Behavior

### AuthService

#### Registration

`register(RegisterRequest request)` performs the following:

1. Normalizes the email to trimmed lowercase.
2. Rejects the request if the email already exists.
3. Resolves the requested public role.
4. Defaults role to `ENTREPRENEUR` if the request role is blank.
5. Rejects invalid roles.
6. Rejects `ADMIN` in public registration.
7. Creates a `User` with encoded password.
8. Sets `mustChangePassword` to `false` for publicly registered users.
9. Saves the user and returns `UserResponse`.

Public registration allows only:

- `COACH`
- `ENTREPRENEUR`

#### Login

`login(LoginRequest request)` performs the following:

1. Normalizes the email to trimmed lowercase.
2. Authenticates using Spring Security `AuthenticationManager`.
3. Converts authentication failures to `InvalidCredentialsException`.
4. Loads the authenticated user from the repository.
5. Returns a JWT plus current user metadata in `AuthResponse`.

### UserService

#### Current user profile

`getCurrentUserProfile()` returns the authenticated user as `UserResponse`.

`updateCurrentUserProfile(UpdateProfileRequest request)` updates only provided fields:

- `firstName` and `lastName` are trimmed when non-blank.
- `emailAddress` is normalized and checked for uniqueness.
- `avatar`, `phoneNumber`, and `startup` are updated when present in the request.
- blank values for `avatar`, `phoneNumber`, and `startup` are converted to `null`.

#### Password change

`changeCurrentUserPassword(ChangePasswordRequest request)`:

1. Verifies the current password with the configured password encoder.
2. Verifies `newPassword` equals `confirmPassword`.
3. Encodes and stores the new password.
4. Sets `mustChangePassword` to `false`.

#### Admin user management

`getAllUsers()` returns all users mapped to `UserResponse`.

`getUserById(Long idUser)` returns one user or throws `ResourceNotFoundException`.

`updateUserByAdmin(Long idUser, UpdateUserByAdminRequest request)` updates only provided fields and also supports:

- `pendingPlan`
- `planType`
- `mustChangePassword`
- `role`

Role management rules enforced during admin updates:

- invalid role strings are rejected
- a non-admin user cannot be promoted to `ADMIN` through this endpoint
- an existing `ADMIN` cannot be demoted if that user is the last remaining admin

`deleteUserByAdmin(Long idUser)` deletes the user unless that user is the last remaining `ADMIN`.

`updateUserPlan(Long idUser, UpdateUserPlanRequest request)` updates:

- `planType` (required)
- `pendingPlan` (optional)

### CurrentUserService

`CurrentUserService` exposes:

- `getCurrentUser()`
- `getCurrentUserId()`
- `getCurrentUserRole()`
- `getUserById(Long idUser)`

It reads the current principal from `SecurityContextHolder` and resolves the full `User` entity from the repository.

## Controllers and Endpoints

All endpoints below are relative to the application context path `/khotwa`.

### AuthController

#### `POST /api/auth/register`

- Access: public
- Request body: `RegisterRequest`
- Success response: `201 Created`
- Response body: `UserResponse`

#### `POST /api/auth/login`

- Access: public
- Request body: `LoginRequest`
- Success response: `200 OK`
- Response body: `AuthResponse`

### UserController

#### `GET /api/users/me`

- Access: authenticated user
- Success response: `200 OK`
- Response body: `UserResponse`

#### `PUT /api/users/me`

- Access: authenticated user
- Request body: `UpdateProfileRequest`
- Success response: `200 OK`
- Response body: `UserResponse`

#### `PUT /api/users/me/change-password`

- Access: authenticated user
- Request body: `ChangePasswordRequest`
- Success response: `204 No Content`

#### `GET /api/users`

- Access: `ADMIN` only
- Security: `@PreAuthorize("hasRole('ADMIN')")`
- Success response: `200 OK`
- Response body: `List<UserResponse>`

#### `GET /api/users/{id}`

- Access: `ADMIN` only
- Security: `@PreAuthorize("hasRole('ADMIN')")`
- Success response: `200 OK`
- Response body: `UserResponse`

#### `PUT /api/users/{id}`

- Access: `ADMIN` only
- Security: `@PreAuthorize("hasRole('ADMIN')")`
- Request body: `UpdateUserByAdminRequest`
- Success response: `200 OK`
- Response body: `UserResponse`

#### `DELETE /api/users/{id}`

- Access: `ADMIN` only
- Security: `@PreAuthorize("hasRole('ADMIN')")`
- Success response: `204 No Content`

#### `PUT /api/users/{id}/plan`

- Access: `ADMIN` only
- Security: `@PreAuthorize("hasRole('ADMIN')")`
- Request body: `UpdateUserPlanRequest`
- Success response: `200 OK`
- Response body: `UserResponse`

## JWT Security

### Security model

The application uses stateless Spring Security.

- CSRF is disabled.
- Session creation policy is `STATELESS`.
- `/api/auth/**` is public.
- every other request requires authentication.
- method security is enabled with `@EnableMethodSecurity`.

### Password encoding

Passwords are encoded with `BCryptPasswordEncoder`.

### JWT generation

`JwtService.generateToken(User user)` creates a signed JWT with:

- subject: user email address
- claim `idUser`
- claim `role`
- issued-at timestamp
- expiration timestamp based on `app.jwt.expiration-ms`

### JWT validation flow

`JwtAuthenticationFilter`:

1. Reads the `Authorization` header.
2. Expects the `Bearer <token>` format.
3. Extracts the username from the token.
4. Loads the user through `AppUserDetailsService`.
5. Validates username match and token expiration.
6. Populates the Spring Security context with `AppUserPrincipal`.

If token parsing or loading fails, the filter clears the security context and continues the chain.

### Forced password change restriction

If the authenticated principal has `mustChangePassword = true`, the JWT filter blocks access to every path except:

- `/api/users/me`
- `/api/users/me/change-password`

Blocked requests receive `403 Forbidden` with this JSON body:

```json
{
  "status": 403,
  "error": "Forbidden",
  "message": "Password change is required before accessing this resource."
}
```

## Error Handling

### Global exception mapping

`GlobalExceptionHandler` returns JSON responses with:

- `timestamp`
- `status`
- `error`
- `message`
- `details`
- `path`

Handled mappings:

| Exception | HTTP Status |
| --- | --- |
| `ResourceNotFoundException` | `404 Not Found` |
| custom `AccessDeniedException` | `403 Forbidden` |
| Spring Security `AccessDeniedException` | `403 Forbidden` |
| `InvalidCredentialsException` | `401 Unauthorized` |
| `BadCredentialsException` | `401 Unauthorized` |
| `EmailAlreadyUsedException` | `409 Conflict` |
| `InvalidRoleException` | `400 Bad Request` |
| `ForbiddenAdminCreationException` | `400 Bad Request` |
| `LastAdminDeletionException` | `400 Bad Request` |
| validation errors | `400 Bad Request` |
| argument type mismatch | `400 Bad Request` |
| method not supported | `400 Bad Request` |
| unhandled exceptions | `500 Internal Server Error` |

### Security error responses outside the global handler

`RestAuthenticationEntryPoint` returns `401 Unauthorized` when authentication is required.

`RestAccessDeniedHandler` returns `403 Forbidden` when a user is authenticated but lacks access.

## Business Rules Enforced by Code

The current implementation enforces the following user-module rules:

1. Email addresses are normalized to trimmed lowercase before persistence and during authentication-related lookups.
2. Email addresses must be unique.
3. Public registration defaults to role `ENTREPRENEUR` when no role is supplied.
4. Public registration accepts only `COACH` or `ENTREPRENEUR` as explicit roles.
5. Public registration cannot create `ADMIN` users.
6. Admin update endpoints cannot promote a non-admin user to `ADMIN`.
7. `ADMIN` accounts must be created manually in the database.
8. The last remaining `ADMIN` cannot be deleted.
9. The last remaining `ADMIN` cannot be demoted to another role.
10. A user with `mustChangePassword = true` can access only profile retrieval and password change endpoints until the password is changed.
11. Changing password resets `mustChangePassword` to `false`.
12. Publicly registered users are created with `mustChangePassword = false`.

## Configuration Relevant to the User Module

Main runtime properties currently present:

| Property | Value / Meaning |
| --- | --- |
| `spring.datasource.url` | MySQL datasource at `jdbc:mysql://localhost:3306/khotwa?createDatabaseIfNotExist=true` |
| `spring.datasource.username` | `root` |
| `spring.datasource.password` | empty |
| `spring.jpa.hibernate.ddl-auto` | `update` |
| `server.port` | `8084` |
| `server.servlet.context-path` | `/khotwa` |
| `app.upload.dir` | `./uploads` |
| `app.jwt.secret` | resolved from environment variable `JWT_SECRET` |
| `app.jwt.expiration-ms` | `86400000` |

Test properties currently present:

| Property | Value / Meaning |
| --- | --- |
| `spring.datasource.url` | H2 in-memory database with `MODE=MySQL` and `NON_KEYWORDS=USER` |
| `spring.jpa.hibernate.ddl-auto` | `create-drop` |
| `app.jwt.secret` | hardcoded Base64 test secret |

## Reuse by Other Modules

Other modules in the same application can reuse the user module through the following components:

### `CurrentUserService`

Use when a module needs authenticated-user context without duplicating security access logic.

Available methods:

- `getCurrentUser()`
- `getCurrentUserId()`
- `getCurrentUserRole()`
- `getUserById(Long idUser)`

Typical use cases:

- linking a new domain object to the authenticated user
- checking the authenticated role in service logic
- resolving a persisted `User` entity by id

### `UserService`

Use when another module needs application-level user operations already implemented here.

Exposed methods:

- `getCurrentUserProfile()`
- `updateCurrentUserProfile(UpdateProfileRequest request)`
- `changeCurrentUserPassword(ChangePasswordRequest request)`
- `getAllUsers()`
- `getUserById(Long idUser)`
- `updateUserByAdmin(Long idUser, UpdateUserByAdminRequest request)`
- `deleteUserByAdmin(Long idUser)`
- `updateUserPlan(Long idUser, UpdateUserPlanRequest request)`
- `getRequiredUser(Long idUser)`

### `AuthService`

Use when another module or controller needs the existing registration or login logic.

Exposed methods:

- `register(RegisterRequest request)`
- `login(LoginRequest request)`

### `UserRepository`

Use when repository-level access is required for user existence, lookup, or role counting.

### `UserMapper`

Use when another component needs to expose `UserResponse` without duplicating field mapping.

### Security principal and JWT claims

Other modules can also rely on:

- `AppUserPrincipal` as the authenticated principal type
- JWT claim `idUser`
- JWT claim `role`

## Notes / Gaps

The following observations come directly from the current code and may matter to consumers of the module:

1. Public registration returns `UserResponse` only; it does not issue a JWT. Clients must call login separately.
2. The entity default for `mustChangePassword` is `true`, but public registration explicitly sets it to `false`.
3. The code states that `ADMIN` accounts must be created manually in the database, and no controller endpoint exists to create them.
4. `InvalidCredentialsException` messages thrown inside services are more specific in some cases, but the global exception handler always returns the generic message `Invalid credentials.` for `401` responses.
5. The password-change-required response produced by `JwtAuthenticationFilter` does not match the richer error shape used by `GlobalExceptionHandler`, `RestAuthenticationEntryPoint`, or `RestAccessDeniedHandler`.
6. The repository defines `existsByRole(Role role)`, but it is not used by the current user module implementation.
7. There are no module-specific tests beyond application context loading in the current test source set.