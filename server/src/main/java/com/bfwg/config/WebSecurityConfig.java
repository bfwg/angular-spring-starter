package com.bfwg.config;

import com.bfwg.model.User;
import com.bfwg.security.auth.*;
import com.bfwg.service.impl.CustomUserDetailsService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**
 * Created by fan.jin on 2016-10-19.
 */

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  protected final Log LOGGER = LogFactory.getLog(getClass());

  private final CustomUserDetailsService jwtUserDetailsService;
  private final RestAuthenticationEntryPoint restAuthenticationEntryPoint;
  private final LogoutSuccess logoutSuccess;
  private final AuthenticationSuccessHandler authenticationSuccessHandler;
  private final AuthenticationFailureHandler authenticationFailureHandler;
  @Value("${jwt.cookie}")
  private String TOKEN_COOKIE;

  @Autowired
  public WebSecurityConfig(CustomUserDetailsService jwtUserDetailsService, RestAuthenticationEntryPoint restAuthenticationEntryPoint, LogoutSuccess logoutSuccess, AuthenticationSuccessHandler authenticationSuccessHandler, AuthenticationFailureHandler authenticationFailureHandler) {
    this.jwtUserDetailsService = jwtUserDetailsService;
    this.restAuthenticationEntryPoint = restAuthenticationEntryPoint;
    this.logoutSuccess = logoutSuccess;
    this.authenticationSuccessHandler = authenticationSuccessHandler;
    this.authenticationFailureHandler = authenticationFailureHandler;
  }

  @Bean
  public TokenAuthenticationFilter jwtAuthenticationTokenFilter() throws Exception {
    return new TokenAuthenticationFilter();
  }

  @Bean
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Autowired
  public void configureGlobal(AuthenticationManagerBuilder authenticationManagerBuilder)
          throws Exception {
    authenticationManagerBuilder.userDetailsService(jwtUserDetailsService)
            .passwordEncoder(passwordEncoder());

  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.csrf().ignoringAntMatchers("/api/login", "/api/signup")
            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .exceptionHandling().authenticationEntryPoint(restAuthenticationEntryPoint).and()
            .addFilterBefore(jwtAuthenticationTokenFilter(), BasicAuthenticationFilter.class)
            .authorizeRequests().anyRequest().authenticated().and().formLogin().loginPage("/api/login")
            .successHandler(authenticationSuccessHandler).failureHandler(authenticationFailureHandler)
            .and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/api/logout"))
            .logoutSuccessHandler(logoutSuccess).deleteCookies(TOKEN_COOKIE);

  }

  public void changePassword(String oldPassword, String newPassword) throws Exception {

    Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
    String username = currentUser.getName();

    if (authenticationManagerBean() != null) {
      LOGGER.debug("Re-authenticating user '" + username + "' for password change request.");

      authenticationManagerBean().authenticate(new UsernamePasswordAuthenticationToken(username, oldPassword));
    } else {
      LOGGER.debug("No authentication manager set. can't change Password!");

      return;
    }

    LOGGER.debug("Changing password for user '" + username + "'");

    User user = jwtUserDetailsService.loadUserByUsername(username);

    user.setPassword(new BCryptPasswordEncoder().encode(newPassword));
    jwtUserDetailsService.save(user);
  }
}
