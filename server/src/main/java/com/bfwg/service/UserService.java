package com.bfwg.service;

import com.bfwg.model.User;
import org.springframework.security.provisioning.UserDetailsManager;

import java.util.List;

/**
 * Created by fan.jin on 2016-10-15.
 */
public interface UserService {
    User findById(Long id);
    User findByUsername(String username);
    List<User> findAll ();
}
