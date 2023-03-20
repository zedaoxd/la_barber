package br.com.bruno.labarber.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bruno.labarber.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);
}
