package tn.khotwa.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.user.Role;
import tn.khotwa.projection.user.UserView;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // --- Méthodes de base ---
    Optional<User> findByEmailAddress(String emailAddress);

    boolean existsByEmailAddress(String emailAddress);

    boolean existsByRole(Role role);

    long countByRole(Role role);

    // --- Méthodes avec Projections (UserView) ---
    List<UserView> findAllProjectedBy();

    List<UserView> findByRole(Role role);

    Optional<UserView> findProjectedByIdUser(Long idUser);

    // --- Requêtes personnalisées (JPQL) ---

    @Query("SELECT u FROM User u WHERE u.idUser IN :ids")
    List<User> findAllByIdIn(@Param("ids") List<Long> ids);

    @Query("SELECT u FROM User u WHERE u.role = :role")
    List<User> findByRoleAsEntity(@Param("role") Role role);

    @Query("""
            select u
            from User u
            where u.role = :role
                and (
                    :search is null
                    or trim(:search) = ''
                    or lower(concat(coalesce(u.firstName, ''), ' ', coalesce(u.lastName, ''))) like lower(concat('%', :search, '%'))
                    or lower(u.emailAddress) like lower(concat('%', :search, '%'))
                )
            order by u.firstName asc, u.lastName asc
            """)
    List<User> findAllByRoleWithSearch(@Param("role") Role role, @Param("search") String search);
}