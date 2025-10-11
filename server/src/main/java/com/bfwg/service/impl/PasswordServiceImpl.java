package com.bfwg.service.impl;

import com.bfwg.model.User;
import com.bfwg.repository.UserRepository;
import com.bfwg.service.PasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

/**
 * Implementation of {@link PasswordService} for password management operations.
 * 
 * <p>This implementation follows Clean Code principles:</p>
 * <ul>
 *   <li>Single Responsibility: Focuses only on password operations</li>
 *   <li>Dependency Inversion: Depends on abstractions (PasswordEncoder interface)</li>
 *   <li>Clear method names that express intent</li>
 *   <li>Proper validation and error handling</li>
 * </ul>
 * 
 * @since 0.2.0
 */
@Service
public class PasswordServiceImpl implements PasswordService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    /**
     * Constructs a PasswordServiceImpl with required dependencies.
     * 
     * @param passwordEncoder the password encoder to use
     * @param userRepository the user repository for persistence
     */
    @Autowired
    public PasswordServiceImpl(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = Objects.requireNonNull(passwordEncoder, "PasswordEncoder must not be null");
        this.userRepository = Objects.requireNonNull(userRepository, "UserRepository must not be null");
    }

    @Override
    public String encodePassword(String rawPassword) {
        validateRawPassword(rawPassword);
        return passwordEncoder.encode(rawPassword);
    }

    @Override
    public boolean matches(String rawPassword, String encodedPassword) {
        if (rawPassword == null || encodedPassword == null) {
            return false;
        }
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }

    @Override
    @Transactional
    public void changePassword(User user, String oldPassword, String newPassword) {
        Objects.requireNonNull(user, "User must not be null");
        validateRawPassword(oldPassword);
        validateRawPassword(newPassword);

        if (!matches(oldPassword, user.getPassword())) {
            throw new BadCredentialsException("Old password is incorrect");
        }

        if (oldPassword.equals(newPassword)) {
            throw new IllegalArgumentException("New password must be different from old password");
        }

        String encodedNewPassword = encodePassword(newPassword);
        user.setPassword(encodedNewPassword);
        userRepository.save(user);
    }

    @Override
    public boolean isPasswordStrong(String password) {
        if (password == null || password.length() < 3) {
            return false;
        }
        
        // Additional password strength rules can be added here
        // For now, just checking minimum length
        return true;
    }

    /**
     * Validates a raw password for basic requirements.
     * 
     * @param rawPassword the password to validate
     * @throws IllegalArgumentException if password is invalid
     */
    private void validateRawPassword(String rawPassword) {
        if (rawPassword == null || rawPassword.trim().isEmpty()) {
            throw new IllegalArgumentException("Password must not be null or empty");
        }
        
        if (rawPassword.length() < 3) {
            throw new IllegalArgumentException("Password must be at least 3 characters long");
        }
    }
}

