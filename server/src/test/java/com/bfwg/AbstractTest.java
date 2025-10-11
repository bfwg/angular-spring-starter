package com.bfwg;

import com.bfwg.model.Authority;
import com.bfwg.model.User;
import com.bfwg.model.UserRoleName;
import com.bfwg.repository.UserRepository;
import com.bfwg.security.auth.AnonAuthentication;
import com.bfwg.security.auth.TokenBasedAuthentication;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by fan.jin on 2016-11-07.
 */
@SpringBootTest(classes = {Application.class})
public abstract class AbstractTest {

    @Autowired
    protected UserRepository userRepository;

    @Autowired
    protected ObjectMapper objectMapper;
    protected SecurityContext securityContext;

    @BeforeEach
    public final void beforeAbstractTest() {
        securityContext = Mockito.mock(SecurityContext.class);
        SecurityContextHolder.setContext(securityContext);
        Mockito.when(securityContext.getAuthentication()).thenReturn(new AnonAuthentication());
    }

    @AfterEach
    public final void afterAbstractTest() {
        SecurityContextHolder.clearContext();
    }

    protected void mockAuthenticatedUser(User user) {
        mockAuthentication(new TokenBasedAuthentication(user));
    }

    private void mockAuthentication(TokenBasedAuthentication auth) {
        auth.setAuthenticated(true);
        Mockito.when(securityContext.getAuthentication()).thenReturn(auth);
    }

    protected User buildTestAnonUser() {
        User user = User.builder()
                .username("user")
                .password("encoded_password")
                .build();
        return user;
    }

    protected User buildTestUser() {
        Authority userAuthority = new Authority(UserRoleName.ROLE_USER);
        List<Authority> userAuthorities = new ArrayList<>();
        userAuthorities.add(userAuthority);
        User user = User.builder()
                .username("user")
                .password("encoded_password")
                .authorities(userAuthorities)
                .build();
        return user;
    }


    protected User buildTestAdmin() {
        Authority userAuthority = new Authority(UserRoleName.ROLE_USER);
        Authority adminAuthority = new Authority(UserRoleName.ROLE_ADMIN);
        List<Authority> adminAuthorities = new ArrayList<>();
        adminAuthorities.add(userAuthority);
        adminAuthorities.add(adminAuthority);
        User admin = User.builder()
                .username("admin")
                .password("encoded_password")
                .authorities(adminAuthorities)
                .build();
        return admin;
    }


}
