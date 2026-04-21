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
import tn.khotwa.dto.User.AuthResponse;
import tn.khotwa.dto.User.LoginRequest;
import tn.khotwa.dto.User.RegisterRequest;
import tn.khotwa.dto.User.UserResponse;
import tn.khotwa.entity.User.User;
import tn.khotwa.enums.User.Role;
import tn.khotwa.exception.User.EmailAlreadyUsedException;
import tn.khotwa.exception.User.ForbiddenAdminCreationException;
import tn.khotwa.exception.User.InvalidCredentialsException;
import tn.khotwa.exception.User.InvalidRoleException;
import tn.khotwa.repository.User.UserRepository;
import tn.khotwa.security.JwtService;
import tn.khotwa.service.User.AuthService;
import tn.khotwa.service.User.UserMapper;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserMapper userMapper;

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

        return userMapper.toResponse(userRepository.save(user));
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

        return new AuthResponse(
            jwtService.generateToken(user),
            user.getIdUser(),
            user.getEmailAddress(),
            user.getRole(),
            user.isMustChangePassword()
        );
    }

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
}