package com.bfwg.security.auth;

import com.bfwg.model.User;
import com.bfwg.security.TokenHelper;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.Authentication;
import org.springframework.test.util.ReflectionTestUtils;

import java.io.PrintWriter;
import java.io.StringWriter;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

public class AuthenticationSuccessHandlerTest {

    @Mock
    private TokenHelper tokenHelper;

    @Mock
    private ObjectMapper objectMapper;

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    @Mock
    private Authentication authentication;

    @InjectMocks
    private AuthenticationSuccessHandler authenticationSuccessHandler;

    @BeforeEach
    public void setUp() throws Exception {
        MockitoAnnotations.openMocks(this);
        ReflectionTestUtils.setField(authenticationSuccessHandler, "EXPIRES_IN", 3600);
        ReflectionTestUtils.setField(authenticationSuccessHandler, "TOKEN_COOKIE", "AUTH-TOKEN");
    }

    @Test
    public void testOnAuthenticationSuccess() throws Exception {
        User user = User.builder()
                .username("testuser")
                .password("encoded")
                .build();

        when(authentication.getPrincipal()).thenReturn(user);
        when(tokenHelper.generateToken("testuser")).thenReturn("test-token");
        when(objectMapper.writeValueAsString(any())).thenReturn("{\"token\":\"test-token\"}");

        StringWriter stringWriter = new StringWriter();
        PrintWriter writer = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(writer);

        authenticationSuccessHandler.onAuthenticationSuccess(request, response, authentication);

        verify(response).addCookie(any());
        verify(response).setContentType("application/json");
    }
}

