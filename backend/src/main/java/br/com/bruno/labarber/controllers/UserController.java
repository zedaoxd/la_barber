package br.com.bruno.labarber.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bruno.labarber.dtos.UserDTO;
import br.com.bruno.labarber.services.UserService;


@RestController
@RequestMapping(value = "/users")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping(value = "/barbers")
    public ResponseEntity<List<UserDTO>> findAllBarbers() {
        return ResponseEntity.ok(userService.findAllBarbers());
    }
}
