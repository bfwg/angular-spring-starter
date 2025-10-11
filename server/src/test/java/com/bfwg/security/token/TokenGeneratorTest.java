package com.bfwg.security.token;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Comprehensive unit tests for TokenGenerator.
 * Tests all token generation operations.
 */
class TokenGeneratorTest {

    private TokenGenerator tokenGenerator;
    private static final String APP_NAME = "test-app";
    private static final String SECRET = "mySecretKeyForTestingPurposesOnlyMustBeLongEnough";
    private static final int EXPIRES_IN = 3600;

    @BeforeEach
    void setUp() {
        tokenGenerator = new TokenGenerator(APP_NAME, SECRET, EXPIRES_IN);
    }

    @Test
    void generateToken_WithValidUsername_ShouldReturnValidToken() {
        // Given
        String username = "testuser";

        // When
        String token = tokenGenerator.generateToken(username);

        // Then
        assertNotNull(token);
        assertFalse(token.isEmpty());
        
        // Verify token contents
        Claims claims = Jwts.parser()
                .verifyWith(tokenGenerator.getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
        
        assertEquals(username, claims.getSubject());
        assertEquals(APP_NAME, claims.getIssuer());
        assertNotNull(claims.getIssuedAt());
        assertNotNull(claims.getExpiration());
        assertTrue(claims.getExpiration().after(claims.getIssuedAt()));
    }

    @Test
    void generateToken_WithNullUsername_ShouldThrowException() {
        // When/Then
        assertThrows(IllegalArgumentException.class, () ->
            tokenGenerator.generateToken((String) null));
    }

    @Test
    void generateToken_WithEmptyUsername_ShouldThrowException() {
        // When/Then
        assertThrows(IllegalArgumentException.class, () ->
            tokenGenerator.generateToken(""));
    }

    @Test
    void generateToken_WithClaims_ShouldReturnValidToken() {
        // Given
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", 123);
        claims.put("role", "ADMIN");

        // When
        String token = tokenGenerator.generateToken(claims);

        // Then
        assertNotNull(token);
        assertFalse(token.isEmpty());
        
        // Verify token contents
        Claims parsedClaims = Jwts.parser()
                .verifyWith(tokenGenerator.getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
        
        assertEquals(123, parsedClaims.get("userId", Integer.class));
        assertEquals("ADMIN", parsedClaims.get("role", String.class));
    }

    @Test
    void generateToken_WithNullClaims_ShouldThrowException() {
        // When/Then
        assertThrows(NullPointerException.class, () ->
            tokenGenerator.generateToken((Map<String, Object>) null));
    }

    @Test
    void refreshToken_WithValidClaims_ShouldReturnNewToken() {
        // Given
        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", "testuser");
        claims.put("role", "USER");

        // When
        String token = tokenGenerator.refreshToken(claims);

        // Then
        assertNotNull(token);
        assertFalse(token.isEmpty());
        
        // Verify token contents
        Claims parsedClaims = Jwts.parser()
                .verifyWith(tokenGenerator.getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
        
        assertEquals("testuser", parsedClaims.getSubject());
        assertEquals("USER", parsedClaims.get("role", String.class));
        
        // Verify expiration is set
        assertNotNull(parsedClaims.getExpiration());
        assertTrue(parsedClaims.getExpiration().after(new Date()));
    }

    @Test
    void refreshToken_WithNullClaims_ShouldThrowException() {
        // When/Then
        assertThrows(NullPointerException.class, () ->
            tokenGenerator.refreshToken(null));
    }

    @Test
    void getExpiresInSeconds_ShouldReturnConfiguredValue() {
        // When
        int expiresIn = tokenGenerator.getExpiresInSeconds();

        // Then
        assertEquals(EXPIRES_IN, expiresIn);
    }

    @Test
    void constructor_WithNullAppName_ShouldThrowException() {
        // When/Then
        assertThrows(NullPointerException.class, () ->
            new TokenGenerator(null, SECRET, EXPIRES_IN));
    }

    @Test
    void constructor_WithNullSecret_ShouldThrowException() {
        // When/Then
        assertThrows(NullPointerException.class, () ->
            new TokenGenerator(APP_NAME, null, EXPIRES_IN));
    }

    @Test
    void generatedToken_ShouldHaveCorrectExpiration() {
        // Given
        String username = "testuser";

        // When
        String token = tokenGenerator.generateToken(username);
        
        // Then
        Claims claims = Jwts.parser()
                .verifyWith(tokenGenerator.getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
        
        long tokenExpiration = claims.getExpiration().getTime();
        long tokenIssuedAt = claims.getIssuedAt().getTime();
        long actualDuration = tokenExpiration - tokenIssuedAt;
        long expectedDuration = EXPIRES_IN * 1000L;
        
        // Allow 2 second difference due to execution time
        assertTrue(Math.abs(actualDuration - expectedDuration) < 2000, 
            "Expected duration ~" + expectedDuration + " but was " + actualDuration);
        assertTrue(claims.getExpiration().after(claims.getIssuedAt()));
    }
}

