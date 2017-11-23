package com.bfwg.service.impl;

import com.bfwg.model.User;
import com.bfwg.repository.UserRepository;
import com.bfwg.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * Created by fan.jin on 2016-10-15.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void resetCredentials() {
        List<User> users = userRepository.findAll();
        users.stream().map((user) -> {
            user.setPassword(passwordEncoder.encode("123"));
            return user;
        }).forEachOrdered((user) -> {
            userRepository.save(user);
        });
    }

    @Override
    @PreAuthorize("hasRole('USER')")
    public User findByUsername(String username) throws UsernameNotFoundException {
        User u = userRepository.findByUsername(username);
        return u;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public User findById(Long id) throws AccessDeniedException {
        User u = userRepository.findOne(id);
        return u;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public List<User> findAll() throws AccessDeniedException {
        List<User> result = userRepository.findAll();
        return result;
    }

}
