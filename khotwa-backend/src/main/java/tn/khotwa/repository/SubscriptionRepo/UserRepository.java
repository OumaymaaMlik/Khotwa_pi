package tn.khotwa.repository.SubscriptionRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.SubscriptionEntities.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {


    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}
