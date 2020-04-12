package com.bfwg.service;

import com.bfwg.model.User;
import com.bfwg.model.UserRequest;

import java.util.List;

/**
 * Created by fan.jin on 2016-10-15.
 */
public interface UserService {
  void resetCredentials();

  User findById(Long id);

  User findByUsername(String username);

  List<User> findAll();

  User save(UserRequest user);
}
