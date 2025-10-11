package com.bfwg.rest;

import com.bfwg.model.Authority;
import com.bfwg.model.PasswordChangeRequest;
import com.bfwg.model.User;
import com.bfwg.model.UserRoleName;
import com.bfwg.model.UserTokenState;
import com.bfwg.security.TokenHelper;
import com.bfwg.security.auth.TokenBasedAuthentication;
import com.bfwg.service.PasswordService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Collections;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
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
        SecurityContextHolder.clearContext();
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
        UserTokenState tokenState = (UserTokenState) response.getBody();
        assertEquals(refreshedToken, tokenState.getAccessToken());
        assertEquals(3600, tokenState.getExpiresIn());
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
        verify(this.response, never()).addCookie(any(Cookie.class));
    }

    @Test
    public void testRefreshAuthenticationToken_NoToken() {
        when(tokenHelper.getToken(request)).thenReturn(null);

        ResponseEntity<?> response = authenticationController.refreshAuthenticationToken(request, this.response);

        assertNotNull(response);
        assertEquals(202, response.getStatusCodeValue());
        verify(this.response, never()).addCookie(any(Cookie.class));
    }

    @Test
    public void testChangePassword_Success() {
        User user = createTestUser();
        mockAuthenticatedUser(user);

        PasswordChangeRequest changeRequest = new PasswordChangeRequest();
        changeRequest.setOldPassword("oldPassword123");
        changeRequest.setNewPassword("newPassword123");

        doNothing().when(passwordService).changePassword(eq(user), eq("oldPassword123"), eq("newPassword123"));

        ResponseEntity<Map<String, String>> response = authenticationController.changePassword(changeRequest);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("success", response.getBody().get("result"));
        verify(passwordService).changePassword(eq(user), eq("oldPassword123"), eq("newPassword123"));
    }

    @Test
    public void testChangePassword_SamePassword() {
        User user = createTestUser();
        mockAuthenticatedUser(user);

        PasswordChangeRequest changeRequest = new PasswordChangeRequest();
        changeRequest.setOldPassword("password123");
        changeRequest.setNewPassword("password123");

        ResponseEntity<Map<String, String>> response = authenticationController.changePassword(changeRequest);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("New password must be different", response.getBody().get("error"));
        verify(passwordService, never()).changePassword(any(), any(), any());
    }

    @Test
    public void testChangePassword_WrongOldPassword() {
        User user = createTestUser();
        mockAuthenticatedUser(user);

        PasswordChangeRequest changeRequest = new PasswordChangeRequest();
        changeRequest.setOldPassword("wrongOldPassword");
        changeRequest.setNewPassword("newPassword123");

        doThrow(new BadCredentialsException("Old password is incorrect"))
            .when(passwordService).changePassword(eq(user), eq("wrongOldPassword"), eq("newPassword123"));

        ResponseEntity<Map<String, String>> response = authenticationController.changePassword(changeRequest);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("Old password is incorrect", response.getBody().get("error"));
    }

    @Test
    public void testChangePassword_InvalidNewPassword() {
        User user = createTestUser();
        mockAuthenticatedUser(user);

        PasswordChangeRequest changeRequest = new PasswordChangeRequest();
        changeRequest.setOldPassword("oldPassword123");
        changeRequest.setNewPassword("weak");

        doThrow(new IllegalArgumentException("Password must be at least 6 characters"))
            .when(passwordService).changePassword(eq(user), eq("oldPassword123"), eq("weak"));

        ResponseEntity<Map<String, String>> response = authenticationController.changePassword(changeRequest);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("Password must be at least 6 characters", response.getBody().get("error"));
    }

    @Test
    public void testConstructorWithNullTokenHelper() {
        assertThrows(NullPointerException.class, () -> 
            new AuthenticationController(null, passwordService)
        );
    }

    @Test
    public void testConstructorWithNullPasswordService() {
        assertThrows(NullPointerException.class, () -> 
            new AuthenticationController(tokenHelper, null)
        );
    }

    private User createTestUser() {
        Authority authority = new Authority(UserRoleName.ROLE_USER);

        return User.builder()
            .username("testuser")
            .password("encodedPassword")
            .firstname("Test")
            .lastname("User")
            .authorities(Collections.singletonList(authority))
            .build();
    }

    private void mockAuthenticatedUser(User user) {
        TokenBasedAuthentication authentication = new TokenBasedAuthentication(user);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}

