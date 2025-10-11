package com.bfwg.common;

/**
 * Application-wide constants.
 * 
 * <p>This class centralizes all constant values used throughout the application,
 * following the DRY (Don't Repeat Yourself) principle and making the codebase
 * more maintainable.</p>
 * 
 * @since 0.2.0
 */
public final class Constants {

    private Constants() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Security and authentication related constants.
     */
    public static final class Security {
        private Security() {
        }

        public static final String ROLE_PREFIX = "ROLE_";
        public static final String ROLE_USER = "ROLE_USER";
        public static final String ROLE_ADMIN = "ROLE_ADMIN";
        public static final String BEARER_PREFIX = "Bearer ";
        public static final int MIN_PASSWORD_LENGTH = 3;
        public static final int MAX_PASSWORD_LENGTH = 100;
        public static final String DEFAULT_DEMO_PASSWORD = "123";
    }

    /**
     * API endpoint path constants.
     */
    public static final class Api {
        private Api() {
        }

        public static final String BASE_PATH = "/api";
        public static final String LOGIN_PATH = "/api/login";
        public static final String SIGNUP_PATH = "/api/signup";
        public static final String LOGOUT_PATH = "/api/logout";
        public static final String REFRESH_PATH = "/api/refresh";
        public static final String CHANGE_PASSWORD_PATH = "/api/changePassword";
        public static final String WHOAMI_PATH = "/api/whoami";
        public static final String USERS_PATH = "/api/user/all";
        public static final String USER_BY_ID_PATH = "/api/user/{userId}";
        public static final String RESET_CREDENTIALS_PATH = "/api/user/reset-credentials";
    }

    /**
     * HTTP status messages and response constants.
     */
    public static final class Messages {
        private Messages() {
        }

        public static final String SUCCESS = "success";
        public static final String ERROR = "error";
        public static final String RESULT = "result";
        
        // Error messages
        public static final String USERNAME_REQUIRED = "Username is required";
        public static final String PASSWORD_REQUIRED = "Password is required";
        public static final String USERNAME_EXISTS = "Username already exists";
        public static final String USER_NOT_FOUND = "User not found";
        public static final String INVALID_CREDENTIALS = "Invalid credentials";
        public static final String ACCESS_DENIED = "Access denied";
        public static final String PASSWORD_MISMATCH = "Passwords must be different";
        public static final String WEAK_PASSWORD = "Password does not meet strength requirements";
    }

    /**
     * Validation constraints.
     */
    public static final class Validation {
        private Validation() {
        }

        public static final int USERNAME_MIN_LENGTH = 3;
        public static final int USERNAME_MAX_LENGTH = 100;
        public static final int NAME_MAX_LENGTH = 100;
        public static final int PASSWORD_MIN_LENGTH = 3;
        public static final int PASSWORD_MAX_LENGTH = 100;
    }

    /**
     * Database related constants.
     */
    public static final class Database {
        private Database() {
        }

        public static final String TABLE_USER = "USER";
        public static final String TABLE_AUTHORITY = "AUTHORITY";
        public static final String TABLE_USER_AUTHORITY = "user_authority";
        public static final String COLUMN_ID = "id";
        public static final String COLUMN_USERNAME = "username";
        public static final String COLUMN_PASSWORD = "password";
        public static final String COLUMN_FIRSTNAME = "firstname";
        public static final String COLUMN_LASTNAME = "lastname";
        public static final String COLUMN_NAME = "name";
    }
}

