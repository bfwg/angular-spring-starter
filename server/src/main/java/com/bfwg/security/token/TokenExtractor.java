package com.bfwg.security.token;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Objects;
import java.util.Optional;

/**
 * Service responsible for extracting JWT tokens from HTTP requests.
 * 
 * <p>This service follows the Single Responsibility Principle by focusing
 * solely on token extraction operations from various sources.</p>
 * 
 * <p>Key features:</p>
 * <ul>
 *   <li>Extracts tokens from cookies</li>
 *   <li>Extracts tokens from Authorization header</li>
 *   <li>Supports Bearer token format</li>
 *   <li>Configurable header and cookie names</li>
 * </ul>
 * 
 * @since 0.2.0
 */
@Component
public class TokenExtractor {

    private static final Logger logger = LoggerFactory.getLogger(TokenExtractor.class);
    private static final String BEARER_PREFIX = "Bearer ";
    private static final int BEARER_PREFIX_LENGTH = 7;

    private final String authHeader;
    private final String authCookie;

    /**
     * Constructs a TokenExtractor with configuration values.
     * 
     * @param authHeader the name of the authorization header
     * @param authCookie the name of the authentication cookie
     */
    public TokenExtractor(
            @Value("${jwt.header}") String authHeader,
            @Value("${jwt.cookie}") String authCookie) {
        this.authHeader = Objects.requireNonNull(authHeader, "Auth header name must not be null");
        this.authCookie = Objects.requireNonNull(authCookie, "Auth cookie name must not be null");
    }

    /**
     * Extracts a JWT token from an HTTP request.
     * 
     * <p>This method attempts to extract the token from multiple sources in order:</p>
     * <ol>
     *   <li>Cookie storage</li>
     *   <li>Authorization header (Bearer token)</li>
     * </ol>
     * 
     * @param request the HTTP request
     * @return the extracted token, or null if not found
     */
    public String extractToken(HttpServletRequest request) {
        Objects.requireNonNull(request, "Request must not be null");

        // Try to get token from cookie first
        String tokenFromCookie = extractTokenFromCookie(request);
        if (tokenFromCookie != null) {
            logger.debug("Token extracted from cookie");
            return tokenFromCookie;
        }

        // Try to get token from Authorization header
        String tokenFromHeader = extractTokenFromHeader(request);
        if (tokenFromHeader != null) {
            logger.debug("Token extracted from Authorization header");
            return tokenFromHeader;
        }

        logger.debug("No token found in request");
        return null;
    }

    /**
     * Extracts a JWT token from the cookie storage.
     * 
     * @param request the HTTP request
     * @return the extracted token, or null if not found
     */
    public String extractTokenFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null || cookies.length == 0) {
            return null;
        }

        Optional<Cookie> authCookieOpt = Arrays.stream(cookies)
                .filter(cookie -> authCookie.equals(cookie.getName()))
                .findFirst();

        return authCookieOpt.map(Cookie::getValue).orElse(null);
    }

    /**
     * Extracts a JWT token from the Authorization header.
     * Expects format: "Bearer {token}"
     * 
     * @param request the HTTP request
     * @return the extracted token, or null if not found
     */
    public String extractTokenFromHeader(HttpServletRequest request) {
        String headerValue = request.getHeader(authHeader);
        
        if (headerValue == null || headerValue.trim().isEmpty()) {
            return null;
        }

        if (!headerValue.startsWith(BEARER_PREFIX)) {
            logger.debug("Authorization header does not start with 'Bearer ' prefix");
            return null;
        }

        return headerValue.substring(BEARER_PREFIX_LENGTH).trim();
    }

    /**
     * Finds a specific cookie by name in the request.
     * 
     * @param request the HTTP request
     * @param cookieName the name of the cookie to find
     * @return the cookie if found, null otherwise
     */
    public Cookie findCookie(HttpServletRequest request, String cookieName) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null || cookies.length == 0) {
            return null;
        }

        return Arrays.stream(cookies)
                .filter(cookie -> cookieName.equals(cookie.getName()))
                .findFirst()
                .orElse(null);
    }
}

