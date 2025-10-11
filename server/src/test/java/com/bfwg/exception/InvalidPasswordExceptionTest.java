package com.bfwg.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for InvalidPasswordException.
 */
class InvalidPasswordExceptionTest {

    @Test
    void constructor_WithErrorType_ShouldCreateException() {
        // When
        InvalidPasswordException exception = new InvalidPasswordException(
            InvalidPasswordException.PasswordErrorType.TOO_SHORT
        );

        // Then
        assertEquals("Password is too short", exception.getMessage());
        assertEquals(InvalidPasswordException.PasswordErrorType.TOO_SHORT, exception.getErrorType());
    }

    @Test
    void constructor_WithMessage_ShouldCreateExceptionWithDefaultErrorType() {
        // Given
        String message = "Custom password error";

        // When
        InvalidPasswordException exception = new InvalidPasswordException(message);

        // Then
        assertEquals(message, exception.getMessage());
        assertEquals(InvalidPasswordException.PasswordErrorType.WEAK, exception.getErrorType());
    }

    @Test
    void passwordErrorType_ShouldHaveCorrectDescriptions() {
        assertEquals("Password is too short", 
            InvalidPasswordException.PasswordErrorType.TOO_SHORT.getDescription());
        assertEquals("Password is too long", 
            InvalidPasswordException.PasswordErrorType.TOO_LONG.getDescription());
        assertEquals("Current password is incorrect", 
            InvalidPasswordException.PasswordErrorType.INCORRECT.getDescription());
        assertEquals("New password must be different from old password", 
            InvalidPasswordException.PasswordErrorType.SAME_AS_OLD.getDescription());
        assertEquals("Password does not meet strength requirements", 
            InvalidPasswordException.PasswordErrorType.WEAK.getDescription());
    }
}

