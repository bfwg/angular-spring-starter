package com.bfwg.rest;

import com.bfwg.exception.ResourceConflictException;
import com.bfwg.model.User;
import com.bfwg.model.UserRequest;
import com.bfwg.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testLoadById() {
        User user = User.builder()
                .username("testuser")
                .password("encoded")
                .build();

        when(userService.findById(1L)).thenReturn(user);

        ResponseEntity<User> response = userController.loadById(1L);

        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("testuser", response.getBody().getUsername());
    }

    @Test
    public void testLoadAll() {
        List<User> users = new ArrayList<>();
        User user1 = User.builder()
                .username("user1")
                .password("encoded")
                .build();
        users.add(user1);

        when(userService.findAll()).thenReturn(users);

        ResponseEntity<List<User>> response = userController.loadAll();

        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(1, response.getBody().size());
    }

    @Test
    public void testResetCredentials() {
        doNothing().when(userService).resetCredentials();

        ResponseEntity<Map<String, String>> response = userController.resetCredentials();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().containsKey("result"));
        assertEquals("success", response.getBody().get("result"));
    }

    @Test
    public void testAddUser_Success() {
        UserRequest userRequest = new UserRequest();
        userRequest.setUsername("newuser");

        User savedUser = User.builder()
                .username("newuser")
                .password("encoded")
                .build();

        when(userService.findByUsername("newuser")).thenReturn(null);
        when(userService.save(any(UserRequest.class))).thenReturn(savedUser);

        UriComponentsBuilder ucBuilder = UriComponentsBuilder.newInstance();
        ResponseEntity<?> response = userController.addUser(userRequest, ucBuilder);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertNotNull(response.getHeaders().getLocation());
    }

    @Test
    public void testAddUser_UsernameExists() {
        UserRequest userRequest = new UserRequest();
        userRequest.setUsername("existinguser");

        User existingUser = User.builder()
                .username("existinguser")
                .password("encoded")
                .build();

        when(userService.findByUsername("existinguser")).thenReturn(existingUser);

        UriComponentsBuilder ucBuilder = UriComponentsBuilder.newInstance();

        assertThrows(ResourceConflictException.class, () ->
                userController.addUser(userRequest, ucBuilder));
    }
}

