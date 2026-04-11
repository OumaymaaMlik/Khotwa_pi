package tn.khotwa.biblio.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.khotwa.biblio.entity.subscription.User;
import tn.khotwa.biblio.enums.Role;
import tn.khotwa.biblio.projection.user.UserView;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // ── Recherche par email (pour l'authentification) ─────────────
    Optional<User>      findByEmailAddress(String emailAddress);
    Optional<UserView>  findProjectedByEmailAddress(String emailAddress);

    // ── Vérification d'unicité ────────────────────────────────────
    boolean existsByEmailAddress(String emailAddress);

    // ── Vues projetées ────────────────────────────────────────────
    Optional<UserView>  findProjectedByIdUser(Long idUser);
    List<UserView>      findAllProjectedBy();

    // ── Filtrer par rôle (admin uniquement) ───────────────────────
    List<UserView>      findByRole(Role role);
}
