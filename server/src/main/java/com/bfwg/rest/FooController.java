package com.bfwg.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Created by fan.jin on 2017-05-08.
 */

@RestController
@RequestMapping( value = "/api/foo", produces = MediaType.APPLICATION_JSON_VALUE )
public class FooController {


    @RequestMapping( method = GET, value= "")
    public Map<String, String> getFoo() {
        Map<String, String> fooObj = new HashMap<>();
        fooObj.put("foo", "bar");
        return fooObj;
    }

}
