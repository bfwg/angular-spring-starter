package com.bfwg.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class UserTokenStateTest {

    @Test
    public void testUserTokenStateConstructor() {
        String accessToken = "test-token";
        int expiresIn = 3600;

        UserTokenState tokenState = new UserTokenState(accessToken, expiresIn);

        assertEquals(accessToken, tokenState.getAccessToken());
        assertEquals(Long.valueOf(expiresIn), tokenState.getExpiresIn());
    }

    @Test
    public void testUserTokenStateDefaultConstructor() {
        UserTokenState tokenState = new UserTokenState();

        assertNull(tokenState.getAccessToken());
        assertNull(tokenState.getExpiresIn());
    }

    @Test
    public void testIsValid() {
        UserTokenState validToken = new UserTokenState("token", 3600);
        assertTrue(validToken.isValid());

        UserTokenState invalidToken = new UserTokenState();
        assertFalse(invalidToken.isValid());
    }

    @Test
    public void testEqualsAndHashCode() {
        UserTokenState token1 = new UserTokenState("token", 3600);
        UserTokenState token2 = new UserTokenState("token", 3600);
        assertEquals(token1, token2);
        assertEquals(token1.hashCode(), token2.hashCode());
    }
}

