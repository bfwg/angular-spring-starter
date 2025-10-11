package com.bfwg.security.token;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Map;
import java.util.Objects;

/**
 * Service responsible for generating JWT tokens.
 * 
 * <p>This service follows the Single Responsibility Principle by focusing
 * solely on token generation operations.</p>
 * 
 * <p>Key features:</p>
 * <ul>
 *   <li>Generates tokens with username as subject</li>
 *   <li>Generates tokens with custom claims</li>
 *   <li>Configurable expiration time</li>
 *   <li>Secure key generation from secret</li>
 * </ul>
 * 
 * @since 0.2.0
 */
@Component
public class TokenGenerator {

    private final String appName;
    private final String secret;
    private final int expiresInSeconds;

    /**
     * Constructs a TokenGenerator with configuration values.
     * 
     * @param appName the application name (token issuer)
     * @param secret the secret key for signing tokens
     * @param expiresInSeconds token expiration time in seconds
     */
    public TokenGenerator(
            @Value("${app.name}") String appName,
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.expires_in}") int expiresInSeconds) {
        this.appName = Objects.requireNonNull(appName, "App name must not be null");
        this.secret = Objects.requireNonNull(secret, "Secret must not be null");
        this.expiresInSeconds = expiresInSeconds;
    }

    /**
     * Generates a JWT token for the specified username.
     * 
     * @param username the username to include in the token
     * @return the generated JWT token
     * @throws IllegalArgumentException if username is null or empty
     */
    public String generateToken(String username) {
        if (username == null || username.trim().isEmpty()) {
            throw new IllegalArgumentException("Username must not be null or empty");
        }

        Instant now = Instant.now();
        Instant expiration = now.plus(expiresInSeconds, ChronoUnit.SECONDS);

        return Jwts.builder()
                .issuer(appName)
                .subject(username)
                .issuedAt(Date.from(now))
                .expiration(Date.from(expiration))
                .signWith(getSigningKey())
                .compact();
    }

    /**
     * Generates a JWT token with custom claims.
     * 
     * @param claims the custom claims to include in the token
     * @return the generated JWT token
     * @throws IllegalArgumentException if claims is null
     */
    public String generateToken(Map<String, Object> claims) {
        Objects.requireNonNull(claims, "Claims must not be null");

        Instant now = Instant.now();
        Instant expiration = now.plus(expiresInSeconds, ChronoUnit.SECONDS);

        return Jwts.builder()
                .claims(claims)
                .issuedAt(Date.from(now))
                .expiration(Date.from(expiration))
                .signWith(getSigningKey())
                .compact();
    }

    /**
     * Refreshes an existing token by reissuing it with updated timestamps.
     * 
     * @param claims the claims from the original token
     * @return the refreshed JWT token
     * @throws IllegalArgumentException if claims is null
     */
    public String refreshToken(Map<String, Object> claims) {
        Objects.requireNonNull(claims, "Claims must not be null");

        Instant now = Instant.now();
        Instant expiration = now.plus(expiresInSeconds, ChronoUnit.SECONDS);

        return Jwts.builder()
                .claims(claims)
                .issuedAt(Date.from(now))
                .expiration(Date.from(expiration))
                .signWith(getSigningKey())
                .compact();
    }

    /**
     * Gets the signing key for JWT operations.
     * 
     * @return the secret key
     */
    SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }

    /**
     * Gets the token expiration time in seconds.
     * 
     * @return the expiration time
     */
    public int getExpiresInSeconds() {
        return expiresInSeconds;
    }
}

