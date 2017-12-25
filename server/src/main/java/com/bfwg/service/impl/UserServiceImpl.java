package com.bfwg.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.bfwg.model.Authority;
import com.bfwg.model.User;
import com.bfwg.model.UserRequest;
import com.bfwg.repository.UserRepository;
import com.bfwg.service.AuthorityService;
import com.bfwg.service.UserService;

/**
 * Created by fan.jin on 2016-10-15.
 */

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private AuthorityService authService;

  public void resetCredentials() {
    List<User> users = userRepository.findAll();
    for (User user : users) {
      user.setPassword(passwordEncoder.encode("123"));
      userRepository.save(user);
    }
  }

  @Override
  // @PreAuthorize("hasRole('USER')")
  public User findByUsername(String username) throws UsernameNotFoundException {
    User u = userRepository.findByUsername(username);
    return u;
  }

  @PreAuthorize("hasRole('ADMIN')")
  public User findById(Long id) throws AccessDeniedException {
    User u = userRepository.findOne(id);
    return u;
  }

  @PreAuthorize("hasRole('ADMIN')")
  public List<User> findAll() throws AccessDeniedException {
    List<User> result = userRepository.findAll();
    return result;
  }

  @Override
  public User save(UserRequest userRequest) {
    User user = new User();
    user.setUsername(userRequest.getUsername());
    user.setPassword(passwordEncoder.encode(userRequest.getPassword()));
    user.setFirstname(userRequest.getFirstname());
    user.setLastname(userRequest.getLastname());
    List<Authority> auth = authService.findByname("ROLE_USER");
    user.setAuthorities(auth);
    this.userRepository.save(user);
    return user;
  }

}
