package com.bfwg.exception;

/**
 * Exception thrown when a JWT token is invalid, expired, or malformed.
 * 
 * <p>This exception provides specific information about token validation failures,
 * enabling better error handling and user feedback.</p>
 * 
 * @since 0.2.0
 */
public class InvalidTokenException extends AuthenticationException {

    private final TokenErrorType errorType;

    /**
     * Types of token validation errors.
     */
    public enum TokenErrorType {
        EXPIRED("Token has expired"),
        MALFORMED("Token is malformed"),
        INVALID_SIGNATURE("Token signature is invalid"),
        UNSUPPORTED("Token type is unsupported"),
        EMPTY_CLAIMS("Token claims are empty");

        private final String description;

        TokenErrorType(String description) {
            this.description = description;
        }

        public String getDescription() {
            return description;
        }
    }

    /**
     * Constructs a new invalid token exception with the specified error type.
     * 
     * @param errorType the type of token error
     */
    public InvalidTokenException(TokenErrorType errorType) {
        super(errorType.getDescription());
        this.errorType = errorType;
    }

    /**
     * Constructs a new invalid token exception with the specified error type and cause.
     * 
     * @param errorType the type of token error
     * @param cause the cause
     */
    public InvalidTokenException(TokenErrorType errorType, Throwable cause) {
        super(errorType.getDescription(), cause);
        this.errorType = errorType;
    }

    /**
     * Constructs a new invalid token exception with a custom message.
     * 
     * @param message the detail message
     */
    public InvalidTokenException(String message) {
        super(message);
        this.errorType = TokenErrorType.MALFORMED;
    }

    /**
     * Gets the error type.
     * 
     * @return the token error type
     */
    public TokenErrorType getErrorType() {
        return errorType;
    }
}

