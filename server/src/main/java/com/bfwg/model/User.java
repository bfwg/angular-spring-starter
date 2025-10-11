package com.bfwg.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

/**
 * Represents a user in the authentication system.
 * Implements {@link UserDetails} to integrate with Spring Security.
 * 
 * <p>This entity follows Clean Code principles with:</p>
 * <ul>
 *   <li>Proper encapsulation and immutability where possible</li>
 *   <li>Builder pattern for complex object construction</li>
 *   <li>Defensive copying for collections</li>
 *   <li>Clear separation of concerns</li>
 * </ul>
 * 
 * @author fan.jin
 * @since 2016-10-15
 */
@Entity
@Table(name = "USER", indexes = {
    @Index(name = "idx_username", columnList = "username", unique = true)
})
public class User implements UserDetails, Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id", nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", unique = true, nullable = false, length = 100)
    private String username;

    @JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "firstname", length = 100)
    private String firstname;

    @Column(name = "lastname", length = 100)
    private String lastname;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_authority",
        joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "authority_id", referencedColumnName = "id")
    )
    private List<Authority> authorities = new ArrayList<>();

    /**
     * Default constructor for JPA.
     */
    protected User() {
        // Required by JPA
    }

    /**
     * Private constructor for builder pattern.
     */
    private User(Builder builder) {
        this.username = builder.username;
        this.password = builder.password;
        this.firstname = builder.firstname;
        this.lastname = builder.lastname;
        this.authorities = new ArrayList<>(builder.authorities);
    }

    /**
     * Creates a new builder for constructing User instances.
     * 
     * @return a new builder
     */
    public static Builder builder() {
        return new Builder();
    }

    /**
     * Gets the unique identifier.
     * 
     * @return the user id
     */
    public Long getId() {
        return id;
    }

    /**
     * Gets the username used for authentication.
     * 
     * @return the username
     */
    @Override
    public String getUsername() {
        return username;
    }

    /**
     * Gets the encrypted password.
     * 
     * @return the password hash
     */
    @JsonIgnore
    @Override
    public String getPassword() {
        return password;
    }

    /**
     * Updates the user's password.
     * Should only be called with an already encrypted password.
     * 
     * @param password the encrypted password
     */
    public void setPassword(String password) {
        this.password = Objects.requireNonNull(password, "Password must not be null");
    }

    /**
     * Gets the user's first name.
     * 
     * @return the first name
     */
    public String getFirstname() {
        return firstname;
    }

    /**
     * Gets the user's last name.
     * 
     * @return the last name
     */
    public String getLastname() {
        return lastname;
    }

    /**
     * Gets the user's full name.
     * 
     * @return the full name (firstname + lastname)
     */
    public String getFullName() {
        if (firstname == null && lastname == null) {
            return username;
        }
        return String.format("%s %s", 
            firstname != null ? firstname : "", 
            lastname != null ? lastname : "").trim();
    }

    /**
     * Returns an unmodifiable collection of the user's authorities.
     * 
     * @return the user's granted authorities
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.unmodifiableList(authorities);
    }

    /**
     * Sets the user's authorities. Uses defensive copying.
     * 
     * @param authorities the new authorities list
     */
    public void setAuthorities(List<Authority> authorities) {
        this.authorities = new ArrayList<>(authorities != null ? authorities : Collections.emptyList());
    }

    /**
     * Indicates whether the user's account has expired.
     * This implementation always returns true.
     * 
     * @return true if the account is non-expired
     */
    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    /**
     * Indicates whether the user is locked or unlocked.
     * This implementation always returns true.
     * 
     * @return true if the account is non-locked
     */
    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    /**
     * Indicates whether the user's credentials (password) has expired.
     * This implementation always returns true.
     * 
     * @return true if the credentials are non-expired
     */
    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    /**
     * Indicates whether the user is enabled or disabled.
     * This implementation always returns true.
     * 
     * @return true if the user is enabled
     */
    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(username, user.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", authorities=" + authorities.size() +
                '}';
    }

    /**
     * Builder class for creating User instances.
     * Follows the Builder pattern for clear and flexible object construction.
     */
    public static class Builder {
        private String username;
        private String password;
        private String firstname;
        private String lastname;
        private List<Authority> authorities = new ArrayList<>();

        private Builder() {
        }

        public Builder username(String username) {
            this.username = username;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder firstname(String firstname) {
            this.firstname = firstname;
            return this;
        }

        public Builder lastname(String lastname) {
            this.lastname = lastname;
            return this;
        }

        public Builder authorities(List<Authority> authorities) {
            this.authorities = new ArrayList<>(authorities != null ? authorities : Collections.emptyList());
            return this;
        }

        public Builder addAuthority(Authority authority) {
            if (authority != null) {
                this.authorities.add(authority);
            }
            return this;
        }

        /**
         * Builds a new User instance.
         * 
         * @return the constructed user
         * @throws IllegalStateException if required fields are missing
         */
        public User build() {
            Objects.requireNonNull(username, "Username must not be null");
            Objects.requireNonNull(password, "Password must not be null");
            
            if (username.trim().isEmpty()) {
                throw new IllegalArgumentException("Username must not be empty");
            }
            
            return new User(this);
        }
    }
}
