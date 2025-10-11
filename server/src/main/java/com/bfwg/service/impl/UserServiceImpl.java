package com.bfwg.service.impl;

import com.bfwg.model.Authority;
import com.bfwg.model.User;
import com.bfwg.model.UserRequest;
import com.bfwg.model.UserRoleName;
import com.bfwg.repository.UserRepository;
import com.bfwg.service.AuthorityService;
import com.bfwg.service.PasswordService;
import com.bfwg.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * Implementation of {@link UserService} for user management operations.
 * 
 * <p>This service follows Clean Code principles:</p>
 * <ul>
 *   <li>Single Responsibility: Focuses on user management operations</li>
 *   <li>Dependency Inversion: Depends on abstractions via interfaces</li>
 *   <li>DRY: Reuses PasswordService instead of creating encoders</li>
 *   <li>Proper transaction management</li>
 *   <li>Comprehensive logging and error handling</li>
 * </ul>
 * 
 * @author fan.jin
 * @since 2016-10-15
 */
@Service
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
    private static final String DEFAULT_PASSWORD = "123";

    private final UserRepository userRepository;
    private final AuthorityService authorityService;
    private final PasswordService passwordService;

    /**
     * Constructs UserServiceImpl with required dependencies.
     * 
     * @param userRepository the user repository
     * @param authorityService the authority service
     * @param passwordService the password service
     */
    @Autowired
    public UserServiceImpl(
            UserRepository userRepository,
            AuthorityService authorityService,
            PasswordService passwordService) {
        this.userRepository = Objects.requireNonNull(userRepository, "UserRepository must not be null");
        this.authorityService = Objects.requireNonNull(authorityService, "AuthorityService must not be null");
        this.passwordService = Objects.requireNonNull(passwordService, "PasswordService must not be null");
    }

    /**
     * Resets all user passwords to the default password.
     * This is typically used for demo/testing purposes only.
     */
    @Transactional
    public void resetCredentials() {
        logger.warn("Resetting all user credentials to default password");
        
        List<User> users = userRepository.findAll();
        String encodedDefaultPassword = passwordService.encodePassword(DEFAULT_PASSWORD);
        
        users.forEach(user -> {
            user.setPassword(encodedDefaultPassword);
            logger.debug("Reset password for user: {}", user.getUsername());
        });
        
        userRepository.saveAll(users);
        logger.info("Successfully reset {} user credentials", users.size());
    }

    @Override
    public User findByUsername(String username) throws UsernameNotFoundException {
        if (username == null || username.trim().isEmpty()) {
            throw new IllegalArgumentException("Username must not be null or empty");
        }
        
        Optional<User> user = userRepository.findByUsername(username);
        
        if (user.isEmpty()) {
            logger.debug("User not found with username: {}", username);
        }
        
        return user.orElse(null);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public User findById(Long id) throws AccessDeniedException {
        if (id == null) {
            throw new IllegalArgumentException("User ID must not be null");
        }
        
        return userRepository.findById(id)
            .orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> findAll() throws AccessDeniedException {
        logger.debug("Fetching all users");
        List<User> users = userRepository.findAll();
        logger.debug("Found {} users", users.size());
        return users;
    }

    @Override
    @Transactional
    public User save(UserRequest userRequest) {
        Objects.requireNonNull(userRequest, "UserRequest must not be null");
        
        validateUserRequest(userRequest);
        
        // Check if username already exists
        if (userRepository.findByUsername(userRequest.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Username already exists: " + userRequest.getUsername());
        }
        
        User user = buildUserFromRequest(userRequest);
        User savedUser = userRepository.save(user);
        
        logger.info("Created new user: {}", savedUser.getUsername());
        return savedUser;
    }

    /**
     * Validates a user request for required fields.
     * 
     * @param userRequest the request to validate
     * @throws IllegalArgumentException if validation fails
     */
    private void validateUserRequest(UserRequest userRequest) {
        if (userRequest.getUsername() == null || userRequest.getUsername().trim().isEmpty()) {
            throw new IllegalArgumentException("Username is required");
        }
        
        if (userRequest.getPassword() == null || userRequest.getPassword().trim().isEmpty()) {
            throw new IllegalArgumentException("Password is required");
        }
    }

    /**
     * Builds a User entity from a UserRequest DTO.
     * 
     * @param userRequest the user request
     * @return the constructed user
     */
    private User buildUserFromRequest(UserRequest userRequest) {
        String encodedPassword = passwordService.encodePassword(userRequest.getPassword());
        List<Authority> authorities = authorityService.findByName(UserRoleName.ROLE_USER);
        
        return User.builder()
            .username(userRequest.getUsername())
            .password(encodedPassword)
            .firstname(userRequest.getFirstname())
            .lastname(userRequest.getLastname())
            .authorities(authorities)
            .build();
    }
}
