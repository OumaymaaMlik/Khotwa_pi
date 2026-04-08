package tn.khotwa.biblio.service.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import tn.khotwa.biblio.dto.user.AdminUpdateUserRequest;
import tn.khotwa.biblio.dto.user.AuthResponse;
import tn.khotwa.biblio.dto.user.SignInRequest;
import tn.khotwa.biblio.dto.user.SignUpRequest;
import tn.khotwa.biblio.dto.user.UpdateProfileRequest;
import tn.khotwa.biblio.dto.user.UserResponse;
import tn.khotwa.biblio.entity.User;
import tn.khotwa.biblio.enums.Role;
import tn.khotwa.biblio.exception.AccessDeniedException;
import tn.khotwa.biblio.exception.ResourceNotFoundException;
import tn.khotwa.biblio.repository.user.UserRepository;
import tn.khotwa.biblio.security.AppUserPrincipal;
import tn.khotwa.biblio.security.JwtService;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserService implements IUserService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Override
    public UserResponse signUp(SignUpRequest req) {
        String normalizedEmail = normalizeEmail(req.getEmailAddress());
        ensureEmailAvailable(normalizedEmail, null);

        User user = User.builder()
            .firstName(req.getFirstName().trim())
            .lastName(req.getLastName().trim())
            .emailAddress(normalizedEmail)
            .password(passwordEncoder.encode(req.getPassword()))
            .role(Role.USER)
            .avatar(req.getAvatar())
            .startup(req.getStartup())
            .phoneNumber(req.getPhoneNumber())
            .build();

        User saved = userRepo.save(user);
        log.info("New user registered id={} email={}", saved.getId(), saved.getEmailAddress());
        return toResponse(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public AuthResponse signIn(SignInRequest req) {
        String normalizedEmail = normalizeEmail(req.getEmailAddress());

        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(normalizedEmail, req.getPassword())
        );

        User user = userRepo.findByEmailAddress(normalizedEmail)
            .orElseThrow(() -> new ResourceNotFoundException("User not found."));

        String token = jwtService.generateToken(new AppUserPrincipal(user));
        log.info("User signed in id={} role={}", user.getId(), user.getRole());

        return new AuthResponse(token, jwtService.getExpirationMs(), toResponse(user));
    }

    @Override
    @Transactional(readOnly = true)
    public UserResponse getMyProfile(Long userId) {
        return toResponse(findUser(userId));
    }

    @Override
    public UserResponse updateMyProfile(Long userId, UpdateProfileRequest req) {
        User user = findUser(userId);
        applyCommonUpdates(
            user,
            req.getFirstName(),
            req.getLastName(),
            req.getEmailAddress(),
            req.getPassword(),
            req.getAvatar(),
            req.getStartup(),
            req.getPhoneNumber()
        );

        User saved = userRepo.save(user);
        log.info("Profile updated id={}", userId);
        return toResponse(saved);
    }

    @Override
    public void deleteMyAccount(Long userId) {
        User user = findUser(userId);
        ensureAdminCanBeRemoved(user);
        userRepo.delete(user);
        log.info("Account deleted id={}", userId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserResponse> getAllUsers() {
        return userRepo.findAll().stream()
            .map(this::toResponse)
            .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public UserResponse getUserById(Long userId) {
        return toResponse(findUser(userId));
    }

    @Override
    public UserResponse adminUpdateUser(Long userId, AdminUpdateUserRequest req) {
        User user = findUser(userId);
        applyCommonUpdates(
            user,
            req.getFirstName(),
            req.getLastName(),
            req.getEmailAddress(),
            req.getPassword(),
            req.getAvatar(),
            req.getStartup(),
            req.getPhoneNumber()
        );

        if (StringUtils.hasText(req.getRole())) {
            user.setRole(parseRole(req.getRole()));
        }

        User saved = userRepo.save(user);
        log.info("Admin updated user id={}", userId);
        return toResponse(saved);
    }

    @Override
    public void adminDeleteUser(Long userId) {
        User user = findUser(userId);
        ensureAdminCanBeRemoved(user);
        userRepo.delete(user);
        log.info("Admin deleted user id={}", userId);
    }

    private User findUser(Long id) {
        return userRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User", id));
    }

    private Role parseRole(String raw) {
        try {
            return Role.valueOf(raw.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid role: " + raw);
        }
    }

    private void applyCommonUpdates(
            User user,
            String firstName,
            String lastName,
            String emailAddress,
            String password,
            String avatar,
            String startup,
            String phoneNumber) {
        if (StringUtils.hasText(firstName)) {
            user.setFirstName(firstName.trim());
        }
        if (StringUtils.hasText(lastName)) {
            user.setLastName(lastName.trim());
        }
        if (StringUtils.hasText(emailAddress)) {
            String normalizedEmail = normalizeEmail(emailAddress);
            ensureEmailAvailable(normalizedEmail, user.getId());
            user.setEmailAddress(normalizedEmail);
        }
        if (StringUtils.hasText(password)) {
            user.setPassword(passwordEncoder.encode(password));
        }
        if (avatar != null) {
            user.setAvatar(avatar);
        }
        if (startup != null) {
            user.setStartup(startup);
        }
        if (phoneNumber != null) {
            user.setPhoneNumber(phoneNumber);
        }
    }

    private void ensureEmailAvailable(String emailAddress, Long currentUserId) {
        userRepo.findByEmailAddress(emailAddress).ifPresent(existingUser -> {
            if (currentUserId == null || !existingUser.getId().equals(currentUserId)) {
                throw new IllegalArgumentException("Email already in use: " + emailAddress);
            }
        });
    }

    private void ensureAdminCanBeRemoved(User user) {
        if (user.getRole() == Role.ADMIN && userRepo.countByRole(Role.ADMIN) <= 1) {
            throw new AccessDeniedException("At least one admin account must remain.");
        }
    }

    private String normalizeEmail(String emailAddress) {
        return emailAddress.trim().toLowerCase();
    }

    private UserResponse toResponse(User user) {
        return UserResponse.builder()
            .id(user.getId())
            .firstName(user.getFirstName())
            .lastName(user.getLastName())
            .emailAddress(user.getEmailAddress())
            .role(user.getRole().name())
            .avatar(user.getAvatar())
            .startup(user.getStartup())
            .phoneNumber(user.getPhoneNumber())
            .build();
    }
}
