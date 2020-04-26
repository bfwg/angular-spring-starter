package com.bfwg.service;

import com.bfwg.model.Authority;
import com.bfwg.model.UserRoleName;

import java.util.List;

/**
 * Created by fan.jin on 2016-11-07.
 */
public interface AuthorityService {
  List<Authority> findById(Long id);

  List<Authority> findByName(UserRoleName name);

}
