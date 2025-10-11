package com.bfwg.security.token;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * Comprehensive unit tests for TokenExtractor.
 * Tests all token extraction operations from various sources.
 */
@ExtendWith(MockitoExtension.class)
class TokenExtractorTest {

    @Mock
    private HttpServletRequest request;

    private TokenExtractor tokenExtractor;
    private static final String AUTH_HEADER = "Authorization";
    private static final String AUTH_COOKIE = "AUTH-TOKEN";
    private static final String TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.test.token";

    @BeforeEach
    void setUp() {
        tokenExtractor = new TokenExtractor(AUTH_HEADER, AUTH_COOKIE);
    }

    @Test
    void extractToken_FromCookie_ShouldReturnToken() {
        // Given
        Cookie authCookie = new Cookie(AUTH_COOKIE, TEST_TOKEN);
        when(request.getCookies()).thenReturn(new Cookie[]{authCookie});

        // When
        String token = tokenExtractor.extractToken(request);

        // Then
        assertEquals(TEST_TOKEN, token);
    }

    @Test
    void extractToken_FromHeader_ShouldReturnToken() {
        // Given
        when(request.getCookies()).thenReturn(null);
        when(request.getHeader(AUTH_HEADER)).thenReturn("Bearer " + TEST_TOKEN);

        // When
        String token = tokenExtractor.extractToken(request);

        // Then
        assertEquals(TEST_TOKEN, token);
    }

    @Test
    void extractToken_PrefersCookieOverHeader_ShouldReturnCookieToken() {
        // Given
        String cookieToken = "cookie-token";
        String headerToken = "header-token";
        Cookie authCookie = new Cookie(AUTH_COOKIE, cookieToken);
        when(request.getCookies()).thenReturn(new Cookie[]{authCookie});
        when(request.getHeader(AUTH_HEADER)).thenReturn("Bearer " + headerToken);

        // When
        String token = tokenExtractor.extractToken(request);

        // Then
        assertEquals(cookieToken, token);
        verify(request, never()).getHeader(AUTH_HEADER);
    }

    @Test
    void extractToken_WithNoToken_ShouldReturnNull() {
        // Given
        when(request.getCookies()).thenReturn(null);
        when(request.getHeader(AUTH_HEADER)).thenReturn(null);

        // When
        String token = tokenExtractor.extractToken(request);

        // Then
        assertNull(token);
    }

    @Test
    void extractToken_WithNullRequest_ShouldThrowException() {
        // When/Then
        assertThrows(NullPointerException.class, () ->
            tokenExtractor.extractToken(null));
    }

    @Test
    void extractTokenFromCookie_WithValidCookie_ShouldReturnToken() {
        // Given
        Cookie authCookie = new Cookie(AUTH_COOKIE, TEST_TOKEN);
        when(request.getCookies()).thenReturn(new Cookie[]{authCookie});

        // When
        String token = tokenExtractor.extractTokenFromCookie(request);

        // Then
        assertEquals(TEST_TOKEN, token);
    }

    @Test
    void extractTokenFromCookie_WithNoCookies_ShouldReturnNull() {
        // Given
        when(request.getCookies()).thenReturn(null);

        // When
        String token = tokenExtractor.extractTokenFromCookie(request);

        // Then
        assertNull(token);
    }

    @Test
    void extractTokenFromCookie_WithEmptyCookies_ShouldReturnNull() {
        // Given
        when(request.getCookies()).thenReturn(new Cookie[]{});

        // When
        String token = tokenExtractor.extractTokenFromCookie(request);

        // Then
        assertNull(token);
    }

    @Test
    void extractTokenFromCookie_WithDifferentCookie_ShouldReturnNull() {
        // Given
        Cookie otherCookie = new Cookie("OTHER_COOKIE", "value");
        when(request.getCookies()).thenReturn(new Cookie[]{otherCookie});

        // When
        String token = tokenExtractor.extractTokenFromCookie(request);

        // Then
        assertNull(token);
    }

    @Test
    void extractTokenFromHeader_WithValidHeader_ShouldReturnToken() {
        // Given
        when(request.getHeader(AUTH_HEADER)).thenReturn("Bearer " + TEST_TOKEN);

        // When
        String token = tokenExtractor.extractTokenFromHeader(request);

        // Then
        assertEquals(TEST_TOKEN, token);
    }

    @Test
    void extractTokenFromHeader_WithNullHeader_ShouldReturnNull() {
        // Given
        when(request.getHeader(AUTH_HEADER)).thenReturn(null);

        // When
        String token = tokenExtractor.extractTokenFromHeader(request);

        // Then
        assertNull(token);
    }

    @Test
    void extractTokenFromHeader_WithEmptyHeader_ShouldReturnNull() {
        // Given
        when(request.getHeader(AUTH_HEADER)).thenReturn("");

        // When
        String token = tokenExtractor.extractTokenFromHeader(request);

        // Then
        assertNull(token);
    }

    @Test
    void extractTokenFromHeader_WithoutBearerPrefix_ShouldReturnNull() {
        // Given
        when(request.getHeader(AUTH_HEADER)).thenReturn(TEST_TOKEN);

        // When
        String token = tokenExtractor.extractTokenFromHeader(request);

        // Then
        assertNull(token);
    }

    @Test
    void extractTokenFromHeader_WithExtraSpaces_ShouldTrimToken() {
        // Given
        when(request.getHeader(AUTH_HEADER)).thenReturn("Bearer " + TEST_TOKEN + "  ");

        // When
        String token = tokenExtractor.extractTokenFromHeader(request);

        // Then
        assertEquals(TEST_TOKEN, token);
    }

    @Test
    void findCookie_WithValidCookieName_ShouldReturnCookie() {
        // Given
        Cookie authCookie = new Cookie(AUTH_COOKIE, TEST_TOKEN);
        Cookie otherCookie = new Cookie("OTHER", "value");
        when(request.getCookies()).thenReturn(new Cookie[]{otherCookie, authCookie});

        // When
        Cookie found = tokenExtractor.findCookie(request, AUTH_COOKIE);

        // Then
        assertNotNull(found);
        assertEquals(AUTH_COOKIE, found.getName());
        assertEquals(TEST_TOKEN, found.getValue());
    }

    @Test
    void findCookie_WithNoCookies_ShouldReturnNull() {
        // Given
        when(request.getCookies()).thenReturn(null);

        // When
        Cookie found = tokenExtractor.findCookie(request, AUTH_COOKIE);

        // Then
        assertNull(found);
    }

    @Test
    void findCookie_WithNonExistentCookie_ShouldReturnNull() {
        // Given
        Cookie otherCookie = new Cookie("OTHER", "value");
        when(request.getCookies()).thenReturn(new Cookie[]{otherCookie});

        // When
        Cookie found = tokenExtractor.findCookie(request, AUTH_COOKIE);

        // Then
        assertNull(found);
    }

    @Test
    void constructor_WithNullAuthHeader_ShouldThrowException() {
        // When/Then
        assertThrows(NullPointerException.class, () ->
            new TokenExtractor(null, AUTH_COOKIE));
    }

    @Test
    void constructor_WithNullAuthCookie_ShouldThrowException() {
        // When/Then
        assertThrows(NullPointerException.class, () ->
            new TokenExtractor(AUTH_HEADER, null));
    }
}

