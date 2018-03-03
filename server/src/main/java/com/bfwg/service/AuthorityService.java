package com.bfwg.service;

import java.util.List;
import com.bfwg.model.Authority;

public interface AuthorityService {

    public List<Authority> findById(Long id);

    public List<Authority> findByname(String name);

}
