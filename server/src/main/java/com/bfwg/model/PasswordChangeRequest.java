package com.bfwg.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Objects;

/**
 * Data Transfer Object for password change requests.
 * 
 * <p>This DTO encapsulates the data required for a user to change their password.
 * Follows Clean Code principles with proper validation and encapsulation.</p>
 * 
 * @since 0.1.0
 */
public class PasswordChangeRequest {

    @NotBlank(message = "Old password is required")
    private String oldPassword;

    @NotBlank(message = "New password is required")
    @Size(min = 3, max = 100, message = "New password must be between 3 and 100 characters")
    private String newPassword;

    /**
     * Default constructor for JSON deserialization.
     */
    public PasswordChangeRequest() {
    }

    /**
     * Constructs a PasswordChangeRequest with old and new passwords.
     * 
     * @param oldPassword the current password
     * @param newPassword the new password
     */
    public PasswordChangeRequest(String oldPassword, String newPassword) {
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }

    /**
     * Gets the old password.
     * 
     * @return the old password
     */
    public String getOldPassword() {
        return oldPassword;
    }

    /**
     * Sets the old password.
     * 
     * @param oldPassword the old password
     */
    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    /**
     * Gets the new password.
     * 
     * @return the new password
     */
    public String getNewPassword() {
        return newPassword;
    }

    /**
     * Sets the new password.
     * 
     * @param newPassword the new password
     */
    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    /**
     * Validates that the old and new passwords are different.
     * 
     * @return true if passwords are different, false otherwise
     */
    public boolean arePasswordsDifferent() {
        return oldPassword != null && newPassword != null && !oldPassword.equals(newPassword);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PasswordChangeRequest)) return false;
        PasswordChangeRequest that = (PasswordChangeRequest) o;
        return Objects.equals(oldPassword, that.oldPassword) &&
                Objects.equals(newPassword, that.newPassword);
    }

    @Override
    public int hashCode() {
        return Objects.hash(oldPassword, newPassword);
    }

    @Override
    public String toString() {
        return "PasswordChangeRequest{oldPassword='***', newPassword='***'}";
    }
}

