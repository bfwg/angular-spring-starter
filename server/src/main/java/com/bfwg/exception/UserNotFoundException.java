package com.bfwg.exception;

/**
 * Exception thrown when a requested user cannot be found.
 * 
 * <p>This exception provides a clear, domain-specific error for user lookup failures,
 * improving error handling and API responses.</p>
 * 
 * @since 0.2.0
 */
public class UserNotFoundException extends RuntimeException {

    private final Object identifier;

    /**
     * Constructs a new user not found exception with the specified username.
     * 
     * @param username the username that was not found
     */
    public UserNotFoundException(String username) {
        super(String.format("User not found with username: %s", username));
        this.identifier = username;
    }

    /**
     * Constructs a new user not found exception with the specified user ID.
     * 
     * @param userId the user ID that was not found
     */
    public UserNotFoundException(Long userId) {
        super(String.format("User not found with ID: %d", userId));
        this.identifier = userId;
    }

    /**
     * Gets the identifier (username or ID) that was not found.
     * 
     * @return the identifier
     */
    public Object getIdentifier() {
        return identifier;
    }
}

