package com.bfwg.rest;

import com.bfwg.exception.ResourceConflictException;
import com.bfwg.model.User;
import com.bfwg.model.UserRequest;
import com.bfwg.service.UserService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * REST controller for user management operations.
 * 
 * <p>This controller follows Clean Code principles:</p>
 * <ul>
 *   <li>Single Responsibility: Handles only user-related HTTP endpoints</li>
 *   <li>Proper validation using @Valid annotation</li>
 *   <li>Clear, RESTful endpoint naming</li>
 *   <li>Comprehensive error handling and logging</li>
 *   <li>Proper use of HTTP status codes</li>
 * </ul>
 * 
 * @author fan.jin
 * @since 2016-10-15
 */
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private static final String SUCCESS_MESSAGE = "success";

    private final UserService userService;

    /**
     * Constructs the controller with required dependencies.
     * 
     * @param userService the user service
     */
    @Autowired
    public UserController(UserService userService) {
        this.userService = Objects.requireNonNull(userService, "UserService must not be null");
    }

    /**
     * Retrieves a user by their ID.
     * 
     * @param userId the user ID
     * @return the user
     */
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> loadById(@PathVariable Long userId) {
        logger.debug("Loading user with ID: {}", userId);
        User user = userService.findById(userId);
        return ResponseEntity.ok(user);
    }

    /**
     * Retrieves all users.
     * 
     * @return list of all users
     */
    @GetMapping("/user/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> loadAll() {
        logger.debug("Loading all users");
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    /**
     * Resets all user credentials to default password.
     * This is intended for demo/testing purposes only.
     * 
     * @return success message
     */
    @GetMapping("/user/reset-credentials")
    public ResponseEntity<Map<String, String>> resetCredentials() {
        logger.warn("Resetting user credentials - this should only be used for demo purposes");
        userService.resetCredentials();
        return ResponseEntity.ok(Collections.singletonMap("result", SUCCESS_MESSAGE));
    }

    /**
     * Registers a new user.
     * 
     * @param userRequest the user registration request
     * @param ucBuilder the URI components builder
     * @return the created user with location header
     */
    @PostMapping("/signup")
    public ResponseEntity<User> addUser(
            @Valid @RequestBody UserRequest userRequest,
            UriComponentsBuilder ucBuilder) {

        logger.info("Registration request for username: {}", userRequest.getUsername());

        User existingUser = userService.findByUsername(userRequest.getUsername());
        if (existingUser != null) {
            logger.warn("Username already exists: {}", userRequest.getUsername());
            throw new ResourceConflictException(userRequest.getId(), "Username already exists");
        }

        User user = userService.save(userRequest);
        
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/api/user/{userId}")
            .buildAndExpand(user.getId())
            .toUri());
        
        logger.info("Successfully created user: {}", user.getUsername());
        return new ResponseEntity<>(user, headers, HttpStatus.CREATED);
    }

    /**
     * Returns information about the currently authenticated user.
     * 
     * @return the current user
     */
    @GetMapping("/whoami")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<User> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        if (authentication == null || !(authentication.getPrincipal() instanceof User)) {
            logger.error("No authenticated user found in security context");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        
        User user = (User) authentication.getPrincipal();
        logger.debug("Current user: {}", user.getUsername());
        return ResponseEntity.ok(user);
    }
}
