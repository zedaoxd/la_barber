package br.com.bruno.labarber.services;

import java.util.List;

import br.com.bruno.labarber.dtos.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.bruno.labarber.dtos.UserLoginDTO;
import br.com.bruno.labarber.dtos.AuthenticationResponseDTO;
import br.com.bruno.labarber.dtos.UserInsertDTO;
import br.com.bruno.labarber.entities.User;
import br.com.bruno.labarber.enums.TypeUser;
import br.com.bruno.labarber.repositories.RoleRepository;
import br.com.bruno.labarber.repositories.UserRepository;

@Service
public class AuthenticationService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public AuthenticationResponseDTO register(UserInsertDTO userInsertDTO) {
        User user = userInsertDTO.toUser();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(List.of(roleRepository.findByName("ROLE_USER")));
        user.setType(TypeUser.CLIENT);
        user = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return new AuthenticationResponseDTO(jwtToken, new UserDTO(user));
    }

    public AuthenticationResponseDTO login(UserLoginDTO authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getEmail(),
                        authenticationRequest.getPassword()
                )
        );
        User user = userRepository.findByEmail(authenticationRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        var jwtToken = jwtService.generateToken(user);
        return new AuthenticationResponseDTO(jwtToken, new UserDTO(user));
    }
}
