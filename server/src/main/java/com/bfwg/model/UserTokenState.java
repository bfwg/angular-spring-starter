package com.bfwg.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;

/**
 * Data Transfer Object representing the state of a user's JWT token.
 * 
 * <p>This DTO is returned to clients upon successful authentication,
 * containing the access token and its expiration time.</p>
 * 
 * <p>Uses JSON property annotations to maintain backwards compatibility
 * with snake_case API contracts while following Java naming conventions.</p>
 * 
 * @author fan.jin
 * @since 2016-10-17
 */
public class UserTokenState {

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("expires_in")
    private Long expiresIn;

    /**
     * Default constructor creating an empty token state.
     */
    public UserTokenState() {
        this.accessToken = null;
        this.expiresIn = null;
    }

    /**
     * Constructs a UserTokenState with token and expiration.
     * 
     * @param accessToken the JWT access token
     * @param expiresIn the expiration time in seconds
     */
    public UserTokenState(String accessToken, long expiresIn) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }

    /**
     * Gets the JWT access token.
     * 
     * @return the access token
     */
    public String getAccessToken() {
        return accessToken;
    }

    /**
     * Sets the JWT access token.
     * 
     * @param accessToken the access token
     */
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    /**
     * Gets the token expiration time in seconds.
     * 
     * @return the expiration time
     */
    public Long getExpiresIn() {
        return expiresIn;
    }

    /**
     * Sets the token expiration time in seconds.
     * 
     * @param expiresIn the expiration time
     */
    public void setExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
    }

    /**
     * Checks if the token is valid (non-null and non-empty).
     * 
     * @return true if token is valid, false otherwise
     */
    public boolean isValid() {
        return accessToken != null && !accessToken.trim().isEmpty() && expiresIn != null && expiresIn > 0;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserTokenState)) return false;
        UserTokenState that = (UserTokenState) o;
        return Objects.equals(accessToken, that.accessToken) &&
                Objects.equals(expiresIn, that.expiresIn);
    }

    @Override
    public int hashCode() {
        return Objects.hash(accessToken, expiresIn);
    }

    @Override
    public String toString() {
        return "UserTokenState{" +
                "accessToken='***'" +
                ", expiresIn=" + expiresIn +
                '}';
    }
}
