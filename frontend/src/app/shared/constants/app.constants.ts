/**
 * Application-wide constants for the Angular frontend.
 * 
 * This module centralizes all constant values used throughout the application,
 * following the DRY (Don't Repeat Yourself) principle and making the codebase
 * more maintainable.
 */

/**
 * API endpoint paths.
 */
export const API_ENDPOINTS = {
  BASE: '/api',
  LOGIN: '/api/login',
  LOGOUT: '/api/logout',
  SIGNUP: '/api/signup',
  REFRESH: '/api/refresh',
  CHANGE_PASSWORD: '/api/changePassword',
  WHOAMI: '/api/whoami',
  USERS: '/api/user/all',
  USER_BY_ID: '/api/user',
  RESET_CREDENTIALS: '/api/user/reset-credentials',
  FOO: '/api/foo'
} as const;

/**
 * User roles in the application.
 */
export const USER_ROLES = {
  USER: 'ROLE_USER',
  ADMIN: 'ROLE_ADMIN'
} as const;

/**
 * HTTP status codes.
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
} as const;

/**
 * Success and error message keys.
 */
export const MESSAGE_KEYS = {
  SUCCESS: 'success',
  ERROR: 'error',
  RESULT: 'result'
} as const;

/**
 * Validation constraints matching backend.
 */
export const VALIDATION = {
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 100,
  PASSWORD_MIN_LENGTH: 3,
  PASSWORD_MAX_LENGTH: 100,
  NAME_MAX_LENGTH: 100
} as const;

/**
 * Common user-facing messages.
 */
export const MESSAGES = {
  LOGIN_SUCCESS: 'Login successful',
  LOGIN_FAILED: 'Login failed. Please check your credentials.',
  LOGOUT_SUCCESS: 'Logout successful',
  SIGNUP_SUCCESS: 'Account created successfully',
  SIGNUP_FAILED: 'Registration failed. Please try again.',
  PASSWORD_CHANGED: 'Password changed successfully',
  PASSWORD_CHANGE_FAILED: 'Failed to change password',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  SERVER_ERROR: 'Server error. Please try again later.',
  USERNAME_REQUIRED: 'Username is required',
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORDS_MUST_DIFFER: 'New password must be different from old password'
} as const;

/**
 * Local storage keys.
 */
export const STORAGE_KEYS = {
  USER: 'currentUser',
  TOKEN: 'authToken',
  REFRESH_TOKEN: 'refreshToken'
} as const;

/**
 * Route paths.
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ADMIN: '/admin',
  FORBIDDEN: '/forbidden',
  NOT_FOUND: '/404'
} as const;

/**
 * Type guard to check if a value is a valid user role.
 */
export function isValidRole(role: string): role is typeof USER_ROLES[keyof typeof USER_ROLES] {
  return Object.values(USER_ROLES).includes(role as any);
}

/**
 * Type guard to check if a value is a valid HTTP status code.
 */
export function isValidHttpStatus(status: number): status is typeof HTTP_STATUS[keyof typeof HTTP_STATUS] {
  return Object.values(HTTP_STATUS).includes(status);
}

