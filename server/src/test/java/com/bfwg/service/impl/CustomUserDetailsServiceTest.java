package com.bfwg.service.impl;

import com.bfwg.model.User;
import com.bfwg.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CustomUserDetailsServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private CustomUserDetailsService customUserDetailsService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testLoadUserByUsername_Success() {
        User user = User.builder()
                .username("testuser")
                .password("encoded_password")
                .build();

        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(user));

        User result = customUserDetailsService.loadUserByUsername("testuser");

        assertNotNull(result);
        assertEquals("testuser", result.getUsername());
    }

    @Test
    public void testLoadUserByUsername_UserNotFound() {
        when(userRepository.findByUsername("nonexistent")).thenReturn(Optional.empty());

        assertThrows(UsernameNotFoundException.class, () ->
                customUserDetailsService.loadUserByUsername("nonexistent"));
    }

    @Test
    public void testSave() {
        User user = User.builder()
                .username("newuser")
                .password("encoded_password")
                .build();

        when(userRepository.save(user)).thenReturn(user);

        customUserDetailsService.save(user);

        verify(userRepository, times(1)).save(user);
    }
}

