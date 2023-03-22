package br.com.bruno.labarber.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bruno.labarber.entities.User;
import br.com.bruno.labarber.enums.TypeUser;

public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);

    List<User> findByType(TypeUser type);
}
