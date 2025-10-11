package com.bfwg.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for UserNotFoundException.
 */
class UserNotFoundExceptionTest {

    @Test
    void constructor_WithUsername_ShouldCreateException() {
        // Given
        String username = "testuser";

        // When
        UserNotFoundException exception = new UserNotFoundException(username);

        // Then
        assertEquals("User not found with username: testuser", exception.getMessage());
        assertEquals(username, exception.getIdentifier());
    }

    @Test
    void constructor_WithUserId_ShouldCreateException() {
        // Given
        Long userId = 123L;

        // When
        UserNotFoundException exception = new UserNotFoundException(userId);

        // Then
        assertEquals("User not found with ID: 123", exception.getMessage());
        assertEquals(userId, exception.getIdentifier());
    }
}

