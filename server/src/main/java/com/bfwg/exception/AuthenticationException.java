package com.bfwg.exception;

/**
 * Base exception for authentication-related errors.
 * 
 * <p>This exception serves as the parent for all authentication-related
 * exceptions in the application, following the exception hierarchy pattern.</p>
 * 
 * @since 0.2.0
 */
public class AuthenticationException extends RuntimeException {

    /**
     * Constructs a new authentication exception with the specified detail message.
     * 
     * @param message the detail message
     */
    public AuthenticationException(String message) {
        super(message);
    }

    /**
     * Constructs a new authentication exception with the specified detail message and cause.
     * 
     * @param message the detail message
     * @param cause the cause
     */
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}

