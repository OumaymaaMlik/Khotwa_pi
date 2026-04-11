package tn.khotwa.biblio.service.user;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tn.khotwa.biblio.dto.user.*;
import tn.khotwa.biblio.entity.subscription.User;
import tn.khotwa.biblio.enums.PlanType;
import tn.khotwa.biblio.enums.Role;
import tn.khotwa.biblio.exception.AccessDeniedException;
import tn.khotwa.biblio.exception.ResourceNotFoundException;
import tn.khotwa.biblio.projection.user.UserView;
import tn.khotwa.biblio.repository.user.UserRepository;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserService implements IUserService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    // ══════════════════════════════════════════════════════════════
    // AUTHENTIFICATION
    // ══════════════════════════════════════════════════════════════

    @Override
    public UserView signUp(SignUpRequest req) {

        // 1. Seuls ENTREPRENEUR et COACH peuvent s'inscrire
        Role role = parseRole(req.getRole());
        if (role == Role.ADMIN) {
            throw new AccessDeniedException(
                "Admin account cannot be created via sign-up.");
        }

        // 2. Unicité de l'email
        if (userRepo.existsByEmailAddress(req.getEmailAddress())) {
            throw new IllegalArgumentException(
                "Email already in use: " + req.getEmailAddress());
        }

        // 3. Construction de l'entité
        User user = User.builder()
            .firstName(req.getFirstName())
            .lastName(req.getLastName())
            .emailAddress(req.getEmailAddress())
            .password(passwordEncoder.encode(req.getPassword()))
            .role(role)
            .planType(PlanType.FREE)   // plan gratuit par défaut
            .avatar(req.getAvatar())
            .startup(req.getStartup())
            .phoneNumber(req.getPhoneNumber())
            .build();

        User saved = userRepo.save(user);
        log.info("New {} registered — id={} email={}",
                 role, saved.getIdUser(), saved.getEmailAddress());

        return userRepo.findProjectedByIdUser(saved.getIdUser()).orElseThrow();
    }

    @Override
    public Map<String, Object> signIn(SignInRequest req) {

        // 1. Trouver l'utilisateur par email
        User user = userRepo.findByEmailAddress(req.getEmailAddress())
            .orElseThrow(() -> new AccessDeniedException("Invalid credentials."));

        // 2. Vérifier le mot de passe
        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            throw new AccessDeniedException("Invalid credentials.");
        }

        // 3. Construire la réponse — simple token basé sur l'idUser
        //    (compatible avec l'architecture actuelle sans JWT)
        UserView profile = userRepo.findProjectedByIdUser(user.getIdUser())
            .orElseThrow();

        Map<String, Object> response = new LinkedHashMap<>();
        response.put("token",   "USER-" + user.getIdUser());   // token simple
        response.put("userId",  user.getIdUser());
        response.put("role",    user.getRole().name());
        response.put("profile", profile);

        log.info("User signed in — id={} role={}", user.getIdUser(), user.getRole());
        return response;
    }

    // ══════════════════════════════════════════════════════════════
    // PROFIL PROPRE (chaque utilisateur connecté)
    // ══════════════════════════════════════════════════════════════

    @Override
    @Transactional(value = jakarta.transaction.Transactional.TxType.SUPPORTS)
    public UserView getMyProfile(Long userId) {
        return userRepo.findProjectedByIdUser(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User", userId));
    }

    @Override
    public UserView updateMyProfile(Long userId, UpdateProfileRequest req) {

        User user = findUser(userId);

        if (req.getFirstName()   != null) user.setFirstName(req.getFirstName());
        if (req.getLastName()    != null) user.setLastName(req.getLastName());
        if (req.getAvatar()      != null) user.setAvatar(req.getAvatar());
        if (req.getStartup()     != null) user.setStartup(req.getStartup());
        if (req.getPhoneNumber() != null) user.setPhoneNumber(req.getPhoneNumber());

        // Changement de mot de passe (optionnel, doit être re-encodé)
        if (req.getPassword() != null && !req.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(req.getPassword()));
        }

        userRepo.save(user);
        log.info("Profile updated — id={}", userId);
        return userRepo.findProjectedByIdUser(userId).orElseThrow();
    }

    @Override
    public void deleteMyAccount(Long userId) {
        User user = findUser(userId);
        // L'admin statique ne peut pas se supprimer
        if (user.getRole() == Role.ADMIN) {
            throw new AccessDeniedException("Admin account cannot be deleted.");
        }
        userRepo.delete(user);
        log.info("Account deleted — id={}", userId);
    }

    // ══════════════════════════════════════════════════════════════
    // ADMINISTRATION (rôle ADMIN uniquement — vérifié au niveau controller)
    // ══════════════════════════════════════════════════════════════

    @Override
    @Transactional(value = jakarta.transaction.Transactional.TxType.SUPPORTS)
    public List<UserView> getAllUsers() {
        return userRepo.findAllProjectedBy();
    }

    @Override
    @Transactional(value = jakarta.transaction.Transactional.TxType.SUPPORTS)
    public UserView getUserById(Long userId) {
        return userRepo.findProjectedByIdUser(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User", userId));
    }

    @Override
    public UserView adminUpdateUser(Long userId, AdminUpdateUserRequest req) {

        User user = findUser(userId);

        if (req.getFirstName()   != null) user.setFirstName(req.getFirstName());
        if (req.getLastName()    != null) user.setLastName(req.getLastName());
        if (req.getAvatar()      != null) user.setAvatar(req.getAvatar());
        if (req.getStartup()     != null) user.setStartup(req.getStartup());
        if (req.getPhoneNumber() != null) user.setPhoneNumber(req.getPhoneNumber());

        if (req.getRole() != null) {
            user.setRole(parseRole(req.getRole()));
        }
        if (req.getPlanType() != null) {
            user.setPlanType(parsePlan(req.getPlanType()));
        }
        if (req.getPendingPlan() != null) {
            user.setPendingPlan(parsePlan(req.getPendingPlan()));
        }

        userRepo.save(user);
        log.info("Admin updated user — id={}", userId);
        return userRepo.findProjectedByIdUser(userId).orElseThrow();
    }

    @Override
    public void adminDeleteUser(Long userId) {
        User user = findUser(userId);
        if (user.getRole() == Role.ADMIN) {
            throw new AccessDeniedException("Admin account cannot be deleted.");
        }
        userRepo.delete(user);
        log.info("Admin deleted user — id={}", userId);
    }

    // ── Utilitaires privés ────────────────────────────────────────

    private User findUser(Long id) {
        return userRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User", id));
    }

    private Role parseRole(String raw) {
        try { return Role.valueOf(raw.toUpperCase()); }
        catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid role: " + raw);
        }
    }

    private PlanType parsePlan(String raw) {
        try { return PlanType.valueOf(raw.toUpperCase()); }
        catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid plan type: " + raw);
        }
    }
}
