package com.bfwg.model;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for PasswordChangeRequest DTO.
 */
class PasswordChangeRequestTest {

    private Validator validator;

    @BeforeEach
    void setUp() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }

    @Test
    void constructor_WithAllFields_ShouldCreateObject() {
        // When
        PasswordChangeRequest request = new PasswordChangeRequest("old123", "new123");

        // Then
        assertEquals("old123", request.getOldPassword());
        assertEquals("new123", request.getNewPassword());
    }

    @Test
    void defaultConstructor_ShouldCreateObject() {
        // When
        PasswordChangeRequest request = new PasswordChangeRequest();

        // Then
        assertNotNull(request);
        assertNull(request.getOldPassword());
        assertNull(request.getNewPassword());
    }

    @Test
    void validation_WithValidPasswords_ShouldPass() {
        // Given
        PasswordChangeRequest request = new PasswordChangeRequest("old123", "new456");

        // When
        Set<ConstraintViolation<PasswordChangeRequest>> violations = validator.validate(request);

        // Then
        assertTrue(violations.isEmpty());
    }

    @Test
    void validation_WithNullOldPassword_ShouldFail() {
        // Given
        PasswordChangeRequest request = new PasswordChangeRequest(null, "new123");

        // When
        Set<ConstraintViolation<PasswordChangeRequest>> violations = validator.validate(request);

        // Then
        assertFalse(violations.isEmpty());
        assertTrue(violations.stream().anyMatch(v -> v.getMessage().contains("required")));
    }

    @Test
    void validation_WithNullNewPassword_ShouldFail() {
        // Given
        PasswordChangeRequest request = new PasswordChangeRequest("old123", null);

        // When
        Set<ConstraintViolation<PasswordChangeRequest>> violations = validator.validate(request);

        // Then
        assertFalse(violations.isEmpty());
        assertTrue(violations.stream().anyMatch(v -> v.getMessage().contains("required")));
    }

    @Test
    void validation_WithShortNewPassword_ShouldFail() {
        // Given
        PasswordChangeRequest request = new PasswordChangeRequest("old123", "ab");

        // When
        Set<ConstraintViolation<PasswordChangeRequest>> violations = validator.validate(request);

        // Then
        assertFalse(violations.isEmpty());
        assertTrue(violations.stream().anyMatch(v -> v.getMessage().contains("between 3 and 100")));
    }

    @Test
    void arePasswordsDifferent_WithDifferentPasswords_ShouldReturnTrue() {
        // Given
        PasswordChangeRequest request = new PasswordChangeRequest("old123", "new456");

        // When
        boolean different = request.arePasswordsDifferent();

        // Then
        assertTrue(different);
    }

    @Test
    void arePasswordsDifferent_WithSamePasswords_ShouldReturnFalse() {
        // Given
        PasswordChangeRequest request = new PasswordChangeRequest("same123", "same123");

        // When
        boolean different = request.arePasswordsDifferent();

        // Then
        assertFalse(different);
    }

    @Test
    void arePasswordsDifferent_WithNullPasswords_ShouldReturnFalse() {
        // Given
        PasswordChangeRequest request = new PasswordChangeRequest(null, null);

        // When
        boolean different = request.arePasswordsDifferent();

        // Then
        assertFalse(different);
    }

    @Test
    void equals_WithSamePasswords_ShouldReturnTrue() {
        // Given
        PasswordChangeRequest request1 = new PasswordChangeRequest("old123", "new456");
        PasswordChangeRequest request2 = new PasswordChangeRequest("old123", "new456");

        // When/Then
        assertEquals(request1, request2);
    }

    @Test
    void equals_WithDifferentPasswords_ShouldReturnFalse() {
        // Given
        PasswordChangeRequest request1 = new PasswordChangeRequest("old123", "new456");
        PasswordChangeRequest request2 = new PasswordChangeRequest("old999", "new999");

        // When/Then
        assertNotEquals(request1, request2);
    }

    @Test
    void hashCode_WithSamePasswords_ShouldBeEqual() {
        // Given
        PasswordChangeRequest request1 = new PasswordChangeRequest("old123", "new456");
        PasswordChangeRequest request2 = new PasswordChangeRequest("old123", "new456");

        // When/Then
        assertEquals(request1.hashCode(), request2.hashCode());
    }

    @Test
    void toString_ShouldHidePasswords() {
        // Given
        PasswordChangeRequest request = new PasswordChangeRequest("old123", "new456");

        // When
        String result = request.toString();

        // Then
        assertTrue(result.contains("***"));
        assertFalse(result.contains("old123"));
        assertFalse(result.contains("new456"));
    }
}

