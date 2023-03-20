package br.com.bruno.labarber.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.bruno.labarber.entities.User;
import br.com.bruno.labarber.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    
    public User loadUserByUsername(String username) {
        return userRepository.findByEmail(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
