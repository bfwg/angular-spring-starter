package com.bfwg.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.*;
import java.util.Objects;

/**
 * Represents a security authority/role in the system.
 * Implements {@link GrantedAuthority} to integrate with Spring Security.
 * 
 * <p>This entity follows the Single Responsibility Principle by solely representing
 * a user's authority/role in the system.</p>
 * 
 * @author fan.jin
 * @since 2016-11-03
 */
@Entity
@Table(name = "AUTHORITY")
public class Authority implements GrantedAuthority {

    @Id
    @Column(name = "id", nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "name", nullable = false, length = 50)
    private UserRoleName name;

    /**
     * Default constructor for JPA.
     */
    protected Authority() {
        // Required by JPA
    }

    /**
     * Creates a new Authority with the specified role name.
     * 
     * @param name the role name, must not be null
     * @throws IllegalArgumentException if name is null
     */
    public Authority(UserRoleName name) {
        this.name = Objects.requireNonNull(name, "Authority name must not be null");
    }

    /**
     * Returns the authority string representation for Spring Security.
     * 
     * @return the authority name as a string
     */
    @Override
    public String getAuthority() {
        return name != null ? name.name() : null;
    }

    /**
     * Gets the role name as an enum.
     * 
     * @return the role name enum
     */
    @JsonIgnore
    public UserRoleName getName() {
        return name;
    }

    /**
     * Gets the unique identifier.
     * 
     * @return the id
     */
    @JsonIgnore
    public Long getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Authority)) return false;
        Authority authority = (Authority) o;
        return name == authority.name;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        return "Authority{" +
                "id=" + id +
                ", name=" + name +
                '}';
    }
}
