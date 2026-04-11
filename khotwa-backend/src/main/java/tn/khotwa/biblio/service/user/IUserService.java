package tn.khotwa.biblio.service.user;

import tn.khotwa.biblio.dto.user.*;
import tn.khotwa.biblio.projection.user.UserView;

import java.util.List;
import java.util.Map;

/**
 * Interface du service User — module gestion des comptes.
 *
 * Règles métier :
 *  - ADMIN : compte unique statique créé au démarrage, ne peut pas s'inscrire.
 *  - ENTREPRENEUR / COACH : inscription libre, CRUD de leur propre compte.
 *  - L'admin peut lister, modifier et supprimer n'importe quel compte.
 */
public interface IUserService {

    // ── Authentification ──────────────────────────────────────────

    /** Inscription ENTREPRENEUR ou COACH — renvoie le profil créé. */
    UserView signUp(SignUpRequest request);

    /**
     * Connexion — renvoie le profil + un token simple (idUser en string).
     * Sans JWT pour rester cohérent avec l'architecture actuelle du projet.
     */
    Map<String, Object> signIn(SignInRequest request);

    // ── Profil propre (chaque utilisateur connecté) ───────────────

    UserView       getMyProfile(Long userId);
    UserView       updateMyProfile(Long userId, UpdateProfileRequest request);
    void           deleteMyAccount(Long userId);

    // ── Administration (accès réservé au rôle ADMIN) ──────────────

    List<UserView> getAllUsers();
    UserView       getUserById(Long userId);
    UserView       adminUpdateUser(Long userId, AdminUpdateUserRequest request);
    void           adminDeleteUser(Long userId);
}
