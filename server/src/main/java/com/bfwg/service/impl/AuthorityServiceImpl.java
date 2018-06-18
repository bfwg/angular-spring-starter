package com.bfwg.service.impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bfwg.model.Authority;
import com.bfwg.repository.AuthorityRepository;
import com.bfwg.service.AuthorityService;
import java.util.Optional;

@Service
public class AuthorityServiceImpl implements AuthorityService {

    @Autowired
    private AuthorityRepository authorityRepository;

    @Override
    public List<Authority> findById(Long id) {
        Optional<Authority> optauth = authorityRepository.findById(id);
        List<Authority> auths = new ArrayList<>();
        auths.add(optauth.get());
        return auths;
    }

    @Override
    public List<Authority> findByname(String name) {
        Authority auth = authorityRepository.findByName(name);
        List<Authority> auths = new ArrayList<>();
        auths.add(auth);
        return auths;
    }

}
