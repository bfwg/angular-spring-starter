package com.bfwg.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Objects;

/**
 * Data Transfer Object for user registration/creation requests.
 * 
 * <p>This DTO follows Clean Code principles:</p>
 * <ul>
 *   <li>Uses Bean Validation for declarative validation</li>
 *   <li>Immutable where possible with proper encapsulation</li>
 *   <li>Clear and descriptive field names</li>
 * </ul>
 * 
 * @since 0.1.0
 */
public class UserRequest {

    private Long id;

    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 100, message = "Username must be between 3 and 100 characters")
    private String username;

    @NotBlank(message = "Password is required")
    @Size(min = 3, max = 100, message = "Password must be between 3 and 100 characters")
    private String password;

    @Size(max = 100, message = "First name must not exceed 100 characters")
    private String firstname;

    @Size(max = 100, message = "Last name must not exceed 100 characters")
    private String lastname;

    /**
     * Default constructor.
     */
    public UserRequest() {
    }

    /**
     * Constructs a UserRequest with all fields.
     * 
     * @param username the username
     * @param password the password
     * @param firstname the first name
     * @param lastname the last name
     */
    public UserRequest(String username, String password, String firstname, String lastname) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserRequest)) return false;
        UserRequest that = (UserRequest) o;
        return Objects.equals(username, that.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username);
    }

    @Override
    public String toString() {
        return "UserRequest{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                '}';
    }
}
