package com.bfwg.security.auth;

import com.bfwg.model.Authority;
import com.bfwg.model.User;
import com.bfwg.model.UserRoleName;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class TokenBasedAuthenticationTest {

    private User user;
    private TokenBasedAuthentication authentication;

    @BeforeEach
    public void setUp() {
        Authority authority = new Authority(UserRoleName.ROLE_USER);
        List<Authority> authorities = new ArrayList<>();
        authorities.add(authority);
        
        user = User.builder()
                .username("testuser")
                .password("encoded")
                .authorities(authorities)
                .build();

        authentication = new TokenBasedAuthentication(user);
    }

    @Test
    public void testGetAuthorities() {
        assertNotNull(authentication.getAuthorities());
        assertEquals(1, authentication.getAuthorities().size());
    }

    @Test
    public void testGetPrincipal() {
        assertEquals(user, authentication.getPrincipal());
    }

    @Test
    public void testIsAuthenticated() {
        assertTrue(authentication.isAuthenticated());
    }

    @Test
    public void testGetToken() {
        String token = "test-token";
        authentication.setToken(token);
        assertEquals(token, authentication.getToken());
    }

    @Test
    public void testGetName() {
        assertEquals("testuser", authentication.getName());
    }
}

