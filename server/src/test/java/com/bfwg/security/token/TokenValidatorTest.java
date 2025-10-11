package com.bfwg.security.token;

import com.bfwg.exception.InvalidTokenException;
import io.jsonwebtoken.Claims;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Comprehensive unit tests for TokenValidator.
 * Tests all token validation operations.
 */
class TokenValidatorTest {

    private TokenGenerator tokenGenerator;
    private TokenValidator tokenValidator;
    private static final String APP_NAME = "test-app";
    private static final String SECRET = "mySecretKeyForTestingPurposesOnlyMustBeLongEnough";
    private static final int EXPIRES_IN = 3600;

    @BeforeEach
    void setUp() {
        tokenGenerator = new TokenGenerator(APP_NAME, SECRET, EXPIRES_IN);
        tokenValidator = new TokenValidator(tokenGenerator);
    }

    @Test
    void getClaimsFromToken_WithValidToken_ShouldReturnClaims() {
        // Given
        String username = "testuser";
        String token = tokenGenerator.generateToken(username);

        // When
        Claims claims = tokenValidator.getClaimsFromToken(token);

        // Then
        assertNotNull(claims);
        assertEquals(username, claims.getSubject());
        assertEquals(APP_NAME, claims.getIssuer());
    }

    @Test
    void getClaimsFromToken_WithNullToken_ShouldThrowException() {
        // When/Then
        InvalidTokenException exception = assertThrows(InvalidTokenException.class, () ->
            tokenValidator.getClaimsFromToken(null));
        assertEquals("Token must not be null or empty", exception.getMessage());
    }

    @Test
    void getClaimsFromToken_WithEmptyToken_ShouldThrowException() {
        // When/Then
        InvalidTokenException exception = assertThrows(InvalidTokenException.class, () ->
            tokenValidator.getClaimsFromToken(""));
        assertEquals("Token must not be null or empty", exception.getMessage());
    }

    @Test
    void getClaimsFromToken_WithMalformedToken_ShouldThrowException() {
        // Given
        String malformedToken = "this.is.malformed";

        // When/Then
        InvalidTokenException exception = assertThrows(InvalidTokenException.class, () ->
            tokenValidator.getClaimsFromToken(malformedToken));
        assertEquals(InvalidTokenException.TokenErrorType.MALFORMED, exception.getErrorType());
    }

    @Test
    void getClaimsFromToken_WithInvalidSignature_ShouldThrowException() {
        // Given
        TokenGenerator differentGenerator = new TokenGenerator(APP_NAME, "differentSecretKeyThatIsLongEnoughForTesting", EXPIRES_IN);
        String token = differentGenerator.generateToken("testuser");

        // When/Then
        InvalidTokenException exception = assertThrows(InvalidTokenException.class, () ->
            tokenValidator.getClaimsFromToken(token));
        assertEquals(InvalidTokenException.TokenErrorType.INVALID_SIGNATURE, exception.getErrorType());
    }

    @Test
    void getUsernameFromToken_WithValidToken_ShouldReturnUsername() {
        // Given
        String username = "testuser";
        String token = tokenGenerator.generateToken(username);

        // When
        String extractedUsername = tokenValidator.getUsernameFromToken(token);

        // Then
        assertEquals(username, extractedUsername);
    }

    @Test
    void getUsernameFromToken_WithInvalidToken_ShouldThrowException() {
        // When/Then
        assertThrows(InvalidTokenException.class, () ->
            tokenValidator.getUsernameFromToken("invalid.token.here"));
    }

    @Test
    void getExpirationDateFromToken_WithValidToken_ShouldReturnDate() {
        // Given
        String token = tokenGenerator.generateToken("testuser");

        // When
        Date expiration = tokenValidator.getExpirationDateFromToken(token);

        // Then
        assertNotNull(expiration);
        assertTrue(expiration.after(new Date()));
    }

    @Test
    void isTokenExpired_WithValidToken_ShouldReturnFalse() {
        // Given
        String token = tokenGenerator.generateToken("testuser");

        // When
        boolean expired = tokenValidator.isTokenExpired(token);

        // Then
        assertFalse(expired);
    }

    @Test
    void isTokenExpired_WithInvalidToken_ShouldReturnTrue() {
        // Given
        String invalidToken = "invalid.token.here";

        // When
        boolean expired = tokenValidator.isTokenExpired(invalidToken);

        // Then
        assertTrue(expired);
    }

    @Test
    void isTokenValid_WithValidToken_ShouldReturnTrue() {
        // Given
        String token = tokenGenerator.generateToken("testuser");

        // When
        boolean valid = tokenValidator.isTokenValid(token);

        // Then
        assertTrue(valid);
    }

    @Test
    void isTokenValid_WithInvalidToken_ShouldReturnFalse() {
        // Given
        String invalidToken = "invalid.token.here";

        // When
        boolean valid = tokenValidator.isTokenValid(invalidToken);

        // Then
        assertFalse(valid);
    }

    @Test
    void isTokenValid_WithMalformedToken_ShouldReturnFalse() {
        // When
        boolean valid = tokenValidator.isTokenValid("malformed");

        // Then
        assertFalse(valid);
    }

    @Test
    void canTokenBeRefreshed_WithValidToken_ShouldReturnTrue() {
        // Given
        String token = tokenGenerator.generateToken("testuser");

        // When
        boolean canRefresh = tokenValidator.canTokenBeRefreshed(token);

        // Then
        assertTrue(canRefresh);
    }

    @Test
    void canTokenBeRefreshed_WithInvalidToken_ShouldReturnFalse() {
        // Given
        String invalidToken = "invalid.token.here";

        // When
        boolean canRefresh = tokenValidator.canTokenBeRefreshed(invalidToken);

        // Then
        assertFalse(canRefresh);
    }

    @Test
    void constructor_WithNullTokenGenerator_ShouldThrowException() {
        // When/Then
        assertThrows(NullPointerException.class, () ->
            new TokenValidator(null));
    }

    @Test
    void getClaimsFromToken_WithCustomClaims_ShouldPreserveClaims() {
        // Given
        Map<String, Object> customClaims = new HashMap<>();
        customClaims.put("userId", 123);
        customClaims.put("role", "ADMIN");
        customClaims.put("sub", "testuser");
        String token = tokenGenerator.generateToken(customClaims);

        // When
        Claims claims = tokenValidator.getClaimsFromToken(token);

        // Then
        assertEquals(123, claims.get("userId", Integer.class));
        assertEquals("ADMIN", claims.get("role", String.class));
        assertEquals("testuser", claims.getSubject());
    }
}

