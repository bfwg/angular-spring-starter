package com.bfwg.security.auth;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AnonAuthenticationTest {

    private AnonAuthentication anonAuthentication;

    @BeforeEach
    public void setUp() {
        anonAuthentication = new AnonAuthentication();
    }

    @Test
    public void testGetAuthorities() {
        assertNotNull(anonAuthentication.getAuthorities());
        assertTrue(anonAuthentication.getAuthorities().isEmpty());
    }

    @Test
    public void testGetCredentials() {
        assertNull(anonAuthentication.getCredentials());
    }

    @Test
    public void testGetDetails() {
        assertNull(anonAuthentication.getDetails());
    }

    @Test
    public void testGetPrincipal() {
        assertNull(anonAuthentication.getPrincipal());
    }

    @Test
    public void testIsAuthenticated() {
        assertTrue(anonAuthentication.isAuthenticated());
    }

    @Test
    public void testGetName() {
        assertEquals("", anonAuthentication.getName());
    }
}

