package tn.khotwa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.User;
import tn.khotwa.enums.RoleUtilisateur;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByRole(RoleUtilisateur role);
}
