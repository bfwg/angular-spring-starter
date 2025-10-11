package com.bfwg.config;

import com.bfwg.security.auth.*;
import com.bfwg.service.impl.CustomUserDetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.util.Objects;

/**
 * Spring Security configuration for JWT-based authentication.
 * 
 * <p>This configuration class follows Clean Code principles:</p>
 * <ul>
 *   <li>Single Responsibility: Focuses only on security configuration</li>
 *   <li>Dependency Inversion: Depends on abstractions via constructor injection</li>
 *   <li>Clear method names that express intent</li>
 *   <li>Proper separation of concerns (password logic moved to PasswordService)</li>
 * </ul>
 * 
 * @author fan.jin
 * @since 2016-10-19
 */
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

    private static final Logger logger = LoggerFactory.getLogger(WebSecurityConfig.class);

    private final CustomUserDetailsService jwtUserDetailsService;
    private final RestAuthenticationEntryPoint restAuthenticationEntryPoint;
    private final LogoutSuccess logoutSuccess;
    private final AuthenticationSuccessHandler authenticationSuccessHandler;
    private final AuthenticationFailureHandler authenticationFailureHandler;

    @Value("${jwt.cookie}")
    private String tokenCookie;

    /**
     * Constructs the security configuration with required dependencies.
     * 
     * @param jwtUserDetailsService the user details service
     * @param restAuthenticationEntryPoint the authentication entry point
     * @param logoutSuccess the logout success handler
     * @param authenticationSuccessHandler the authentication success handler
     * @param authenticationFailureHandler the authentication failure handler
     */
    @Autowired
    public WebSecurityConfig(
            CustomUserDetailsService jwtUserDetailsService,
            RestAuthenticationEntryPoint restAuthenticationEntryPoint,
            LogoutSuccess logoutSuccess,
            AuthenticationSuccessHandler authenticationSuccessHandler,
            AuthenticationFailureHandler authenticationFailureHandler) {
        this.jwtUserDetailsService = Objects.requireNonNull(jwtUserDetailsService, "UserDetailsService must not be null");
        this.restAuthenticationEntryPoint = Objects.requireNonNull(restAuthenticationEntryPoint, "EntryPoint must not be null");
        this.logoutSuccess = Objects.requireNonNull(logoutSuccess, "LogoutSuccess must not be null");
        this.authenticationSuccessHandler = Objects.requireNonNull(authenticationSuccessHandler, "AuthenticationSuccessHandler must not be null");
        this.authenticationFailureHandler = Objects.requireNonNull(authenticationFailureHandler, "AuthenticationFailureHandler must not be null");
    }

    /**
     * Creates the JWT authentication filter bean.
     * 
     * @return the token authentication filter
     */
    @Bean
    public TokenAuthenticationFilter jwtAuthenticationTokenFilter() {
        return new TokenAuthenticationFilter();
    }

    /**
     * Exposes the authentication manager as a bean.
     * 
     * @param authConfig the authentication configuration
     * @return the authentication manager
     * @throws Exception if authentication manager cannot be created
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    /**
     * Configures the DAO authentication provider.
     * 
     * @return the configured authentication provider
     */
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(jwtUserDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    /**
     * Creates the password encoder bean.
     * 
     * @return the BCrypt password encoder
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Configures the security filter chain.
     * 
     * @param http the HTTP security configuration
     * @return the configured security filter chain
     * @throws Exception if configuration fails
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .ignoringRequestMatchers("/api/login", "/api/signup")
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .exceptionHandling(exception -> exception
                .authenticationEntryPoint(restAuthenticationEntryPoint)
            )
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthenticationTokenFilter(), BasicAuthenticationFilter.class)
            .formLogin(form -> form
                .loginPage("/api/login")
                .successHandler(authenticationSuccessHandler)
                .failureHandler(authenticationFailureHandler)
            )
            .logout(logout -> logout
                .logoutRequestMatcher(new AntPathRequestMatcher("/api/logout"))
                .logoutSuccessHandler(logoutSuccess)
                .deleteCookies(tokenCookie)
            );

        logger.info("Security filter chain configured successfully");
        return http.build();
    }
}
