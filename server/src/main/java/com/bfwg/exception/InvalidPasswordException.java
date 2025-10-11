package com.bfwg.exception;

/**
 * Exception thrown when password validation or verification fails.
 * 
 * <p>This exception provides specific feedback about password-related errors,
 * helping users understand what went wrong.</p>
 * 
 * @since 0.2.0
 */
public class InvalidPasswordException extends RuntimeException {

    private final PasswordErrorType errorType;

    /**
     * Types of password validation errors.
     */
    public enum PasswordErrorType {
        TOO_SHORT("Password is too short"),
        TOO_LONG("Password is too long"),
        INCORRECT("Current password is incorrect"),
        SAME_AS_OLD("New password must be different from old password"),
        WEAK("Password does not meet strength requirements");

        private final String description;

        PasswordErrorType(String description) {
            this.description = description;
        }

        public String getDescription() {
            return description;
        }
    }

    /**
     * Constructs a new invalid password exception with the specified error type.
     * 
     * @param errorType the type of password error
     */
    public InvalidPasswordException(PasswordErrorType errorType) {
        super(errorType.getDescription());
        this.errorType = errorType;
    }

    /**
     * Constructs a new invalid password exception with a custom message.
     * 
     * @param message the detail message
     */
    public InvalidPasswordException(String message) {
        super(message);
        this.errorType = PasswordErrorType.WEAK;
    }

    /**
     * Gets the error type.
     * 
     * @return the password error type
     */
    public PasswordErrorType getErrorType() {
        return errorType;
    }
}

