package com.bfwg.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for AuthenticationException.
 */
class AuthenticationExceptionTest {

    @Test
    void constructor_WithMessage_ShouldCreateException() {
        // Given
        String message = "Authentication failed";

        // When
        AuthenticationException exception = new AuthenticationException(message);

        // Then
        assertEquals(message, exception.getMessage());
        assertNull(exception.getCause());
    }

    @Test
    void constructor_WithMessageAndCause_ShouldCreateException() {
        // Given
        String message = "Authentication failed";
        Throwable cause = new RuntimeException("Root cause");

        // When
        AuthenticationException exception = new AuthenticationException(message, cause);

        // Then
        assertEquals(message, exception.getMessage());
        assertEquals(cause, exception.getCause());
    }
}

