package com.bfwg.rest;

import com.bfwg.model.PasswordChangeRequest;
import com.bfwg.model.User;
import com.bfwg.model.UserTokenState;
import com.bfwg.security.TokenHelper;
import com.bfwg.service.PasswordService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;
import java.util.Objects;

/**
 * REST controller for authentication operations.
 * 
 * <p>This controller handles token refresh and password change operations.
 * Follows Clean Code principles with:</p>
 * <ul>
 *   <li>Single Responsibility: Focuses only on authentication endpoints</li>
 *   <li>Proper use of DTOs instead of inner classes</li>
 *   <li>Dependency Inversion via constructor injection</li>
 *   <li>Clear, descriptive method names</li>
 * </ul>
 * 
 * @author fan.jin
 * @since 2017-05-10
 */
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);
    private static final String SUCCESS_MESSAGE = "success";

    private final TokenHelper tokenHelper;
    private final PasswordService passwordService;

    @Value("${jwt.expires_in}")
    private int expiresIn;

    @Value("${jwt.cookie}")
    private String tokenCookie;

    /**
     * Constructs the controller with required dependencies.
     * 
     * @param tokenHelper the token helper service
     * @param passwordService the password management service
     */
    @Autowired
    public AuthenticationController(TokenHelper tokenHelper, PasswordService passwordService) {
        this.tokenHelper = Objects.requireNonNull(tokenHelper, "TokenHelper must not be null");
        this.passwordService = Objects.requireNonNull(passwordService, "PasswordService must not be null");
    }

    /**
     * Refreshes an authentication token if it's still valid.
     * 
     * @param request the HTTP request containing the token
     * @param response the HTTP response to add the refreshed token cookie
     * @return the refreshed token state or empty state if refresh failed
     */
    @GetMapping("/refresh")
    public ResponseEntity<UserTokenState> refreshAuthenticationToken(
            HttpServletRequest request, 
            HttpServletResponse response) {

        String authToken = tokenHelper.getToken(request);
        
        if (authToken != null && tokenHelper.canTokenBeRefreshed(authToken)) {
            String refreshedToken = tokenHelper.refreshToken(authToken);
            
            addTokenCookie(response, refreshedToken);
            
            UserTokenState userTokenState = new UserTokenState(refreshedToken, expiresIn);
            logger.debug("Token refreshed successfully");
            return ResponseEntity.ok(userTokenState);
        } else {
            logger.debug("Token refresh failed - token invalid or expired");
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(new UserTokenState());
        }
    }

    /**
     * Changes the current user's password.
     * 
     * @param request the password change request containing old and new passwords
     * @return success message or error
     */
    @PostMapping("/changePassword")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<String, String>> changePassword(
            @Valid @RequestBody PasswordChangeRequest request) {
        
        try {
            User currentUser = getCurrentUser();
            
            if (!request.arePasswordsDifferent()) {
                logger.warn("Password change failed - new password same as old password for user: {}", 
                    currentUser.getUsername());
                return ResponseEntity.badRequest()
                    .body(Collections.singletonMap("error", "New password must be different"));
            }
            
            passwordService.changePassword(currentUser, request.getOldPassword(), request.getNewPassword());
            
            logger.info("Password changed successfully for user: {}", currentUser.getUsername());
            return ResponseEntity.ok(Collections.singletonMap("result", SUCCESS_MESSAGE));
            
        } catch (IllegalArgumentException | org.springframework.security.authentication.BadCredentialsException e) {
            logger.error("Password change failed: {}", e.getMessage());
            return ResponseEntity.badRequest()
                .body(Collections.singletonMap("error", e.getMessage()));
        }
    }

    /**
     * Adds a token cookie to the HTTP response.
     * 
     * @param response the HTTP response
     * @param token the token value
     */
    private void addTokenCookie(HttpServletResponse response, String token) {
        Cookie authCookie = new Cookie(tokenCookie, token);
        authCookie.setPath("/");
        authCookie.setHttpOnly(true);
        authCookie.setMaxAge(expiresIn);
        response.addCookie(authCookie);
    }

    /**
     * Gets the currently authenticated user from the security context.
     * 
     * @return the current user
     * @throws IllegalStateException if no user is authenticated
     */
    private User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof User)) {
            throw new IllegalStateException("No authenticated user found");
        }
        return (User) authentication.getPrincipal();
    }
}
