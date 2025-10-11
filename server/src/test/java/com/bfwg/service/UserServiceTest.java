package com.bfwg.service;

import com.bfwg.AbstractTest;
import com.bfwg.model.User;
import com.bfwg.model.UserRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Created by fan.jin on 2017-04-04.
 */
public class UserServiceTest extends AbstractTest {

    @Autowired
    public UserService userService;

    @Test
    public void testFindAllWithoutUser() {
        assertThrows(AccessDeniedException.class, () -> userService.findAll());
    }

    @Test
    public void testFindAllWithUser() {
        mockAuthenticatedUser(buildTestUser());
        assertThrows(AccessDeniedException.class, () -> userService.findAll());
    }

    @Test
    public void testFindAllWithAdmin() {
        mockAuthenticatedUser(buildTestAdmin());
        assertNotNull(userService.findAll());
        assertTrue(userService.findAll().size() >= 2);
    }

    @Test
    public void testFindByIdWithoutUser() {
        assertThrows(AccessDeniedException.class, () -> userService.findById(1L));
    }

    @Test
    public void testFindByIdWithUser() {
        mockAuthenticatedUser(buildTestUser());
        assertThrows(AccessDeniedException.class, () -> userService.findById(1L));
    }

    @Test
    public void testFindByIdWithAdmin() {
        mockAuthenticatedUser(buildTestAdmin());
        assertNotNull(userService.findById(1L));
    }

    @Test
    public void testFindByIdWithNullId() {
        mockAuthenticatedUser(buildTestAdmin());
        assertThrows(IllegalArgumentException.class, () -> userService.findById(null));
    }

    @Test
    public void testFindByIdWithNonExistentId() {
        mockAuthenticatedUser(buildTestAdmin());
        assertThrows(UsernameNotFoundException.class, () -> userService.findById(999999L));
    }

    @Test
    public void testFindByUsernameWithoutUser() {
        assertNotNull(userService.findByUsername("user"));
    }

    @Test
    public void testFindByUsernameWithUser() {
        mockAuthenticatedUser(buildTestUser());
        assertNotNull(userService.findByUsername("user"));
    }

    @Test
    public void testFindByUsernameWithAdmin() {
        mockAuthenticatedUser(buildTestAdmin());
        assertNotNull(userService.findByUsername("user"));
    }

    @Test
    public void testFindByUsernameWithNull() {
        assertThrows(IllegalArgumentException.class, () -> userService.findByUsername(null));
    }

    @Test
    public void testFindByUsernameWithEmpty() {
        assertThrows(IllegalArgumentException.class, () -> userService.findByUsername(""));
    }

    @Test
    public void testFindByUsernameWithWhitespace() {
        assertThrows(IllegalArgumentException.class, () -> userService.findByUsername("   "));
    }

    @Test
    public void testFindByUsernameNonExistent() {
        User result = userService.findByUsername("nonexistentuser12345");
        assertNull(result);
    }

    @Test
    public void testSaveNewUser() {
        UserRequest request = new UserRequest();
        request.setUsername("newtestuser123");
        request.setPassword("testpassword");
        request.setFirstname("Test");
        request.setLastname("User");

        User savedUser = userService.save(request);
        assertNotNull(savedUser);
        assertEquals("newtestuser123", savedUser.getUsername());
        assertEquals("Test", savedUser.getFirstname());
        assertEquals("User", savedUser.getLastname());
        assertNotNull(savedUser.getAuthorities());
        assertTrue(savedUser.getAuthorities().size() > 0);
    }

    @Test
    public void testSaveUserWithNullRequest() {
        assertThrows(NullPointerException.class, () -> userService.save(null));
    }

    @Test
    public void testSaveUserWithNullUsername() {
        UserRequest request = new UserRequest();
        request.setUsername(null);
        request.setPassword("password");
        assertThrows(IllegalArgumentException.class, () -> userService.save(request));
    }

    @Test
    public void testSaveUserWithEmptyUsername() {
        UserRequest request = new UserRequest();
        request.setUsername("");
        request.setPassword("password");
        assertThrows(IllegalArgumentException.class, () -> userService.save(request));
    }

    @Test
    public void testSaveUserWithWhitespaceUsername() {
        UserRequest request = new UserRequest();
        request.setUsername("   ");
        request.setPassword("password");
        assertThrows(IllegalArgumentException.class, () -> userService.save(request));
    }

    @Test
    public void testSaveUserWithNullPassword() {
        UserRequest request = new UserRequest();
        request.setUsername("testuser");
        request.setPassword(null);
        assertThrows(IllegalArgumentException.class, () -> userService.save(request));
    }

    @Test
    public void testSaveUserWithEmptyPassword() {
        UserRequest request = new UserRequest();
        request.setUsername("testuser");
        request.setPassword("");
        assertThrows(IllegalArgumentException.class, () -> userService.save(request));
    }

    @Test
    public void testSaveUserWithWhitespacePassword() {
        UserRequest request = new UserRequest();
        request.setUsername("testuser");
        request.setPassword("   ");
        assertThrows(IllegalArgumentException.class, () -> userService.save(request));
    }

    @Test
    public void testSaveUserWithExistingUsername() {
        UserRequest request = new UserRequest();
        request.setUsername("user"); // existing user
        request.setPassword("password");
        assertThrows(IllegalArgumentException.class, () -> userService.save(request));
    }

    @Test
    public void testSaveUserWithAllFields() {
        UserRequest request = new UserRequest();
        request.setUsername("completeuser123");
        request.setPassword("testpassword");
        request.setFirstname("Complete");
        request.setLastname("Testuser");

        User savedUser = userService.save(request);
        assertNotNull(savedUser);
        assertEquals("completeuser123", savedUser.getUsername());
        assertEquals("Complete", savedUser.getFirstname());
        assertEquals("Testuser", savedUser.getLastname());
        assertNotNull(savedUser.getPassword());
        assertFalse(savedUser.getPassword().isEmpty());
    }

    @Test
    public void testResetCredentials() {
        // This method resets all user passwords
        // Just verify it completes without exception
        assertDoesNotThrow(() -> userService.resetCredentials());
        
        // Verify users still exist after reset
        mockAuthenticatedUser(buildTestAdmin());
        assertNotNull(userService.findAll());
        assertTrue(userService.findAll().size() >= 2);
    }

}
