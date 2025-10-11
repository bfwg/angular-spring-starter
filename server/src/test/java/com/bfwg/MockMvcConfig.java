package com.bfwg;

import com.bfwg.security.auth.TokenAuthenticationFilter;
import io.restassured.RestAssured;
import io.restassured.module.mockmvc.RestAssuredMockMvc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.DefaultMockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import jakarta.annotation.PostConstruct;

/**
 * Configuration for MockMvc test setup.
 * Provides MockMvc bean for integration testing.
 */
@Configuration
public class MockMvcConfig {

    private final WebApplicationContext wac;
    private final TokenAuthenticationFilter filter;
    private MockMvc mockMvcInstance;

    /**
     * Constructor injection to avoid circular dependencies.
     */
    @Autowired
    public MockMvcConfig(WebApplicationContext wac, TokenAuthenticationFilter filter) {
        this.wac = wac;
        this.filter = filter;
    }

    @Bean
    public MockMvc mockMvc() {
        if (mockMvcInstance == null) {
            DefaultMockMvcBuilder builder = MockMvcBuilders.webAppContextSetup(wac);
            mockMvcInstance = builder.addFilters(filter).build();
        }
        return mockMvcInstance;
    }

    @PostConstruct
    protected void restAssured() {
        // Initialize RestAssuredMockMvc lazily
        RestAssuredMockMvc.webAppContextSetup(wac);
        RestAssured.port = 8080;
    }
}
