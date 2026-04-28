package tn.khotwa.repository.UserRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.User.Role;
import tn.khotwa.projection.user.UserView;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmailAddress(String emailAddress);
    boolean existsByEmailAddress(String emailAddress);
    boolean existsByRole(Role role);
    long countByRole(Role role);
    List<UserView> findAllProjectedBy();
    List<UserView> findByRole(Role role);
    Optional<UserView> findProjectedByIdUser(Long idUser);
    @Query("SELECT u FROM User u WHERE u.idUser IN :ids")
    List<User> findAllByIdIn(@Param("ids") List<Long> ids);
    @Query("SELECT u FROM User u WHERE u.role = :role")
    List<User> findByRoleAsEntity(@Param("role") Role role);
}
