package com.bfwg.security.auth;

import com.bfwg.security.TokenHelper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.io.IOException;
import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class TokenAuthenticationFilterTest {

    @Mock
    private TokenHelper tokenHelper;

    @Mock
    private UserDetailsService userDetailsService;

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    @Mock
    private FilterChain filterChain;

    @InjectMocks
    private TokenAuthenticationFilter tokenAuthenticationFilter;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        SecurityContextHolder.clearContext();
    }

    @Test
    public void testDoFilterInternalWithValidToken() throws ServletException, IOException {
        String token = "valid.jwt.token";
        String username = "testuser";

        when(tokenHelper.getToken(request)).thenReturn(token);
        when(tokenHelper.getUsernameFromToken(token)).thenReturn(username);

        UserDetails userDetails = new User(username, "password",
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));
        when(userDetailsService.loadUserByUsername(username)).thenReturn(userDetails);
        when(request.getRequestURI()).thenReturn("/api/user");

        tokenAuthenticationFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertTrue(SecurityContextHolder.getContext().getAuthentication() instanceof TokenBasedAuthentication);
    }

    @Test
    public void testDoFilterInternalWithNoToken() throws ServletException, IOException {
        when(tokenHelper.getToken(request)).thenReturn(null);
        when(request.getRequestURI()).thenReturn("/api/user");

        tokenAuthenticationFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertTrue(SecurityContextHolder.getContext().getAuthentication() instanceof AnonAuthentication);
    }

    @Test
    public void testDoFilterInternalWithInvalidToken() throws ServletException, IOException {
        String token = "invalid.token";

        when(tokenHelper.getToken(request)).thenReturn(token);
        when(tokenHelper.getUsernameFromToken(token)).thenThrow(new RuntimeException("Invalid token"));
        when(request.getRequestURI()).thenReturn("/api/user");

        tokenAuthenticationFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertTrue(SecurityContextHolder.getContext().getAuthentication() instanceof AnonAuthentication);
    }

    @Test
    public void testDoFilterInternalWithSkippedPath() throws ServletException, IOException {
        String token = "valid.jwt.token";

        when(tokenHelper.getToken(request)).thenReturn(token);
        when(request.getRequestURI()).thenReturn("/");

        tokenAuthenticationFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertTrue(SecurityContextHolder.getContext().getAuthentication() instanceof AnonAuthentication);
    }

    @Test
    public void testDoFilterInternalWithLoginPath() throws ServletException, IOException {
        String token = "valid.jwt.token";

        when(tokenHelper.getToken(request)).thenReturn(token);
        when(request.getRequestURI()).thenReturn("/auth/login");

        tokenAuthenticationFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertTrue(SecurityContextHolder.getContext().getAuthentication() instanceof AnonAuthentication);
    }

    @Test
    public void testDoFilterInternalWithHtmlPath() throws ServletException, IOException {
        String token = "valid.jwt.token";

        when(tokenHelper.getToken(request)).thenReturn(token);
        when(request.getRequestURI()).thenReturn("/index.html");

        tokenAuthenticationFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertTrue(SecurityContextHolder.getContext().getAuthentication() instanceof AnonAuthentication);
    }

    @Test
    public void testDoFilterInternalWithCssPath() throws ServletException, IOException {
        String token = "valid.jwt.token";

        when(tokenHelper.getToken(request)).thenReturn(token);
        when(request.getRequestURI()).thenReturn("/styles.css");

        tokenAuthenticationFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertTrue(SecurityContextHolder.getContext().getAuthentication() instanceof AnonAuthentication);
    }

    @Test
    public void testDoFilterInternalWithJsPath() throws ServletException, IOException {
        String token = "valid.jwt.token";

        when(tokenHelper.getToken(request)).thenReturn(token);
        when(request.getRequestURI()).thenReturn("/app.js");

        tokenAuthenticationFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNotNull(SecurityContextHolder.getContext().getAuthentication());
        assertTrue(SecurityContextHolder.getContext().getAuthentication() instanceof AnonAuthentication);
    }
}

