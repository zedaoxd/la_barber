package br.com.bruno.labarber.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bruno.labarber.dtos.AuthenticationResponseDTO;
import br.com.bruno.labarber.dtos.UserInsertDTO;
import br.com.bruno.labarber.dtos.UserLoginDTO;
import br.com.bruno.labarber.services.AuthenticationService;

@RestController
@RequestMapping(value = "/auth")
public class AuthenticationController {
    
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping(value = "/login")
    public ResponseEntity<AuthenticationResponseDTO> login(@RequestBody UserLoginDTO userLoginDTO) {
        return ResponseEntity.ok(authenticationService.login(userLoginDTO));
    }

    @PostMapping(value = "/register")
    public ResponseEntity<AuthenticationResponseDTO> register(@RequestBody UserInsertDTO userInsertDTO) {
        var user = authenticationService.register(userInsertDTO);
        URI uri = URI.create("/users/" + user.getId());
        return ResponseEntity.created(uri).body(user);
    }
}
