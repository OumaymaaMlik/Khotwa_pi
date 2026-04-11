package tn.khotwa.biblio.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.biblio.dto.user.*;
import tn.khotwa.biblio.service.user.IUserService;

import java.util.Map;

/**
 * Controller — Module gestion des utilisateurs
 *
 * Routes publiques  (pas de token requis) :
 *   POST /api/users/signup       — inscription ENTREPRENEUR / COACH
 *   POST /api/users/signin       — connexion tous rôles
 *
 * Routes protégées (token = "USER-{idUser}" passé en header X-User-Id) :
 *   GET  /api/users/me           — voir son profil
 *   PUT  /api/users/me           — modifier son profil
 *   DELETE /api/users/me         — supprimer son compte
 *
 * Routes admin  (X-User-Role: ADMIN requis) :
 *   GET  /api/users              — lister tous les users
 *   GET  /api/users/{id}         — voir un user
 *   PUT  /api/users/{id}         — modifier un user
 *   DELETE /api/users/{id}       — supprimer un user
 */
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    private final IUserService userService;

    // ── Authentification ──────────────────────────────────────────

    /**
     * POST /api/users/signup
     * Body : { firstName, lastName, emailAddress, password, role, avatar?, startup?, phoneNumber? }
     */
    @PostMapping("/signup")
    public ResponseEntity<Map<String, Object>> signUp(
            @Valid @RequestBody SignUpRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
            "success", true,
            "message", "Account created successfully",
            "data",    userService.signUp(request)
        ));
    }

    /**
     * POST /api/users/signin
     * Body : { emailAddress, password }
     * Réponse : { token, userId, role, profile }
     */
    @PostMapping("/signin")
    public ResponseEntity<Map<String, Object>> signIn(
            @Valid @RequestBody SignInRequest request) {

        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "Signed in successfully",
            "data",    userService.signIn(request)
        ));
    }

    // ── Profil propre ─────────────────────────────────────────────

    /**
     * GET /api/users/me
     * Header : X-User-Id: {idUser}
     */
    @GetMapping("/me")
    public ResponseEntity<Map<String, Object>> getMyProfile(
            @RequestHeader("X-User-Id") Long userId) {

        return ResponseEntity.ok(Map.of(
            "success", true,
            "data",    userService.getMyProfile(userId)
        ));
    }

    /**
     * PUT /api/users/me
     * Header  : X-User-Id: {idUser}
     * Body    : { firstName?, lastName?, password?, avatar?, startup?, phoneNumber? }
     */
    @PutMapping("/me")
    public ResponseEntity<Map<String, Object>> updateMyProfile(
            @RequestHeader("X-User-Id") Long userId,
            @Valid @RequestBody UpdateProfileRequest request) {

        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "Profile updated",
            "data",    userService.updateMyProfile(userId, request)
        ));
    }

    /**
     * DELETE /api/users/me
     * Header : X-User-Id: {idUser}
     */
    @DeleteMapping("/me")
    public ResponseEntity<Map<String, Object>> deleteMyAccount(
            @RequestHeader("X-User-Id") Long userId) {

        userService.deleteMyAccount(userId);
        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "Account deleted"
        ));
    }

    // ── Administration ────────────────────────────────────────────

    /**
     * GET /api/users
     * Header : X-User-Role: ADMIN
     */
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllUsers(
            @RequestHeader("X-User-Role") String role) {

        requireAdmin(role);
        return ResponseEntity.ok(Map.of(
            "success", true,
            "data",    userService.getAllUsers()
        ));
    }

    /**
     * GET /api/users/{id}
     * Header : X-User-Role: ADMIN
     */
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getUserById(
            @PathVariable Long id,
            @RequestHeader("X-User-Role") String role) {

        requireAdmin(role);
        return ResponseEntity.ok(Map.of(
            "success", true,
            "data",    userService.getUserById(id)
        ));
    }

    /**
     * PUT /api/users/{id}
     * Header : X-User-Role: ADMIN
     * Body   : { firstName?, lastName?, role?, planType?, pendingPlan?, avatar?, startup?, phoneNumber? }
     */
    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> adminUpdateUser(
            @PathVariable Long id,
            @RequestHeader("X-User-Role") String role,
            @RequestBody AdminUpdateUserRequest request) {

        requireAdmin(role);
        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "User updated",
            "data",    userService.adminUpdateUser(id, request)
        ));
    }

    /**
     * DELETE /api/users/{id}
     * Header : X-User-Role: ADMIN
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> adminDeleteUser(
            @PathVariable Long id,
            @RequestHeader("X-User-Role") String role) {

        requireAdmin(role);
        userService.adminDeleteUser(id);
        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "User deleted"
        ));
    }

    // ── Utilitaire ────────────────────────────────────────────────

    private void requireAdmin(String role) {
        if (!"ADMIN".equalsIgnoreCase(role)) {
            throw new tn.khotwa.biblio.exception.AccessDeniedException(
                "Admin access required.");
        }
    }
}
