package com.bfwg.common;

import org.junit.jupiter.api.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for Constants utility class.
 * Ensures constants are properly defined and utility class cannot be instantiated.
 */
class ConstantsTest {

    @Test
    void constructor_ShouldThrowException() throws NoSuchMethodException {
        Constructor<Constants> constructor = Constants.class.getDeclaredConstructor();
        constructor.setAccessible(true);
        
        assertThrows(InvocationTargetException.class, constructor::newInstance);
    }

    @Test
    void securityConstants_ShouldBeProperlyDefined() {
        assertEquals("ROLE_", Constants.Security.ROLE_PREFIX);
        assertEquals("ROLE_USER", Constants.Security.ROLE_USER);
        assertEquals("ROLE_ADMIN", Constants.Security.ROLE_ADMIN);
        assertEquals("Bearer ", Constants.Security.BEARER_PREFIX);
        assertEquals(3, Constants.Security.MIN_PASSWORD_LENGTH);
        assertEquals(100, Constants.Security.MAX_PASSWORD_LENGTH);
        assertEquals("123", Constants.Security.DEFAULT_DEMO_PASSWORD);
    }

    @Test
    void apiConstants_ShouldBeProperlyDefined() {
        assertEquals("/api", Constants.Api.BASE_PATH);
        assertEquals("/api/login", Constants.Api.LOGIN_PATH);
        assertEquals("/api/signup", Constants.Api.SIGNUP_PATH);
        assertEquals("/api/logout", Constants.Api.LOGOUT_PATH);
        assertEquals("/api/refresh", Constants.Api.REFRESH_PATH);
        assertEquals("/api/changePassword", Constants.Api.CHANGE_PASSWORD_PATH);
        assertEquals("/api/whoami", Constants.Api.WHOAMI_PATH);
    }

    @Test
    void messageConstants_ShouldBeProperlyDefined() {
        assertEquals("success", Constants.Messages.SUCCESS);
        assertEquals("error", Constants.Messages.ERROR);
        assertEquals("result", Constants.Messages.RESULT);
        assertNotNull(Constants.Messages.USERNAME_REQUIRED);
        assertNotNull(Constants.Messages.PASSWORD_REQUIRED);
        assertNotNull(Constants.Messages.USERNAME_EXISTS);
    }

    @Test
    void validationConstants_ShouldBeProperlyDefined() {
        assertEquals(3, Constants.Validation.USERNAME_MIN_LENGTH);
        assertEquals(100, Constants.Validation.USERNAME_MAX_LENGTH);
        assertEquals(100, Constants.Validation.NAME_MAX_LENGTH);
        assertEquals(3, Constants.Validation.PASSWORD_MIN_LENGTH);
        assertEquals(100, Constants.Validation.PASSWORD_MAX_LENGTH);
    }

    @Test
    void databaseConstants_ShouldBeProperlyDefined() {
        assertEquals("USER", Constants.Database.TABLE_USER);
        assertEquals("AUTHORITY", Constants.Database.TABLE_AUTHORITY);
        assertEquals("user_authority", Constants.Database.TABLE_USER_AUTHORITY);
        assertEquals("id", Constants.Database.COLUMN_ID);
        assertEquals("username", Constants.Database.COLUMN_USERNAME);
    }
}

