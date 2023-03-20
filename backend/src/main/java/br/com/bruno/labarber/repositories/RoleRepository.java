package br.com.bruno.labarber.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bruno.labarber.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
    
    Role findByName(String name);
}
