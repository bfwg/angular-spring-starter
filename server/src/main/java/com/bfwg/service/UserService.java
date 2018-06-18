package com.bfwg.service;

import java.util.List;
import com.bfwg.model.User;
import com.bfwg.model.UserRequest;

/**
 * Created by fan.jin on 2016-10-15.
 */
public interface UserService {

    public void resetCredentials();

    public User findById(Long id);

    public User findByUsername(String username);

    public List<User> findAll();

    public User save(UserRequest user);
}
