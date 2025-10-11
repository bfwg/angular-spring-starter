package com.bfwg.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AuthorityTest {

    @Test
    public void testAuthorityWithUserRole() {
        Authority authority = new Authority(UserRoleName.ROLE_USER);

        assertEquals(UserRoleName.ROLE_USER, authority.getName());
        assertEquals("ROLE_USER", authority.getAuthority());
    }

    @Test
    public void testAuthorityWithAdminRole() {
        Authority authority = new Authority(UserRoleName.ROLE_ADMIN);

        assertEquals(UserRoleName.ROLE_ADMIN, authority.getName());
        assertEquals("ROLE_ADMIN", authority.getAuthority());
    }

    @Test
    public void testAuthorityEquals() {
        Authority authority1 = new Authority(UserRoleName.ROLE_USER);
        Authority authority2 = new Authority(UserRoleName.ROLE_USER);
        assertEquals(authority1, authority2);
    }

    @Test
    public void testAuthorityHashCode() {
        Authority authority1 = new Authority(UserRoleName.ROLE_USER);
        Authority authority2 = new Authority(UserRoleName.ROLE_USER);
        assertEquals(authority1.hashCode(), authority2.hashCode());
    }
}

