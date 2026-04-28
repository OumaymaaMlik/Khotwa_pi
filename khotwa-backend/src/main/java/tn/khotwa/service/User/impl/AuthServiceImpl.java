package tn.khotwa.service.User.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import tn.khotwa.DTO.user.AuthResponse;
import tn.khotwa.DTO.user.LoginRequest;
import tn.khotwa.DTO.user.RegisterRequest;
import tn.khotwa.DTO.user.UserResponse;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.UserException.EmailAlreadyUsedException;
import tn.khotwa.exception.UserException.ForbiddenAdminCreationException;
import tn.khotwa.exception.UserException.InvalidCredentialsException;
import tn.khotwa.exception.UserException.InvalidRoleException;
import tn.khotwa.repository.UserRepo.UserRepository;
import tn.khotwa.security.JwtService;
import tn.khotwa.service.SubscriptionServices.Interface.ISubscriptionService;
import tn.khotwa.service.User.AuthService;
import tn.khotwa.service.User.UserMapper;
import tn.khotwa.service.GoogleAuthService;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthServiceImpl implements AuthService {

    private final UserRepository       userRepository;
    private final PasswordEncoder      passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService           jwtService;
    private final UserMapper           userMapper;
    private final ISubscriptionService subscriptionService; // ✅ injecté
    private final GoogleAuthService googleAuthService;

    @Override
    public UserResponse register(RegisterRequest request) {
        String normalizedEmail = normalizeEmail(request.emailAddress());
        if (userRepository.existsByEmailAddress(normalizedEmail)) {
            throw new EmailAlreadyUsedException("Email address is already used.");
        }

        Role role = resolvePublicRole(request.role());

        User user = User.builder()
                .avatar(trimToNull(request.avatar()))
                .emailAddress(normalizedEmail)
                .firstName(request.firstName().trim())
                .lastName(request.lastName().trim())
                .password(passwordEncoder.encode(request.password()))
                .phoneNumber(trimToNull(request.phoneNumber()))
                .role(role)
                .startup(trimToNull(request.startup()))
                .mustChangePassword(false)
                .build();

        User savedUser = userRepository.save(user);

        // ✅ Créer une souscription FREE par défaut pour les entrepreneurs
        if (role == Role.ENTREPRENEUR) {
            subscriptionService.createFreeSubscription(savedUser);
        }

        return userMapper.toResponse(savedUser);
    }

    @Override
    @Transactional(readOnly = true)
    public AuthResponse login(LoginRequest request) {
        String normalizedEmail = normalizeEmail(request.emailAddress());

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(normalizedEmail, request.password())
            );
        } catch (AuthenticationException exception) {
            throw new InvalidCredentialsException("Invalid credentials.");
        }

        User user = userRepository.findByEmailAddress(normalizedEmail)
                .orElseThrow(() -> new AuthenticationServiceException("Authenticated user not found."));

        return createAuthResponse(user);
    }

    @Override
    public AuthResponse loginWithGoogle(String idToken, String rawRole, String mode) {
        try {
            var googlePayload = googleAuthService.verifyToken(idToken);
            String email = normalizeEmail(googlePayload.getEmail());
            boolean userExists = userRepository.existsByEmailAddress(email);

            if (!StringUtils.hasText(mode)) {
                throw new AuthenticationServiceException("Google auth mode is required (signin or signup).");
            }
            String normalizedMode = mode.trim().toLowerCase();
            if (!"signin".equals(normalizedMode) && !"signup".equals(normalizedMode)) {
                throw new AuthenticationServiceException("Invalid Google auth mode. Use signin or signup.");
            }

            if ("signin".equals(normalizedMode) && !userExists) {
                throw new AuthenticationServiceException("No account found for this Google email. Please sign up first.");
            }
            if ("signup".equals(normalizedMode) && userExists) {
                throw new EmailAlreadyUsedException("Account already exists. Please use Sign In.");
            }

            boolean isNewUser = !userExists;
            User user = userRepository.findByEmailAddress(email).orElseGet(() -> {
                Role role = resolvePublicRole(rawRole);
                User newUser = User.builder()
                        .emailAddress(email)
                        .firstName((String) googlePayload.get("given_name"))
                        .lastName((String) googlePayload.get("family_name"))
                        .avatar((String) googlePayload.get("picture"))
                        .password(passwordEncoder.encode(UUID.randomUUID().toString()))
                        .role(role)
                        .mustChangePassword(false)
                        .build();
                return userRepository.save(newUser);
            });
            if (isNewUser && user.getRole() == Role.ENTREPRENEUR) {
                subscriptionService.createFreeSubscription(user);
            }
            return createAuthResponse(user);
        } catch (Exception e) {
            throw new AuthenticationServiceException("Google authentication failed: " + e.getMessage());
        }
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    private Role resolvePublicRole(String rawRole) {
        if (!StringUtils.hasText(rawRole)) {
            return Role.ENTREPRENEUR;
        }

        Role role;
        try {
            role = Role.valueOf(rawRole.trim().toUpperCase());
        } catch (IllegalArgumentException exception) {
            throw new InvalidRoleException("Invalid role. Allowed roles are COACH or ENTREPRENEUR.");
        }

        if (role == Role.ADMIN) {
            throw new ForbiddenAdminCreationException("Public registration cannot create ADMIN accounts.");
        }

        return role;
    }

    private String normalizeEmail(String emailAddress) {
        return emailAddress.trim().toLowerCase();
    }

    private String trimToNull(String value) {
        if (!StringUtils.hasText(value)) {
            return null;
        }
        return value.trim();
    }

    private AuthResponse createAuthResponse(User user) {
        return new AuthResponse(
                jwtService.generateToken(user),
                user.getIdUser(),
                user.getEmailAddress(),
                user.getRole(),
                user.isMustChangePassword()
        );
    }
}