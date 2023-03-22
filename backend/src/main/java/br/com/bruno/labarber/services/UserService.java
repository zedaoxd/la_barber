package br.com.bruno.labarber.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.bruno.labarber.dtos.UserDTO;
import br.com.bruno.labarber.entities.User;
import br.com.bruno.labarber.enums.TypeUser;
import br.com.bruno.labarber.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> findAllBarbers() {
        return userRepository.findByType(TypeUser.BARBER).stream().map(UserDTO::new).toList();
    }
    
    public User loadUserByUsername(String username) {
        return userRepository.findByEmail(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public User getAuthenticatedUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return loadUserByUsername(email);
    }
}
