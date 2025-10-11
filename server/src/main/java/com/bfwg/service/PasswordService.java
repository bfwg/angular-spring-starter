package com.bfwg.service;

import com.bfwg.model.User;

/**
 * Service interface for password management operations.
 * 
 * <p>This service follows the Single Responsibility Principle by focusing
 * solely on password-related operations such as encoding, validation, and changing.</p>
 * 
 * <p>Follows the Interface Segregation Principle by defining a focused contract
 * for password operations only.</p>
 * 
 * @since 0.2.0
 */
public interface PasswordService {

    /**
     * Encodes a raw password using the configured password encoder.
     * 
     * @param rawPassword the raw password to encode
     * @return the encoded password
     * @throws IllegalArgumentException if rawPassword is null or empty
     */
    String encodePassword(String rawPassword);

    /**
     * Validates that a raw password matches an encoded password.
     * 
     * @param rawPassword the raw password to check
     * @param encodedPassword the encoded password to compare against
     * @return true if the passwords match, false otherwise
     */
    boolean matches(String rawPassword, String encodedPassword);

    /**
     * Changes a user's password after validating the old password.
     * 
     * @param user the user whose password should be changed
     * @param oldPassword the current password (for validation)
     * @param newPassword the new password to set
     * @throws IllegalArgumentException if the old password is incorrect
     * @throws IllegalArgumentException if new password is invalid
     */
    void changePassword(User user, String oldPassword, String newPassword);

    /**
     * Validates password strength according to configured rules.
     * 
     * @param password the password to validate
     * @return true if password meets strength requirements, false otherwise
     */
    boolean isPasswordStrong(String password);
}

