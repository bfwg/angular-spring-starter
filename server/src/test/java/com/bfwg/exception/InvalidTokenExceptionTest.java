package com.bfwg.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for InvalidTokenException.
 */
class InvalidTokenExceptionTest {

    @Test
    void constructor_WithErrorType_ShouldCreateException() {
        // When
        InvalidTokenException exception = new InvalidTokenException(
            InvalidTokenException.TokenErrorType.EXPIRED
        );

        // Then
        assertEquals("Token has expired", exception.getMessage());
        assertEquals(InvalidTokenException.TokenErrorType.EXPIRED, exception.getErrorType());
        assertNull(exception.getCause());
    }

    @Test
    void constructor_WithErrorTypeAndCause_ShouldCreateException() {
        // Given
        Throwable cause = new RuntimeException("Root cause");

        // When
        InvalidTokenException exception = new InvalidTokenException(
            InvalidTokenException.TokenErrorType.MALFORMED, cause
        );

        // Then
        assertEquals("Token is malformed", exception.getMessage());
        assertEquals(InvalidTokenException.TokenErrorType.MALFORMED, exception.getErrorType());
        assertEquals(cause, exception.getCause());
    }

    @Test
    void constructor_WithMessage_ShouldCreateExceptionWithDefaultErrorType() {
        // Given
        String message = "Custom error message";

        // When
        InvalidTokenException exception = new InvalidTokenException(message);

        // Then
        assertEquals(message, exception.getMessage());
        assertEquals(InvalidTokenException.TokenErrorType.MALFORMED, exception.getErrorType());
    }

    @Test
    void tokenErrorType_ShouldHaveCorrectDescriptions() {
        assertEquals("Token has expired", 
            InvalidTokenException.TokenErrorType.EXPIRED.getDescription());
        assertEquals("Token is malformed", 
            InvalidTokenException.TokenErrorType.MALFORMED.getDescription());
        assertEquals("Token signature is invalid", 
            InvalidTokenException.TokenErrorType.INVALID_SIGNATURE.getDescription());
        assertEquals("Token type is unsupported", 
            InvalidTokenException.TokenErrorType.UNSUPPORTED.getDescription());
        assertEquals("Token claims are empty", 
            InvalidTokenException.TokenErrorType.EMPTY_CLAIMS.getDescription());
    }
}

