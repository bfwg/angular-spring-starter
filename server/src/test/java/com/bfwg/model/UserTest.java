package com.bfwg.model;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

    @Test
    public void testUserBuilder() {
        User user = User.builder()
                .username("testuser")
                .password("password")
                .firstname("Test")
                .lastname("User")
                .build();

        assertEquals("testuser", user.getUsername());
        assertEquals("password", user.getPassword());
        assertEquals("Test", user.getFirstname());
        assertEquals("User", user.getLastname());
    }

    @Test
    public void testUserAuthorities() {
        Authority authority = new Authority(UserRoleName.ROLE_USER);
        List<Authority> authorities = new ArrayList<>();
        authorities.add(authority);

        User user = User.builder()
                .username("testuser")
                .password("password")
                .authorities(authorities)
                .build();

        assertNotNull(user.getAuthorities());
        assertEquals(1, user.getAuthorities().size());
    }

    @Test
    public void testUserDetailsImplementation() {
        User user = User.builder()
                .username("testuser")
                .password("password")
                .build();

        assertTrue(user.isAccountNonExpired());
        assertTrue(user.isAccountNonLocked());
        assertTrue(user.isCredentialsNonExpired());
        assertTrue(user.isEnabled());
    }

    @Test
    public void testGetFullName() {
        User user1 = User.builder()
                .username("user1")
                .password("pass")
                .firstname("John")
                .lastname("Doe")
                .build();
        assertEquals("John Doe", user1.getFullName());

        User user2 = User.builder()
                .username("user2")
                .password("pass")
                .build();
        assertEquals("user2", user2.getFullName());
    }

    @Test
    public void testEquals() {
        User user1 = User.builder().username("test").password("pass").build();
        User user2 = User.builder().username("test").password("pass").build();
        assertEquals(user1, user2);
    }

    @Test
    public void testHashCode() {
        User user1 = User.builder().username("test").password("pass").build();
        User user2 = User.builder().username("test").password("pass").build();
        assertEquals(user1.hashCode(), user2.hashCode());
    }
}

