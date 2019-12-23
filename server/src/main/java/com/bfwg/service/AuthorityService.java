package com.bfwg.service;

import com.bfwg.model.Authority;

import java.util.List;

public interface AuthorityService {
    List<Authority> findById(Long id);

    List<Authority> findByName(String name);

}
