package com.bfwg.security.token;

import com.bfwg.exception.InvalidTokenException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Date;
import java.util.Objects;

/**
 * Service responsible for validating JWT tokens.
 * 
 * <p>This service follows the Single Responsibility Principle by focusing
 * solely on token validation operations.</p>
 * 
 * <p>Key features:</p>
 * <ul>
 *   <li>Validates token signature</li>
 *   <li>Extracts token claims</li>
 *   <li>Checks token expiration</li>
 *   <li>Provides detailed error information</li>
 * </ul>
 * 
 * @since 0.2.0
 */
@Component
public class TokenValidator {

    private static final Logger logger = LoggerFactory.getLogger(TokenValidator.class);

    private final TokenGenerator tokenGenerator;

    /**
     * Constructs a TokenValidator with required dependencies.
     * 
     * @param tokenGenerator the token generator for accessing signing key
     */
    @Autowired
    public TokenValidator(TokenGenerator tokenGenerator) {
        this.tokenGenerator = Objects.requireNonNull(tokenGenerator, "TokenGenerator must not be null");
    }

    /**
     * Extracts claims from a JWT token.
     * 
     * @param token the JWT token
     * @return the claims from the token
     * @throws InvalidTokenException if the token is invalid
     */
    public Claims getClaimsFromToken(String token) {
        if (token == null || token.trim().isEmpty()) {
            throw new InvalidTokenException("Token must not be null or empty");
        }

        try {
            return Jwts.parser()
                    .verifyWith(tokenGenerator.getSigningKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
        } catch (ExpiredJwtException e) {
            logger.debug("Token has expired: {}", e.getMessage());
            throw new InvalidTokenException(InvalidTokenException.TokenErrorType.EXPIRED, e);
        } catch (UnsupportedJwtException e) {
            logger.error("Token type is not supported: {}", e.getMessage());
            throw new InvalidTokenException(InvalidTokenException.TokenErrorType.UNSUPPORTED, e);
        } catch (MalformedJwtException e) {
            logger.error("Token is malformed: {}", e.getMessage());
            throw new InvalidTokenException(InvalidTokenException.TokenErrorType.MALFORMED, e);
        } catch (SignatureException e) {
            logger.error("Token signature is invalid: {}", e.getMessage());
            throw new InvalidTokenException(InvalidTokenException.TokenErrorType.INVALID_SIGNATURE, e);
        } catch (JwtException e) {
            logger.error("Token validation failed: {}", e.getMessage());
            throw new InvalidTokenException(InvalidTokenException.TokenErrorType.MALFORMED, e);
        }
    }

    /**
     * Extracts the username from a JWT token.
     * 
     * @param token the JWT token
     * @return the username from the token subject
     * @throws InvalidTokenException if the token is invalid
     */
    public String getUsernameFromToken(String token) {
        Claims claims = getClaimsFromToken(token);
        String username = claims.getSubject();
        
        if (username == null || username.trim().isEmpty()) {
            throw new InvalidTokenException("Token subject (username) is missing");
        }
        
        return username;
    }

    /**
     * Extracts the expiration date from a JWT token.
     * 
     * @param token the JWT token
     * @return the expiration date
     * @throws InvalidTokenException if the token is invalid
     */
    public Date getExpirationDateFromToken(String token) {
        Claims claims = getClaimsFromToken(token);
        return claims.getExpiration();
    }

    /**
     * Checks if a token has expired.
     * 
     * @param token the JWT token
     * @return true if the token has expired, false otherwise
     */
    public boolean isTokenExpired(String token) {
        try {
            Date expiration = getExpirationDateFromToken(token);
            return expiration.before(new Date());
        } catch (InvalidTokenException e) {
            // If we can't get expiration, consider it expired
            return true;
        }
    }

    /**
     * Validates if a token is still valid and can be used.
     * 
     * @param token the JWT token
     * @return true if the token is valid, false otherwise
     */
    public boolean isTokenValid(String token) {
        try {
            getClaimsFromToken(token);
            return !isTokenExpired(token);
        } catch (InvalidTokenException e) {
            logger.debug("Token validation failed: {}", e.getMessage());
            return false;
        }
    }

    /**
     * Checks if a token can be refreshed.
     * A token can be refreshed if it's not expired.
     * 
     * @param token the JWT token
     * @return true if the token can be refreshed, false otherwise
     */
    public boolean canTokenBeRefreshed(String token) {
        try {
            Date expiration = getExpirationDateFromToken(token);
            return expiration.after(Date.from(Instant.now()));
        } catch (InvalidTokenException e) {
            logger.debug("Token cannot be refreshed: {}", e.getMessage());
            return false;
        }
    }
}

