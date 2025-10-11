package com.bfwg.service;

import com.bfwg.model.User;
import com.bfwg.repository.UserRepository;
import com.bfwg.service.impl.PasswordServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

/**
 * Comprehensive unit tests for PasswordService.
 * Tests all password-related operations including encoding, validation, and changing.
 */
@ExtendWith(MockitoExtension.class)
class PasswordServiceTest {

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private UserRepository userRepository;

    private PasswordService passwordService;

    @BeforeEach
    void setUp() {
        passwordService = new PasswordServiceImpl(passwordEncoder, userRepository);
    }

    @Test
    void encodePassword_WithValidPassword_ShouldReturnEncodedPassword() {
        // Given
        String rawPassword = "password123";
        String encodedPassword = "$2a$10$encoded";
        when(passwordEncoder.encode(rawPassword)).thenReturn(encodedPassword);

        // When
        String result = passwordService.encodePassword(rawPassword);

        // Then
        assertEquals(encodedPassword, result);
        verify(passwordEncoder).encode(rawPassword);
    }

    @Test
    void encodePassword_WithNullPassword_ShouldThrowException() {
        // When/Then
        assertThrows(IllegalArgumentException.class, () -> 
            passwordService.encodePassword(null));
    }

    @Test
    void encodePassword_WithEmptyPassword_ShouldThrowException() {
        // When/Then
        assertThrows(IllegalArgumentException.class, () -> 
            passwordService.encodePassword(""));
    }

    @Test
    void encodePassword_WithShortPassword_ShouldThrowException() {
        // When/Then
        assertThrows(IllegalArgumentException.class, () -> 
            passwordService.encodePassword("ab"));
    }

    @Test
    void matches_WithMatchingPasswords_ShouldReturnTrue() {
        // Given
        String rawPassword = "password123";
        String encodedPassword = "$2a$10$encoded";
        when(passwordEncoder.matches(rawPassword, encodedPassword)).thenReturn(true);

        // When
        boolean result = passwordService.matches(rawPassword, encodedPassword);

        // Then
        assertTrue(result);
        verify(passwordEncoder).matches(rawPassword, encodedPassword);
    }

    @Test
    void matches_WithNonMatchingPasswords_ShouldReturnFalse() {
        // Given
        String rawPassword = "password123";
        String encodedPassword = "$2a$10$encoded";
        when(passwordEncoder.matches(rawPassword, encodedPassword)).thenReturn(false);

        // When
        boolean result = passwordService.matches(rawPassword, encodedPassword);

        // Then
        assertFalse(result);
    }

    @Test
    void matches_WithNullRawPassword_ShouldReturnFalse() {
        // When
        boolean result = passwordService.matches(null, "$2a$10$encoded");

        // Then
        assertFalse(result);
        verify(passwordEncoder, never()).matches(anyString(), anyString());
    }

    @Test
    void changePassword_WithValidPasswords_ShouldSucceed() {
        // Given
        User user = User.builder()
                .username("testuser")
                .password("$2a$10$oldencoded")
                .build();
        String oldPassword = "oldpassword";
        String newPassword = "newpassword";
        String encodedNewPassword = "$2a$10$newencoded";

        when(passwordEncoder.matches(oldPassword, user.getPassword())).thenReturn(true);
        when(passwordEncoder.encode(newPassword)).thenReturn(encodedNewPassword);
        when(userRepository.save(any(User.class))).thenReturn(user);

        // When
        passwordService.changePassword(user, oldPassword, newPassword);

        // Then
        verify(passwordEncoder).matches(oldPassword, "$2a$10$oldencoded");
        verify(passwordEncoder).encode(newPassword);
        verify(userRepository).save(user);
    }

    @Test
    void changePassword_WithIncorrectOldPassword_ShouldThrowException() {
        // Given
        User user = User.builder()
                .username("testuser")
                .password("$2a$10$oldencoded")
                .build();
        String oldPassword = "wrongpassword";
        String newPassword = "newpassword";

        when(passwordEncoder.matches(oldPassword, user.getPassword())).thenReturn(false);

        // When/Then
        assertThrows(BadCredentialsException.class, () ->
            passwordService.changePassword(user, oldPassword, newPassword));
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void changePassword_WithSamePasswords_ShouldThrowException() {
        // Given
        User user = User.builder()
                .username("testuser")
                .password("$2a$10$encoded")
                .build();
        String password = "samepassword";

        when(passwordEncoder.matches(password, user.getPassword())).thenReturn(true);

        // When/Then
        assertThrows(IllegalArgumentException.class, () ->
            passwordService.changePassword(user, password, password));
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void changePassword_WithNullUser_ShouldThrowException() {
        // When/Then
        assertThrows(NullPointerException.class, () ->
            passwordService.changePassword(null, "old", "new"));
    }

    @Test
    void isPasswordStrong_WithValidPassword_ShouldReturnTrue() {
        // When
        boolean result = passwordService.isPasswordStrong("password123");

        // Then
        assertTrue(result);
    }

    @Test
    void isPasswordStrong_WithShortPassword_ShouldReturnFalse() {
        // When
        boolean result = passwordService.isPasswordStrong("ab");

        // Then
        assertFalse(result);
    }

    @Test
    void isPasswordStrong_WithNullPassword_ShouldReturnFalse() {
        // When
        boolean result = passwordService.isPasswordStrong(null);

        // Then
        assertFalse(result);
    }
}

