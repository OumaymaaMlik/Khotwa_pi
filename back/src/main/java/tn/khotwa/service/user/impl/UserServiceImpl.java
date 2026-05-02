package tn.khotwa.service.user.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import tn.khotwa.dto.user.*;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.user.Role;
import tn.khotwa.exception.userException.EmailAlreadyUsedException;
import tn.khotwa.exception.userException.ForbiddenAdminCreationException;
import tn.khotwa.exception.userException.InvalidCredentialsException;
import tn.khotwa.exception.userException.InvalidRoleException;
import tn.khotwa.exception.userException.LastAdminDeletionException;
import tn.khotwa.repository.user.UserRepository;
import tn.khotwa.service.user.CurrentUserService;
import tn.khotwa.service.user.UserMapper;
import tn.khotwa.service.user.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final CurrentUserService currentUserService;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    @Override
    @Transactional(readOnly = true)
    public UserResponse getCurrentUserProfile() {
        return userMapper.toResponse(currentUserService.getCurrentUser());
    }

    @Override
    public UserResponse updateCurrentUserProfile(UpdateProfileRequest request) {
        User user = currentUserService.getCurrentUser();
        if (StringUtils.hasText(request.firstName())) {
            user.setFirstName(request.firstName().trim());
        }
        if (StringUtils.hasText(request.lastName())) {
            user.setLastName(request.lastName().trim());
        }
        if (StringUtils.hasText(request.emailAddress())) {
            String normalizedEmail = normalizeEmail(request.emailAddress());
            ensureEmailAvailable(normalizedEmail, user.getIdUser());
            user.setEmailAddress(normalizedEmail);
        }
        if (request.avatar() != null) {
            user.setAvatar(trimToNull(request.avatar()));
        }
        if (request.phoneNumber() != null) {
            user.setPhoneNumber(trimToNull(request.phoneNumber()));
        }
        if (request.startup() != null) {
            user.setStartup(trimToNull(request.startup()));
        }
        if (request.specialite() != null) {
            user.setSpecialite(trimToNull(request.specialite()));
        }
        if (request.disponibilite() != null) {
            user.setDisponibilite(trimToNull(request.disponibilite()));
        }
        // FIX: champs manquants — region et nomAffiche n'étaient pas persistés
        if (request.region() != null) {
            user.setRegion(trimToNull(request.region()));
        }
        if (request.nomAffiche() != null) {
            user.setNomAffiche(trimToNull(request.nomAffiche()));
        }
        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    public void changeCurrentUserPassword(ChangePasswordRequest request) {
        User user = currentUserService.getCurrentUser();
        if (!passwordEncoder.matches(request.currentPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Current password is invalid.");
        }
        if (!request.newPassword().equals(request.confirmPassword())) {
            throw new InvalidCredentialsException("New password and confirm password do not match.");
        }
        user.setPassword(passwordEncoder.encode(request.newPassword()));
        user.setMustChangePassword(false);
        userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public UserResponse getUserById(Long idUser) {
        return userMapper.toResponse(getRequiredUser(idUser));
    }

    @Override
    public UserResponse updateUserByAdmin(Long idUser, UpdateUserByAdminRequest request) {
        User user = getRequiredUser(idUser);

        if (StringUtils.hasText(request.emailAddress())) {
            String normalizedEmail = normalizeEmail(request.emailAddress());
            ensureEmailAvailable(normalizedEmail, user.getIdUser());
            user.setEmailAddress(normalizedEmail);
        }
        if (StringUtils.hasText(request.firstName())) {
            user.setFirstName(request.firstName().trim());
        }
        if (StringUtils.hasText(request.lastName())) {
            user.setLastName(request.lastName().trim());
        }
        if (request.avatar() != null) {
            user.setAvatar(trimToNull(request.avatar()));
        }
        if (request.pendingPlan() != null) {
            user.setPendingPlan(request.pendingPlan());
        }
        if (request.phoneNumber() != null) {
            user.setPhoneNumber(trimToNull(request.phoneNumber()));
        }
        if (request.planType() != null) {
            user.setPlanType(request.planType());
        }
        if (request.startup() != null) {
            user.setStartup(trimToNull(request.startup()));
        }
        if (request.mustChangePassword() != null) {
            user.setMustChangePassword(request.mustChangePassword());
        }
        if (StringUtils.hasText(request.role())) {
            user.setRole(resolveAdminManagedRole(user, request.role()));
        }

        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    public void deleteUserByAdmin(Long idUser) {
        User user = getRequiredUser(idUser);
        ensureNotLastAdmin(user);
        userRepository.delete(user);
    }

    @Override
    public UserResponse updateUserPlan(Long idUser, UpdateUserPlanRequest request) {
        User user = getRequiredUser(idUser);
        user.setPlanType(request.planType());
        user.setPendingPlan(request.pendingPlan());
        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    public List<EntrepreneurSelectionResponse> getEntrepreneursForCollaboration(String search) {
        return List.of();
    }

    @Override
    @Transactional(readOnly = true)
    public User getRequiredUser(Long idUser) {
        return currentUserService.getUserById(idUser);
    }

    private Role resolveAdminManagedRole(User targetUser, String rawRole) {
        Role requestedRole;
        try {
            requestedRole = Role.valueOf(rawRole.trim().toUpperCase());
        } catch (IllegalArgumentException exception) {
            throw new InvalidRoleException("Invalid role. Allowed roles are ADMIN, COACH, ENTREPRENEUR.");
        }

        if (requestedRole == Role.ADMIN && targetUser.getRole() != Role.ADMIN) {
            throw new ForbiddenAdminCreationException("ADMIN accounts must be created manually in the database.");
        }

        if (targetUser.getRole() == Role.ADMIN && requestedRole != Role.ADMIN) {
            ensureNotLastAdmin(targetUser);
        }

        return requestedRole;
    }

    private void ensureNotLastAdmin(User user) {
        if (user.getRole() == Role.ADMIN && userRepository.countByRole(Role.ADMIN) <= 1) {
            throw new LastAdminDeletionException("The last remaining ADMIN cannot be deleted or demoted.");
        }
    }

    private void ensureEmailAvailable(String emailAddress, Long currentUserId) {
        userRepository.findByEmailAddress(emailAddress).ifPresent(existingUser -> {
            if (!existingUser.getIdUser().equals(currentUserId)) {
                throw new EmailAlreadyUsedException("Email address is already used.");
            }
        });
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
}