package tn.khotwa.service.UserServices.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import tn.khotwa.dto.user.ChangePasswordRequest;
import tn.khotwa.dto.user.UpdateProfileRequest;
import tn.khotwa.dto.user.UpdateUserByAdminRequest;
import tn.khotwa.dto.user.UpdateUserPlanRequest;
import tn.khotwa.dto.user.UserResponse;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.UserEnum.Role;
import tn.khotwa.exception.UserException.EmailAlreadyUsedException;
import tn.khotwa.exception.UserException.ForbiddenAdminCreationException;
import tn.khotwa.exception.UserException.InvalidCredentialsException;
import tn.khotwa.exception.UserException.InvalidRoleException;
import tn.khotwa.exception.UserException.LastAdminDeletionException;
import tn.khotwa.repository.UserRepo.UserRepository;
import tn.khotwa.service.UserServices.CurrentUserService;
import tn.khotwa.service.UserServices.IUserService;
import tn.khotwa.service.UserServices.UserMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements IUserService {

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
        userRepository.save(user);
        return userMapper.toResponse(user);
    }

    @Override
    public void changeCurrentUserPassword(ChangePasswordRequest request) {
        User user = currentUserService.getCurrentUser();
        user.setPassword(passwordEncoder.encode(request.newPassword()));
        userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream().map(userMapper::toResponse).toList();
    }

    @Override
    @Transactional(readOnly = true)
    public UserResponse getUserById(Long idUser) {
        return userMapper.toResponse(getRequiredUser(idUser));
    }

    @Override
    public UserResponse updateUserByAdmin(Long idUser, UpdateUserByAdminRequest request) {
        User user = getRequiredUser(idUser);
        if (StringUtils.hasText(request.firstName())) {
            user.setFirstName(request.firstName().trim());
        }
        if (StringUtils.hasText(request.lastName())) {
            user.setLastName(request.lastName().trim());
        }
        if (StringUtils.hasText(request.emailAddress())) {
            String normalizedEmail = normalizeEmail(request.emailAddress());
            ensureEmailAvailable(normalizedEmail, idUser);
            user.setEmailAddress(normalizedEmail);
        }
        if (request.avatar() != null) {
            user.setAvatar(trimToNull(request.avatar()));
        }
        if (request.phoneNumber() != null) {
            user.setPhoneNumber(trimToNull(request.phoneNumber()));
        }
        userRepository.save(user);
        return userMapper.toResponse(user);
    }

    @Override
    public void deleteUserByAdmin(Long idUser) {
        userRepository.deleteById(idUser);
    }

    @Override
    public UserResponse updateUserPlan(Long idUser, UpdateUserPlanRequest request) {
        User user = getRequiredUser(idUser);
        user.setPlanType(request.planType());
        user.setPendingPlan(request.pendingPlan());
        userRepository.save(user);
        return userMapper.toResponse(user);
    }

    @Override
    public User getRequiredUser(Long idUser) {
        return userRepository.findById(idUser)
                .orElseThrow(() -> new tn.khotwa.exception.UserException.ResourceNotFoundException("User", idUser));
    }

    private String normalizeEmail(String email) {
        return email == null ? null : email.trim().toLowerCase();
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }

    private void ensureEmailAvailable(String email, Long excludeId) {
        userRepository.findByEmailAddress(email)
                .filter(u -> !u.getIdUser().equals(excludeId))
                .ifPresent(u -> { throw new EmailAlreadyUsedException("Email address is already used."); });
    }
}
