package com.bfwg.rest;

import com.bfwg.model.UserTokenState;
import com.bfwg.security.TokenHelper;
import com.bfwg.service.PasswordService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class AuthenticationControllerTest {

    @Mock
    private TokenHelper tokenHelper;

    @Mock
    private PasswordService passwordService;

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    private AuthenticationController authenticationController;

    @BeforeEach
    void setUp() {
        authenticationController = new AuthenticationController(tokenHelper, passwordService);
        ReflectionTestUtils.setField(authenticationController, "expiresIn", 3600);
        ReflectionTestUtils.setField(authenticationController, "tokenCookie", "AUTH-TOKEN");
    }

    @Test
    public void testRefreshAuthenticationToken_Success() {
        String token = "valid-token";
        String refreshedToken = "refreshed-token";

        when(tokenHelper.getToken(request)).thenReturn(token);
        when(tokenHelper.canTokenBeRefreshed(token)).thenReturn(true);
        when(tokenHelper.refreshToken(token)).thenReturn(refreshedToken);

        ResponseEntity<?> response = authenticationController.refreshAuthenticationToken(request, this.response);

        assertNotNull(response);
        assertEquals(200, response.getStatusCodeValue());
        assertTrue(response.getBody() instanceof UserTokenState);
        verify(this.response).addCookie(any(Cookie.class));
    }

    @Test
    public void testRefreshAuthenticationToken_CannotRefresh() {
        String token = "expired-token";

        when(tokenHelper.getToken(request)).thenReturn(token);
        when(tokenHelper.canTokenBeRefreshed(token)).thenReturn(false);

        ResponseEntity<?> response = authenticationController.refreshAuthenticationToken(request, this.response);

        assertNotNull(response);
        assertEquals(202, response.getStatusCodeValue());
    }

    @Test
    public void testRefreshAuthenticationToken_NoToken() {
        when(tokenHelper.getToken(request)).thenReturn(null);

        ResponseEntity<?> response = authenticationController.refreshAuthenticationToken(request, this.response);

        assertNotNull(response);
        assertEquals(202, response.getStatusCodeValue());
    }
}

