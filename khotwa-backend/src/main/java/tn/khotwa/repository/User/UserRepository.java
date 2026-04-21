package tn.khotwa.repository.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.User.Role;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmailAddress(String emailAddress);

    boolean existsByEmailAddress(String emailAddress);

    boolean existsByRole(Role role);

    long countByRole(Role role);

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