package tn.khotwa.repository.UserRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.UserEnum.Role;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmailAddress(String emailAddress);

    boolean existsByEmailAddress(String emailAddress);

    boolean existsByRole(Role role);

    long countByRole(Role role);
}