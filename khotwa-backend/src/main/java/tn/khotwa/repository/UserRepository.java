package tn.khotwa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {

}
