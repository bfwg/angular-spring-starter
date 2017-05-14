package com.bfwg.security.auth;

import com.bfwg.security.TokenHelper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by fan.jin on 2016-10-19.
 */
public class TokenAuthenticationFilter extends OncePerRequestFilter {

    private final Log logger = LogFactory.getLog(this.getClass());

    @Autowired
    TokenHelper tokenHelper;

    @Autowired
    UserDetailsService userDetailsService;


    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

        String authToken = tokenHelper.getToken( request );
        if (authToken != null) {
            // get username from token
            String username = tokenHelper.getUsernameFromToken( authToken );
            if ( username != null ) {
                // get user
                UserDetails userDetails = userDetailsService.loadUserByUsername( username );
                // create authentication
                TokenBasedAuthentication authentication = new TokenBasedAuthentication( userDetails );
                authentication.setToken( authToken );
                SecurityContextHolder.getContext().setAuthentication( authentication );
            }
        } else {
            SecurityContextHolder.getContext().setAuthentication( new AnonAuthentication() );
        }

        chain.doFilter(request, response);
    }

}
